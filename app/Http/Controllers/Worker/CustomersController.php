<?php

namespace App\Http\Controllers\Worker;

use App\Http\Controllers\Controller;
use App\Models\Customers;
use App\Services\VatanSmsService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class CustomersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Worker/Customers/Index', [
            'customersAll' => Customers::getCustomersForDealer()
        ]);
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
        if(Customers::where('email', $request->get('email'))->exists()){
            return response()->json(['message' => 'Bu Mail Adresi İle Kayıtlı Müşteri Mevcut.', 'status' => false]);
        }
        
        $customer = new Customers();
        $customer->type = $request->get('type', 'individual');
        $customer->name = $request->get('name');
        $customer->email = $request->get('email');
        $customer->phone = $request->get('phone');
        $customer->address = $request->get('address');
        
        // Kurumsal müşteri alanları
        if ($customer->type === 'company') {
            $customer->vat_name = $request->get('vatName');
            $customer->vat_number = $request->get('vatNumber');
            $customer->vat_office = $request->get('vatOffice');
        }
        
        $default = [
            "sms" => false,
            "email" => false,
            "push" => false,
        ];
        
        $notificationSettings = json_decode($request->get('notification_settings'), true);
        if ($notificationSettings) {
            foreach ($notificationSettings as $key) {
                if (array_key_exists($key, $default)) $default[$key] = true;
            }
        }
        
        $customer->notification_settings = json_encode($default);
        $dealer_id = auth()->user()->parent_id;
        $customer->dealer_id = $dealer_id;
        $customer->worker_id = auth()->user()->id;
        
        if ($customer->save()) {
            $message = "Sayın " . $customer->name . ", aracınız OLEX Garanti Sistemi'ne kaydedilmiştir. Uygulama süreci boyunca bilgilendirme SMS'leri alacaksınız. İşlem aşamalarını takipte kalın. Teşekkürler!.Panel Linkiniz https://olexfilms.app/redirect/" . $customer->id;
           try{
            VatanSmsService::sendSingleSms($customer->phone, $message);
            \Illuminate\Support\Facades\Mail::to($customer->email)->send(new \App\Mail\SubscribeWebPushMail($customer));
            return response()->json(['message' => 'Müşteri başarıyla eklendi.','status' => true, 'customers' => Customers::getCustomersForDealer()]);
        }catch(\Exception $e){
            return response()->json(['message' => 'Müşteri başarıyla eklendi.Bilgilendirme SMS ve E-Posta gönderimi sırasında bir hata oluştu.','status' => true, 'customers' => Customers::getCustomersForDealer()]);
           }
        } else {
            return response()->json(['message' => 'Müşteri eklenirken bir hata oluştu.', 'status' => false]);
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
        $customer = Customers::find($id);
        if ($customer) {
            $default = [
                "sms" => false,
                "email" => false,
                "push" => false,
            ];
            
            $customer->type = $request->get('type', 'individual');
            $customer->name = $request->get('name');
            $customer->email = $request->get('email');
            $customer->phone = $request->get('phone');
            $customer->address = $request->get('address');
            $customer->player_id = $request->get('player_id');
            
            // Kurumsal müşteri alanları
            if ($customer->type === 'company') {
                $customer->vat_name = $request->get('vatName');
                $customer->vat_number = $request->get('vatNumber');
                $customer->vat_office = $request->get('vatOffice');
            }
            
            $notificationSettings = json_decode($request->get('notification_settings'), true);
            if ($notificationSettings) {
                foreach ($notificationSettings as $key) {
                    if (array_key_exists($key, $default)) $default[$key] = true;
                }
            }
            $customer->notification_settings = json_encode($default);

            if ($customer->save()) {
                return response()->json(['message' => 'Müşteri başarıyla güncellendi.', 'status' => true, 'customers' => Customers::getCustomersForDealer()]);
            } else {
                return response()->json(['message' => 'Müşteri güncellenirken bir hata oluştu.', 'status' => false]);
            }
        } else {
            return response()->json(['message' => 'Bu Id\'ye sahip bir Müşteri bulunamadı.'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function getAll()
    {
        return response()->json(['customers' => Customers::getCustomersForDealer()]);
    }
}
