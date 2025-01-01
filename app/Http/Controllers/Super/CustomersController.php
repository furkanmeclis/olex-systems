<?php

namespace App\Http\Controllers\Super;

use App\Http\Controllers\Controller;
use App\Models\Customers;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CustomersController extends Controller
{
    public function getAllCustomers($dealerId=false)
    {
        if($dealerId) $query = Customers::where('dealer_id',$dealerId);
        else $query = Customers::where('id','>','0');
        return $query->orderBy('id','desc')->get()->map(function($customer){
            $customer->dealer = User::find($customer->dealer_id);
            $customer->dealer->company = $customer->dealer->company();
            if($customer->worker_id != null) $customer->worker = User::find($customer->worker_id);
            else $customer->worker = (object) [];
            return $customer;
        });
    }
    public function index()
    {
        $customers = $this->getAllCustomers();
        return Inertia::render('Super/Customers/Index',[
            "customersAll" => $customers
        ]);
    }

    public function update(Request $request, $id)
    {
        $customer = Customers::find($id);
        if (!$customer) {
            return response()->json([
                'status' => false,
                'message' => 'Müşteri bulunamadı'
            ]);
        }

        $validator = Validator::make($request->all(), [
            'type' => 'required|in:individual,company',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:customers,email,' . $id,
            'phone' => 'required|string|max:255|unique:customers,phone,' . $id,
            'address' => 'required|string',
            'player_id' => 'nullable|string',
            'notification_settings' => 'nullable|json',
            'vatName' => 'required_if:type,company|string|max:255|nullable',
            'vatNumber' => 'required_if:type,company|string|max:255|nullable',
            'vatOffice' => 'required_if:type,company|string|max:255|nullable',
        ], [
            'type.required' => 'Müşteri tipi seçimi zorunludur',
            'type.in' => 'Geçersiz müşteri tipi',
            'name.required' => 'Müşteri/Firma adı zorunludur',
            'email.required' => 'E-posta adresi zorunludur',
            'email.email' => 'Geçerli bir e-posta adresi giriniz',
            'email.unique' => 'Bu e-posta adresi zaten kullanımda',
            'phone.required' => 'Telefon numarası zorunludur',
            'phone.unique' => 'Bu telefon numarası zaten kullanımda',
            'address.required' => 'Adres zorunludur',
            'vatName.required_if' => 'Vergi adı zorunludur',
            'vatNumber.required_if' => 'Vergi numarası zorunludur',
            'vatOffice.required_if' => 'Vergi dairesi zorunludur',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()->first()
            ]);
        }

        try {
            $default = [
                "sms" => false,
                "email" => false,
                "push" => false,
            ];

            $notificationSettings = json_decode($request->notification_settings, true);
            if ($notificationSettings) {
                foreach ($notificationSettings as $key) {
                    if (array_key_exists($key, $default)) $default[$key] = true;
                }
            }

            $customer->type = $request->type;
            $customer->name = $request->name;
            $customer->email = $request->email;
            $customer->phone = $request->phone;
            $customer->address = $request->address;
            $customer->player_id = $request->player_id;
            $customer->notification_settings = json_encode($default);
            
            if ($request->type === 'company') {
                $customer->vat_name = $request->vatName;
                $customer->vat_number = $request->vatNumber;
                $customer->vat_office = $request->vatOffice;
            } else {
                $customer->vat_name = null;
                $customer->vat_number = null;
                $customer->vat_office = null;
            }

            if ($customer->save()) {
                return response()->json([
                    'status' => true,
                    'message' => 'Müşteri başarıyla güncellendi',
                    'customers' => $this->getAllCustomers()
                ]);
            }

            return response()->json([
                'status' => false,
                'message' => 'Müşteri güncellenirken bir hata oluştu'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Müşteri güncellenirken bir hata oluştu'
            ]);
        }
    }
}
