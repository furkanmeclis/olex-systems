<?php

namespace App\Http\Controllers\Worker;

use App\Http\Controllers\Controller;
use App\Models\Customers;
use App\Models\ProductCode;
use App\Models\Products;
use App\Models\ServiceProducts;
use App\Models\Services;
use App\Models\StockRecords;
use Barryvdh\DomPDF\Facade\Pdf;
use DateInterval;
use DateTime;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServicesController extends Controller
{
    public $defaultStatusHistoryString = '{"pending": {"created_at": null,"updated_at": null},"progress": {"created_at": null,"updated_at": null},"completed": {"created_at": null,"updated_at": null},"cancelled":{"created_at": null,"updated_at": null}}';

    public function index()
    {

        return Inertia::render('Worker/Services/Index', [
            'servicesAll' => Services::getServices()
        ]);
    }

    public function pdf()
    {
        Pdf::setOption(['dpi' => 150, 'defaultFont' => 'sans-serif', 'isRemoteEnabled' => true]);
        $pdf = PDF::loadView('services')->stream('hizmet.pdf');
        return $pdf;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Worker/Services/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $customer = Customers::find($request->input('customer_id'));
        if ($customer) {
            $products = [];
            foreach ($request->input('products') as $product) {
                $pr = Products::find($product['id']);
                if ($pr) {
                    $pr->code = $product['code'];
                    $products[] = $pr;
                }
            }
            if (count($products) > 0) {
                $carData = [
                    "brand" => $request->input('car_brand'),
                    "model" => $request->input('car_model'),
                    "generation" => $request->input('car_generation'),
                    "year" => $request->input('car_year'),
                    "plate" => $request->input('car_plate'),
                    "km" => $request->input('car_kilometer'),
                    "brand_logo" => $request->input('brand_logo'),
                ];
                $serviceNoControl = Services::where('service_no', $request->input('service_no'))->first();
                if ($serviceNoControl) {
                    return response()->json(['message' => 'Hizmet numarası zaten kullanımda.', 'status' => false]);
                }
                $newService = new Services();
                $newService->customer_id = $customer->id;
                $newService->car = $carData;
                if (auth()->user()->role == 'worker') {
                    $newService->worker_id = auth()->user()->id;
                    $newService->dealer_id = auth()->user()->parent_id;
                } elseif (auth()->user()->role == 'dealer') {
                    $newService->dealer_id = auth()->user()->id;
                }
                $newService->note = $request->input('notes');
                $newService->status = 'progress';
                $newService->body = $request->input('body');
                $status_history = json_decode($this->defaultStatusHistoryString, true);
                $status_history['pending']['created_at'] = now();
                $status_history['pending']['updated_at'] = now();
                $status_history['progress']['created_at'] = now();
                $status_history['progress']['updated_at'] = now();
                $newService->status_history = $status_history;
                $newService->service_no = $request->input('service_no');
                if ($newService->save()) {
                    foreach ($products as $product) {
                        $newProduct = new ServiceProducts();
                        $newProduct->service_id = $newService->id;
                        $newProduct->product_id = $product->id;
                        $newProduct->product_code = $product->code;
                        $stockRecord = ProductCode::where('product_id', $product->id)->where('location', 'dealer')->where("code", $product->code)->first();
                        if ($stockRecord) {
                            $stockRecord->used = 1;
                            $stockRecord->used_at = now();
                            $stockRecord->save();
                        }
                        if (!$newProduct->save()) {
                            $newService->delete();
                            return response()->json(['message' => 'Hizmet oluşturulurken bir hata oluştu.', 'status' => false]);
                        }
                    }
                    if ($customer->player_id != null) {
                        $token = $customer->player_id;
                        $company = $newService->dealer()->company();
                        $notify = new \App\Notifications\FirebaseNotification("OLEX® Films, Aracınız Teslim Alındı 🛞", "Sayın $customer->name, $company->company_name şubemize bırakmış olduğunuz " . $carData["brand"] . " " . $carData["model"] . " " . $carData["year"] . " Marka Model araç teslim alınmış, uygulama için hazırlıkları yapılmaktadır.", $token, route("warranty.index", $newService->service_no));
                        $notify->sendPushNotification();
                    }

                    return response()->json(['message' => 'Hizmet başarıyla oluşturuldu.', 'status' => true]);
                } else {
                    return response()->json(['message' => 'Hizmet oluşturulurken bir hata oluştu.', 'status' => false]);
                }

            } else {
                return response()->json(['message' => 'Ürün bulunamadı.', 'status' => false]);
            }
        } else {
            return response()->json(['message' => 'Müşteri bulunamadı.', 'status' => false]);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $service = Services::find($id);
        if ($service) {
            $productCodes = ServiceProducts::where('service_id', $service->id)->get("product_code");
            // ProductCodes üzerinde used=0 güncellemesi yapalım
            foreach ($productCodes as $productCode) {
                $productCode = ProductCode::where('code', $productCode->product_code)->first();
                if ($productCode) {
                    $productCode->used = 0;
                    $productCode->used_at = null;
                    $productCode->save();
                }
            }
            if ($service->delete()) {
                return response()->json(['message' => 'Hizmet başarıyla silindi.', 'status' => true,"services" => Services::getServices()]);
            } else {
                return response()->json(['message' => 'Hizmet silinirken bir hata oluştu.', 'status' => false]);
            }
        } else {
            return response()->json(['message' => 'Hizmet bulunamadı.', 'status' => false]);
        }
    }

    /**
     * @throws \Exception
     */
    public function pdfSourceDataService($idOrServiceNumber,$returnArray=false): \Illuminate\Http\JsonResponse|array
    {
        $service = Services::where('service_no', $idOrServiceNumber)->orWhere('id', $idOrServiceNumber)->first();
        if ($service) {
            $serviceProducts = $service->getProducts();
            $products = [];
            foreach ($serviceProducts as $serviceProduct) {
                $product = Products::find($serviceProduct->product_id);
                if ($product) {
                    $products[] = [
                        "category" => $product->category,
                        "code" => $serviceProduct->product_code,
                        "name" => $product->name,
                        "warranty" => $serviceProduct->warranty_text,
                    ];
                }
            }
            $data = [
                "brand" => $service->car["brand"],
                "model" => $service->car["model"],
                "generation" => $service->car["generation"],
                "year" => $service->car["year"],
                "brand_logo" => $service->car["brand_logo"],
                "body_data" => $service->body,
                "applied_services" => $products,
                "dealer" => $service->dealer()->company(),
                "plate" => $service->car["plate"],
                "service_no" => $service->service_no,
            ];
            if($returnArray) {
                return [
                    "data" => $data,
                    "status" => true
                ];
            }else{
                return response()->json(['data' => $data, 'status' => true]);
            }
        } else {
            if($returnArray) {
                return [
                    "message" => "Hizmet bulunamadı.",
                    "status" => false
                ];
            }else{
                return response()->json(['message' => 'Hizmet bulunamadı.', 'status' => false]);
            }
        }
    }

    public function startWarranty($serviceNo)
    {
        $service = Services::where('service_no', $serviceNo)->first();
        if ($service) {
            $status_history = $service->status_history;
            $status_history['completed']['created_at'] = now();
            $status_history['completed']['updated_at'] = now();
            $service->status = 'completed';
            $service->status_history = $status_history;
            if ($service->save()) {
                $token = $service->customer()->player_id;
                $notify = new \App\Notifications\FirebaseNotification(env("APP_NAME"), "⏳ Garanti Süreciniz Başlatıldı !\nAracınızı güvence altına aldık. İlerleyen adımlar ve destek için bildirimleri açık tutmayı unutmayın!", $token, route("warranty.index", $service->service_no));
                $notify->sendPushNotification();
                return response()->json([
                    'message' => 'Hizmet başlatıldı.',
                    'status' => true,
                    "services" => Services::getServices(),
                ]);
            } else {
                return response()->json(['message' => 'Hizmet başlatılırken bir hata oluştu.', 'status' => false]);
            }
        } else {
            return response()->json(['message' => 'Hizmet bulunamadı.', 'status' => false]);
        }
    }
}
