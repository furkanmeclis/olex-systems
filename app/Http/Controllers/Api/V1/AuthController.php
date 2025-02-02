<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Customers;
use App\Services\VatanSmsService;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    use ApiResponse;

    public function sendOtp(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'phone' => 'required|string|min:10'
        ]);

        if ($validator->fails()) {
            return $this->errorResponse('Geçersiz telefon numarası', $validator->errors());
        }

        $normalizedPhone = VatanSmsService::formatPhoneNumber($request->phone);

        if ($normalizedPhone === null) {
            return $this->errorResponse('Sadece bireysel telefon numaraları desteklenmektedir.');
        }

        $customers = Customers::where('id', ">", 0)->get(['id', 'phone', 'name']);
        $customer = null;
        foreach ($customers as $c) {
            if (VatanSmsService::formatPhoneNumber($c->phone) == $normalizedPhone) {
                $customer = $c;
                break;
            }
        }
        if (!$customer) {
            return $this->errorResponse('Müşteri bulunamadı');
        }

        $otp = rand(100000, 999999);
        $sms = "Merhaba {$customer->name}, Tek Kullanımlık Şifreniz: {$otp} Geçerlilik Süresi 5 Dakikadır.";

        VatanSmsService::sendSingleSms($customer->phone, $sms);

        $otpCacheKey = "otp_{$customer->id}";
        cache([$otpCacheKey => $otp], now()->addMinutes(5));

        return $this->successResponse(
            ['customer_id' => $customer->id],
            'Tek kullanımlık şifre gönderildi'
        );
    }

    public function verifyOtp(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'customer_id' => 'required|integer',
            'otp' => 'required|string|size:6'
        ]);

        if ($validator->fails()) {
            return $this->errorResponse('Geçersiz doğrulama kodu', $validator->errors());
        }

        $otpCacheKey = "otp_{$request->customer_id}";
        $cachedOtp = cache($otpCacheKey);

        if ($cachedOtp != $request->otp) {
            return $this->errorResponse('Geçersiz doğrulama kodu');
        }

        cache()->forget($otpCacheKey);

        $customer = Customers::find($request->customer_id);

        return $this->successResponse(
            [
                'customer_id' => $customer->id,
                'name' => $customer->name,
                'phone' => $customer->phone
            ],
            'Doğrulama başarılı'
        );
    }
}
