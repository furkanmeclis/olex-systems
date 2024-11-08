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
            "dealer" => [
                "labels" => array_keys($dealerData),
                "data" => array_values($dealerData)
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
