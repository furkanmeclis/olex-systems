<?php

namespace App\Http\Controllers\Dealer;

use App\Models\Customers;
use App\Models\DealerDetails;
use App\Models\Orders;
use App\Models\Services;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class DealerHomeController extends \App\Http\Controllers\Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Dealer/Index', [

        ]);
    }

    public function settings(): \Inertia\Response
    {
        return Inertia::render('Dealer/Settings', [
            "company" => auth()->user()->company()
        ]);
    }

    public function workers()
    {
        return Inertia::render('Dealer/Workers/Index', [
            "workers" => auth()->user()->workers(),
            "dealer" => auth()->user()
        ]);
    }

    public function services()
    {
        return Inertia::render('Dealer/Services', [
            "servicesAll" => Services::getServices(auth()->user()->id)
        ]);
    }

    public function stockRecords()
    {
        return Inertia::render('Dealer/StockRecords', [
            "stockRecords" => auth()->user()->getStockRecords()
        ]);
    }

    public function customers()
    {
        return Inertia::render('Dealer/Customers', [
            "customersAll" => auth()->user()->customers()
        ]);
    }

    public function updateCustomer($id): \Illuminate\Http\JsonResponse
    {
        $customer = Customers::find($id);
        $request = request();
        if ($customer) {
            $default = [
                "sms" => false,
                "email" => false,
                "push" => false,
            ];
            $customer->name = $request->get('name');
            $customer->email = $request->get('email');
            $customer->phone = $request->get('phone');
            $customer->address = $request->get('address');
            $customer->player_id = $request->get('player_id');
            $notificationSettings = json_decode($request->get('notification_settings'), true);
            if ($notificationSettings) {
                foreach ($notificationSettings as $key) {
                    if (array_key_exists($key, $default)) $default[$key] = true;
                }
            }
            $customer->notification_settings = json_encode($default);


            if ($customer->save()) {
                return response()->json(['message' => 'Müşteri başarıyla güncellendi.', 'status' => true, 'customers' => auth()->user()->customers()]);
            } else {
                return response()->json(['message' => 'Müşteri güncellenirken bir hata oluştu.', 'status' => false]);
            }
        } else {
            return response()->json(['message' => 'Bu Id\'ye sahip bir Müşteri bulunamadı.'], 404);
        }
    }
    public function updateDetails(Request $request, $id)
    {
        $dealer = User::find($id);
        if($dealer){
            $details = DealerDetails::where('user_id', $dealer->id)->first();
            if(!$details){
                $details = new DealerDetails();
                $details->user_id = $dealer->id;
            }
            if($request->has('action') && $request->get('action') == 'logo'){
                $fileName = Str::uuid().".".$request->file('logo')->getClientOriginalExtension();
                $request->file('logo')->move(public_path("uploads/dealer_logos"), $fileName);
                $details->company_logo = url(("uploads/dealer_logos/").$fileName);
            }else{
                $details->company_name = $request->get('company_name');
                $details->company_phone = $request->get('company_phone');
                $details->company_email = $request->get('company_email');
                $details->company_country = $request->get('company_country');
                $details->company_city = $request->get('company_city');
                $details->company_district = $request->get('company_district');
                $details->company_zip = $request->get('company_zip');
                $details->company_address = $request->get('company_address');
            }
            if($details->save()) {
                return response()->json(['message' => 'Bayi detayları başarıyla güncellendi.', 'status' => true,'details'=>$details]);
            }else{
                return response()->json(['message' => 'Bayi detayları güncellenirken bir hata oluştu.', 'status' => false]);
            }
        }else{
            return response()->json(['message' => 'Bu Id\'ye sahip bir Bayi bulunamadı.','status'=>false]);
        }
    }

    public function orders(): \Inertia\Response
    {
        return Inertia::render('Dealer/Orders', [
            "ordersAll" => Orders::getAllData(false, auth()->user()->id),
            "status" => Orders::$statuses,
        ]);
    }

    public function staticsData()
    {
        return response()->json([
            "chart" => Services::generateChartAdmin(),
        ]);
    }
}
