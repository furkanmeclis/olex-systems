<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Services extends Model
{
    use HasFactory;

    public $casts = [
        "car" => "array",
        "body" => "array",
        "status_history" => "array"
    ];

    public function addProducts($products)
    {
        $ignore = false;
        $error_message = '';
        foreach ($products as $product) {
            try {
                $newProduct = new ServiceProducts();
                $newProduct->service_id = $this->id;
                $newProduct->product_id = $product->id;
                $newProduct->product_code = $product->code;
                if (!$newProduct->save()) {
                    $ignore = true;
                }
            } catch (\Exception $e) {
                $ignore = true;
                $error_message = $e->getMessage();
            }
        }
        return [$ignore, $error_message];
    }

    public function getProducts()
    {
        return ServiceProducts::where('service_id', $this->id)->get()->map(function ($product) {
            $product->product = Products::find($product->product_id);
            $service = $this;
            if ($product->product) {
                if ($service->status == "completed") {
                    $implementationDate = new \DateTime($service->status_history['completed']['created_at']);
                    $warrantyEndDate = new \DateTime($service->status_history['completed']['created_at']);
                    $warrantySure = !empty($product->product->warranty) ? $product->product->warranty : 0;
                    $warrantyEndDate->modify('+' . str_replace([" yıl", " Yıl"], "", $warrantySure) . ' year');
                    $now = new \DateTime();
                    $product->warrantyEndDate = $warrantyEndDate;
                    if ($now->format("U") < $warrantyEndDate->format("U")) { // not working on expired warranty
                        $interval = $implementationDate->diff($now);
                        $yearsPassed = $interval->y;
                        $product->warranty_text = str_replace([" yıl", " Yıl"], "", $warrantySure) . ' YIL / ' . $yearsPassed . '.yıl';
                        $product->warranty = [
                            "label" => $product->warranty_text,
                            "severity" => "info",
                            "end_date" => $warrantyEndDate->format('d.m.Y'),
                            "warrantyEnded" => false,
                            "name" => $product->product->name
                        ];
                    } else {
                        $product->warranty_text = "X - " . $warrantyEndDate->format('d.m.Y');
                        $product->warranty = [
                            "label" => "Garanti Süresi Doldu",
                            "severity" => "danger",
                            "end_date" => $warrantyEndDate->format('d.m.Y'),
                            "warrantyEnded" => true,
                            "name" => $product->product->name
                        ];
                    }
                } else {
                    $product->warranty_text = "Başlamadı";
                    $product->warranty = [
                        "label" => "Başlamadı",
                        "severity" => "info",
                        "end_date" => "",
                        "warrantyEnded" => false,
                        "name" => $product->product->name
                    ];
                }

                return $product;
            }else{
                return null;
            }
        })->filter(function ($product) {
            return $product != null;
        });
    }

    public static function getServices($dealerId = false)
    {
        $services = null;
        if (auth()->user()->role == 'worker') {
            $services = Services::where('worker_id', auth()->user()->id);
        } elseif (auth()->user()->role == 'dealer') {
            $services = Services::where('dealer_id', auth()->user()->id);
        } else {
            $services = Services::where('id', '>', 0);
        }
        if ($dealerId) {
            $services = Services::where('dealer_id', $dealerId);
        }
        $services = $services->get()->map(function ($service) {
            $statusSeverities = [
                'pending' => 'help',
                'progress' => 'info',
                'completed' => 'success',
                'cancelled' => 'danger'
            ];
            $statusLabels = [
                'pending' => 'Taslak',
                'progress' => 'Devam Ediyor',
                'completed' => 'Tamamlandı',
                'cancelled' => 'İptal Edildi'
            ];
            $service->products = $service->getProducts();
            if ($service->status === "completed") {
                $warranty = [];
                foreach ($service->products as $product) {
                    $warranty[] = $product->warranty;
                }
                $service->warranty = $warranty;
            }
            $service->customer = Customers::find($service->customer_id);
            $service->worker = User::find($service->worker_id);
            $service->dealer = User::find($service->dealer_id);
            $service->status_label = $statusLabels[$service->status];
            $service->status_severity = $statusSeverities[$service->status];
            return $service;
        });
        return $services;
    }

    public static function getCustomerServices($customerId)
    {
        return Services::where('customer_id', $customerId)->get()->map(function ($service) {
            $statusSeverities = [
                'pending' => 'help',
                'progress' => 'info',
                'completed' => 'success',
                'cancelled' => 'danger'
            ];
            $statusLabels = [
                'pending' => 'Taslak',
                'progress' => 'Devam Ediyor',
                'completed' => 'Tamamlandı',
                'cancelled' => 'İptal Edildi'
            ];

            $service->worker = User::find($service->worker_id);
            $service->dealer = User::find($service->dealer_id);
            $service->status_label = $statusLabels[$service->status];
            $service->status_severity = $statusSeverities[$service->status];
            return $service;
        });

    }

    public function dealer()
    {
        return User::find($this->dealer_id);
    }

    public function customer()
    {
        return Customers::find($this->customer_id);
    }

    public static function generateChartSuper(): array
    {
        $months = [
            "01" => "Ocak",
            "02" => "Şubat",
            "03" => "Mart",
            "04" => "Nisan",
            "05" => "Mayıs",
            "06" => "Haziran",
            "07" => "Temmuz",
            "08" => "Ağustos",
            "09" => "Eylül",
            "10" => "Ekim",
            "11" => "Kasım",
            "12" => "Aralık"
        ];
        $services = Services::where('status', 'completed')->get();
        $chartData = [];
        $brandData = [];
        $dealerData = [];
        $workerServiceData = [];
        foreach ($services as $service) {
            $statusHistory = $service->status_history;
            $completedDate = new \DateTime($statusHistory['completed']['created_at']);
            $month = $completedDate->format('m');
            $year = $completedDate->format('Y');
            $key = $year . '-' . $months[$month];
            if (isset($chartData[$key])) {
                $chartData[$key]++;
            } else {
                $chartData[$key] = 1;
            }
            $car = $service->car;
            if (isset($brandData[$car['brand']])) {
                $brandData[$car['brand']]++;
            } else {
                $brandData[$car['brand']] = 1;
            }
            $dealerName = User::where('id', $service->dealer_id)->first("name")->name;
            if (isset($dealerData[$dealerName])) {
                $dealerData[$dealerName]++;
            } else {
                $dealerData[$dealerName] = 1;
            }
            if (isset($workerServiceData[$service->worker_id])) {
                $workerServiceData[$service->worker_id]++;
            } else {
                $workerServiceData[$service->worker_id] = 1;
            }
        }
        $workerData = [];
        foreach ($workerServiceData as $workerId => $count) {
            $worker = User::where('id', $workerId)->first("name");
            $workerData[$worker->name] = $count;
        }
        $serviceProducts = ServiceProducts::all();
        $productData = [];
        foreach ($serviceProducts as $product) {
            if (isset($productData[$product->product_id])) {
                $productData[$product->product_id]++;
            } else {
                $productData[$product->product_id] = 1;
            }
        }
        $returnProductData = [];
        foreach ($productData as $productId => $count) {
            $product = Products::where('id', $productId)->first("name");
            $returnProductData[$product->name] = $count;
        }
        $productStocks = [];
        foreach (ProductCode::whereIn("product_id",Products::where("category","PPF")->get("id")->pluck("id")->toArray())->get(["product_id","used"]) as $code) {
            if($code->used == 0){
                if(isset($productStocks[$code->product_id]["unused"])){
                    $productStocks[$code->product_id]["unused"]++;
                }else{
                    $productStocks[$code->product_id]["unused"] = 1;
                }
            }else{
                if(isset($productStocks[$code->product_id]["used"])){
                    $productStocks[$code->product_id]["used"]++;
                }else{
                    $productStocks[$code->product_id]["used"] = 1;
                }
            }
        }
        $productStockData = [];
        foreach ($productStocks as $productId => $stock) {
            $product = Products::where('id', $productId)->first("name");
            $productStockData[$product->name] = $stock;
        }
        $customersDealerData = [];
        $customers = Customers::all();
        foreach ($customers as $customer) {
            if (isset($customersDealerData[$customer->dealer_id])) {
                $customersDealerData[$customer->dealer_id]++;
            } else {
                $customersDealerData[$customer->dealer_id] = 1;
            }
        }
        $dealerCustomerData = [];
        foreach ($customersDealerData as $dealerId => $count) {
            $dealer = User::where('id', $dealerId)->first("name");
            $dealerCustomerData[$dealer->name] = $count;
        }

        arsort($brandData);
        arsort($dealerData);
        arsort($returnProductData);
        arsort($dealerCustomerData);
        arsort($workerData);
        return [
            "chart" => [
                "labels" => array_keys($chartData),
                "data" => array_values($chartData)
            ],
            "brands" => [
                "labels" => array_keys($brandData),
                "data" => array_values($brandData)
            ],
            "dealer" => [
                "labels" => array_keys($dealerData),
                "data" => array_values($dealerData)
            ],
            "products" => [
                "labels" => array_keys($returnProductData),
                "data" => array_values($returnProductData)
            ],
            "dealerCustomer" => [
                "labels" => array_keys($dealerCustomerData),
                "data" => array_values($dealerCustomerData)
            ],
            "serviceWorker" => [
                "labels" => array_keys($workerData),
                "data" => array_values($workerData)
            ],
            "productStock" => [
                "labels" => array_keys($productStockData),
                "data" => array_values($productStockData)
            ]
        ];
    }

    public static function generateChartAdmin($dealerId = false): array
    {
        $months = [
            "01" => "Ocak",
            "02" => "Şubat",
            "03" => "Mart",
            "04" => "Nisan",
            "05" => "Mayıs",
            "06" => "Haziran",
            "07" => "Temmuz",
            "08" => "Ağustos",
            "09" => "Eylül",
            "10" => "Ekim",
            "11" => "Kasım",
            "12" => "Aralık"
        ];
        $dealer = auth()->user();
        if ($dealerId) {
            $dealer = User::find($dealerId);
        }
        $services = Services::where('status', 'completed')->where("dealer_id", $dealer->id)->get();
        $chartData = [];
        $brandData = [];
        $workerData = [];
        foreach ($services as $service) {
            $statusHistory = $service->status_history;
            $completedDate = new \DateTime($statusHistory['completed']['created_at']);
            $month = $completedDate->format('m');
            $year = $completedDate->format('Y');
            $key = $year . '-' . $months[$month];
            if (isset($chartData[$key])) {
                $chartData[$key]++;
            } else {
                $chartData[$key] = 1;
            }
            $car = $service->car;
            if (isset($brandData[$car['brand']])) {
                $brandData[$car['brand']]++;
            } else {
                $brandData[$car['brand']] = 1;
            }
            $worker = User::where('id', $service->worker_id)->first("name")->name;
            if (isset($workerData[$worker])) {
                $workerData[$worker]++;
            } else {
                $workerData[$worker] = 1;
            }
        }
        return [
            "chart" => [
                "labels" => array_keys($chartData),
                "data" => array_values($chartData)
            ],
            "brands" => [
                "labels" => array_keys($brandData),
                "data" => array_values($brandData)
            ],
            "worker" => [
                "labels" => array_keys($workerData),
                "data" => array_values($workerData)
            ]
        ];
    }
}
