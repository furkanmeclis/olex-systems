<?php

namespace App\Http\Controllers\Central;

use App\Http\Controllers\Controller;
use App\Models\OrderItems;
use App\Models\Orders;
use App\Models\ProductCode;
use App\Models\Products;
use App\Models\StockRecords;
use App\Models\User;
use App\Services\VatanSmsService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getStatuses()
    {
        return [
            ['value' => 'draft', 'label' => 'Taslak', 'severity' => 'help'],
            ['value' => 'pending', 'label' => 'Onaylandı', 'severity' => 'info'],
            ['value' => 'processing', 'label' => 'Hazırlanıyor', 'severity' => 'warning'],
            ['value' => 'shipping', 'label' => 'Kargoda', 'severity' => 'warning'],
            ['value' => 'completed', 'label' => 'Tamamlandı', 'severity' => 'success'],
            ['value' => 'cancelled', 'label' => 'İptal Edildi', 'severity' => 'danger'],
            ['value' => 'refunded', 'label' => 'İade Edildi', 'severity' => 'danger'],
        ];
    }

    public function getRoleDetails($role): string
    {
        $roleDetails = [
            'super' => 'Super Admin',
            'central' => 'Merkez',
            'central_salesman' => 'Merkez Satış Elemanı',
            'central_contact' => 'Merkez İletişim Elemanı',
            'central_worker' => 'Merkez Çalışanı',
            'admin' => 'Bayi',
            'worker' => 'Çalışan',
        ];
        return $roleDetails[$role];
    }

    public function index()
    {
        return Inertia::render('Central/Orders/Index', [
            'ordersAll' => Orders::getAllData(),
            'statuses' => $this->getStatuses(),
            'salesmans' => User::whereIn('role', ['central', 'central_salesman', 'central_contact', 'central_worker', 'super'])->get(['id', 'name', 'role'])->map(function ($user) {
                $std = new \stdClass();
                $std->id = $user->id;
                $std->label = $user->roleLabel();
                return $std;
            }),
        ]);
    }

    public function trashAll()
    {
        return response()->json(['records' => Orders::getAllData(true)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $dealer = User::find(request()->dealer_id);
        if ($dealer || $dealer->role == "admin") {
            $products = json_decode(request()->products);
            $controlProducts = Products::whereIn('id', array_column($products, 'product_id'))->get();
            if (count($controlProducts) == count($products)) {
                $order = new Orders();
                $order->dealer_id = request()->dealer_id;
                $order->status = 'draft';
                $order->user_id = auth()->user()->id;
                $order->note = request()->note ?? "";
                if ($order->save()) {
                    $savedItems = 0;
                    $unSavedItems = [];
                    foreach ($products as $product) {
                        $productPrice = 0;
                        foreach ($controlProducts as $prd) {
                            if ($prd->id == $product->product_id) {
                                $productPrice = $prd->price;
                            }
                        }
                        $orderItem = new OrderItems();
                        $orderItem->order_id = $order->id;
                        $orderItem->product_id = $product->product_id;
                        $orderItem->quantity = $product->quantity;
                        $orderItem->price = $productPrice * $product->quantity;
                        if ($orderItem->save()) {
                            $savedItems++;
                            $stockRecord = new StockRecords();
                            $stockRecord->product_id = $product->product_id;
                            $stockRecord->quantity = $product->quantity;
                            $stockRecord->status = 'draft';
                            $stockRecord->note = 'Otomatik Stok Kaydı';
                            $stockRecord->user_id = $order->user_id;
                            $stockRecord->dealer_id = $dealer->id;
                            $stockRecord->order_id = $order->id;
                            $stockRecord->save();
                        } else {
                            $unSavedItems[] = $product;
                        }
                    }
                    $phones = User::where("role", "central_worker")->whereNotNull("phone")->get("phone")->pluck("phone")->toArray();
                    $message = "Sayın yetkili, sistemde " . $dealer->name . " tarafından yeni bir sipariş oluşturuldu. Lütfen kontrol ediniz.";
                    VatanSmsService::sendSms($phones, $message);
                    VatanSmsService::sendSingleSms($dealer->phone, "Sayın " . $dealer->name . " , siparişiniz merkeze ulaşmıştır. Bir hata olduğunu düşünüyorsanız lütfen merkeze ulaşın.");
                    if ($savedItems == count($products)) {
                        $orders = Orders::getAllData();

                        return response()->json(['message' => 'Sipariş oluşturuldu', 'status' => true, 'orders' => $orders]);
                    } else {
                        return response()->json(['message' => 'Sipariş Oluşturuldu.Bazı ürünler eklenemedi', 'status' => false, 'unSavedItems' => $unSavedItems]);
                    }


                } else {
                    return response()->json(['message' => 'Bir sorun oluştu sipariş oluşturulamadı', 'status' => false]);
                }
            } else {
                return response()->json(['message' => 'Ürün bulunamadı', 'status' => false]);
            }
        } else {
            return response()->json(['message' => 'Bayi bulunamadı', 'status' => false]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Orders $orders)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Orders $orders)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $order = Orders::find($id);
        if ($order) {
            $dealer = User::find(request()->dealer_id);
            if ($dealer || $dealer->role == "admin") {
                $products = json_decode(request()->products);
                $controlProducts = Products::whereIn('id', array_column($products, 'product_id'))->get();
                if (count($controlProducts) == count($products)) {
                    if ($order->dealer_id != $dealer->id) {
                        $order->dealer_id = request()->dealer_id;
                    }
                    $updateArray = $this->getStockRecordsStatus($order);

                    if ($order->status != request()->status) {
                        $order->status = request()->status;
                        $updateArray = $this->getStockRecordsStatus($order);
                        StockRecords::where('order_id', $order->id)->update($updateArray);
                    }
                    if ($order->note != request()->note) {
                        $order->note = request()->note;
                    }
                    if ($order->user_id != request()->user_id) {
                        $order->user_id = request()->user_id;
                    }
                    if ($request->status === 'shipping') {
                        $order->tracking_code = $request->tracking_code;
                        $order->tracking_url = $request->tracking_url;
                    }
                    if ($order->save()) {
                        $savedItems = 0;
                        $unSavedItems = [];
                        $orderItemProductIds = OrderItems::where('order_id', $order->id)->get(['id', 'product_id'])->toArray();
                        $usagedProducts = [];
                        foreach ($products as $product) {
                            $productPrice = 0;
                            $usagedProducts[] = $product->product_id;
                            foreach ($controlProducts as $prd) {
                                if ($prd->id == $product->product_id) {
                                    $productPrice = $prd->price;
                                }
                            }
                            $orderItem = OrderItems::where('order_id', $order->id)->where('product_id', $product->product_id)->first();
                            if ($orderItem) {
                                $orderItem->quantity = $product->quantity;
                                $orderItem->price = $productPrice * $product->quantity;
                                if ($orderItem->save()) {
                                    $savedItems++;
                                    $stockRecord = StockRecords::where('order_id', $order->id)->where('product_id', $product->product_id)->first();
                                    if ($stockRecord) {
                                        $stockRecord->quantity = $product->quantity;
                                        $stockRecord->save();
                                    }
                                } else {
                                    $unSavedItems[] = $product;
                                }
                            } else {
                                $orderItem = new OrderItems();
                                $orderItem->order_id = $order->id;
                                $orderItem->product_id = $product->product_id;
                                $orderItem->quantity = $product->quantity;
                                $orderItem->price = $productPrice * $product->quantity;
                                if ($orderItem->save()) {
                                    $savedItems++;
                                    $stockRecord = new StockRecords();
                                    $stockRecord->product_id = $product->product_id;
                                    $stockRecord->quantity = $product->quantity;
                                    $stockRecord->status = $updateArray["status"];
                                    $stockRecord->note = 'Otomatik Stok Kaydı';
                                    $stockRecord->user_id = auth()->user()->id;
                                    $stockRecord->dealer_id = $dealer->id;
                                    $stockRecord->order_id = $order->id;
                                    $stockRecord->save();
                                } else {
                                    $unSavedItems[] = $product;
                                }
                            }
                        }
                        $deletedItems = array_diff(array_column($orderItemProductIds, 'product_id'), $usagedProducts);
                        if (count($deletedItems) > 0) {
                            OrderItems::where('order_id', $order->id)->whereIn('product_id', $deletedItems)->delete();
                            StockRecords::where('order_id', $order->id)->whereIn('product_id', $deletedItems)->delete();
                        }
                        if ($savedItems == count($products)) {
                            $orders = [];
                            if ($request->dealerPage == 'true') {
                                $orders = Orders::getAllData(false, $order->dealer_id);
                            } else {
                                $orders = Orders::getAllData();
                            }
                            return response()->json(['message' => 'Sipariş güncellendi', 'status' => true, 'orders' => $orders]);
                        } else {
                            return response()->json(['message' => 'Sipariş Güncellendi.Bazı ürünler eklenemedi', 'status' => false, 'unSavedItems' => $unSavedItems]);
                        }
                    }
                } else {
                    return response()->json(['message' => 'Ürünler bulunamadı', 'status' => false]);
                }
            } else {
                return response()->json(['message' => 'Bayi bulunamadı', 'status' => false]);
            }
        } else {
            return response()->json(['message' => 'Bu Id\'ye ait bir sipariş bulunamadı', 'status' => false]);
        }
    }

    public function updateStatus(Request $request, $id): \Illuminate\Http\JsonResponse
    {
        $order = Orders::find($id);
        if ($order) {
            $newStatus = $request->status;
            if ($order->status != $newStatus) {
                $oldStatus = $order->status;
                $order->status = $newStatus;
                $order->user_id = auth()->user()->id;
                $updateArray = $this->getStockRecordsStatus($order);
                if ($order->save()) {
                    StockRecords::where('order_id', $order->id)->update($updateArray);
                    return response()->json(['message' => 'Sipariş durumu güncellendi', 'status' => true, 'updated_at' => $order->updated_at]);

                } else {

                    return response()->json(['message' => 'Sipariş durumu güncellenemedi 1', 'status' => false]);
                }
            } else {
                return response()->json(['message' => 'Sipariş durumu güncellendi', 'status' => true, "dirty" => false]);
            }
        } else {
            return response()->json(['message' => 'Bu Id\'ye ait bir sipariş bulunamadı', 'status' => false]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): \Illuminate\Http\JsonResponse
    {
        $order = Orders::find($id);
        if ($order) {
            if ($order->delete()) {
                StockRecords::where('order_id', $order->id)->update(['status' => 'canceled', 'canceled_at' => now(), 'note' => 'Otomatik Güncelleme - Sipariş Silindi - ' . date('d.m.Y H:i:s')]);
                return response()->json(['message' => 'Sipariş başarıyla silindi.']);
            } else {
                return response()->json(['message' => 'Sipariş silinirken bir hata oluştu.'], 500);
            }
        } else {
            return response()->json(['message' => 'Bu Id\'ye sahip bir sipariş bulunamadı.'], 404);
        }
    }

    public function multipleDestroy()
    {
        $recordIds = request()->get('recordIds');
        $recordsCount = Orders::whereIn('id', $recordIds)->count();
        if (Orders::whereIn('id', $recordIds)->delete()) {
            StockRecords::whereIn('order_id', $recordIds)->update(['status' => 'canceled', 'canceled_at' => now(), 'note' => 'Otomatik Güncelleme - Sipariş Silindi - ' . date('d.m.Y H:i:s')]);
            return response()->json(['message' => $recordsCount . ' adet sipariş başarıyla silindi']);

        } else {
            return response()->json(['message' => 'Siparişler silinirken bir hata oluştu.'], 404);
        }
    }

    public function restore()
    {
        $recordIds = request()->get('recordIds');
        $recordsCount = Orders::whereIn('id', $recordIds)->onlyTrashed()->count();
        if (Orders::whereIn('id', $recordIds)->restore()) {
            Orders::whereIn('id', $recordIds)->update(['status' => 'draft']);
            StockRecords::whereIn('order_id', $recordIds)->update(['status' => 'draft', 'drafted_at' => now(), 'note' => 'Otomatik Güncelleme - Sipariş Geri Yüklendi - ' . date('d.m.Y H:i:s')]);
            return response()->json(['message' => $recordsCount . ' adet sipariş başarıyla geri yüklendi', 'records' => Orders::getAllData()]);

        } else {
            return response()->json(['message' => 'Siparişler geri yüklenirken bir hata oluştu.'], 404);
        }
    }

    /**
     * @param $order
     * @return array
     */
    public function getStockRecordsStatus($order): array
    {
        $updateArray = ["status" => ""];
        if ($order->status == 'pending' || $order->status == 'processing' || $order->status == 'draft' || $order->status == 'shipping') {
            $updateArray["status"] = 'draft';
            $updateArray["drafted_at"] = now();
        } elseif ($order->status == 'completed') {
            $updateArray["status"] = 'confirmed';
            $updateArray["confirmed_at"] = now();
        } elseif ($order->status == 'cancelled' || $order->status == 'refunded') {
            $updateArray["status"] = 'canceled';
            $updateArray["canceled_at"] = now();
        }
        $updateArray["note"] = "Otomatik Güncelleme - Bağlantılı Sipariş Id : " . $order->id . " - " . date('d.m.Y H:i:s') . " - " . $updateArray["status"];
        return $updateArray;
    }

    public function listProductCodes($id): \Illuminate\Http\JsonResponse
    {
        $order = Orders::find($id);
        if ($order) {
            $codes = $order->getProductCodes();
            $availableCodes = ProductCode::getAvailableCodes($order->id);
            return response()->json(['message' => 'Ürün kodları listelendi', 'status' => true, 'codes' => $codes, 'availableCodes' => $availableCodes]);

        } else {
            return response()->json(['message' => 'Bu Id\'ye ait bir sipariş bulunamadı', 'status' => false]);
        }
    }

    public function updateProductCodes($id)
    {
        $order = Orders::find($id);
        if ($order) {
            $codes = explode(',', request()->get("codes"));
            $beforeCodes = ProductCode::where('order_id', $order->id)->whereNotIn('code', $codes)->get();
            foreach ($beforeCodes as $beforeCode) {
                if (!in_array($beforeCode->code, $codes)) {
                    $beforeCode->order_id = null;
                    $beforeCode->dealer_id = null;
                    $beforeCode->location = 'central';
                    $beforeCode->save();
                }
            }

            ProductCode::whereIn('code', $codes)->get()->map(function ($code) use ($order) {
                $code->order_id = $order->id;
                $code->dealer_id = $order->dealer_id;
                $code->location = 'dealer';
                $code->save();
            });
            return response()->json(['message' => 'Ürün kodları güncellendi', 'status' => true, 'records' => Orders::getAllData()]);
        } else {
            return response()->json(['message' => 'Bu Id\'ye ait bir sipariş bulunamadı', 'status' => false]);
        }
    }

    public function updateTrackingCode(Request $request, $id)
    {
        $order = Orders::findOrFail($id);

        if ($order->status !== 'shipping') {
            return response()->json([
                'status' => false,
                'message' => 'Sipariş kargoda durumunda değil.'
            ]);
        }
        //s

        $order->tracking_code = $request->tracking_code;
        $order->tracking_url = $request->tracking_url;

        if ($order->save()) {
            $shortenedUrl = VatanSmsService::shortenUrl($request->tracking_url);
            if ($shortenedUrl) {
                $dealer = $order->dealer();
                $message = "Sayın " . $dealer->name . ", siparişiniz kargoya verildi. Kargo takip numaranız: " . $request->tracking_code . " Kargo takip linki: " . $shortenedUrl;
                VatanSmsService::sendSingleSms($dealer->phone, $message);
            }
            return response()->json([
                'status' => true,
                'message' => 'Kargo takip bilgileri güncellendi.',
                'records' => Orders::getAllData()
            ]);
        }

        return response()->json([
            'status' => false,
            'message' => 'Kargo takip bilgileri güncellenirken bir hata oluştu.'
        ]);
    }
}
