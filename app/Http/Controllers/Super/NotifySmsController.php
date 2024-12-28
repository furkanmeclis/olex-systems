<?php

namespace App\Http\Controllers\Super;

use App\Models\Customers;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NotifySmsController
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Super/NotifySms/Index');
    }

    public function sendSMS(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $request->validate([
                'message' => 'required',
                "target" => 'required'
            ], [
                'message.required' => 'Mesaj alanı boş bırakılamaz',
                'target.required' => 'Hedef alanı boş bırakılamaz'
            ]);
            $message = $request->input('message');
            $target = explode(',', $request->input('target'));
            $phones = [];
            if (in_array('super', $target)) {
                foreach (User::where('role', 'super')->whereNotNull("phone")->get("phone") as $user) {
                    $phones[] = $user->phone;
                }
            } elseif (in_array('central', $target)) {
                foreach (User::where('role', 'like', '%central%')->whereNotNull("phone")->get("phone") as $user) {
                    $phones[] = $user->phone;
                }
            } elseif (in_array('dealer', $target)) {
                foreach (User::where('role', 'admin')->whereNotNull("phone")->get("phone") as $user) {
                    $phones[] = $user->phone;
                }
            } elseif (in_array('worker', $target)) {
                foreach (User::where('role', 'worker')->whereNotNull("phone")->get("phone") as $user) {
                    $phones[] = $user->phone;
                }
            } elseif (in_array('customer', $target)) {
                foreach (Customers::whereNotNull("phone")->get("phone") as $user) {
                    $phones[] = $user->phone;
                }
            }
            $sms = \App\Services\VatanSmsService::sendSms($phones, $message);
            $quantity = $sms["response"]["quantity"];
            return response()->json(["message" => "$quantity Adet SMS Hakkınız Kaldı, Mesaj Gönderildi.İletilmesi Yoğunluğa Bağlı Değişebilir.", "status" => true, "sms" => $sms]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => false
            ]);
        }
    }

    public function sendNotification(Request $request): \Illuminate\Http\JsonResponse
    {
        $title = request()->input('title');
        $body = request()->input('content');
        $file = request()->has("file") ? request()->file("file") : null;
        $url = request()->has("url") ? request()->input("url") : null;
        $tokensArray = Customers::whereNotNull("player_id")->get("player_id")->pluck("player_id")->toArray();
        $notification = new \App\Notifications\FirebaseNotification($title, $body, $tokensArray, $url);
        if ($notification->sendPushNotificationBatch()) {
            return response()->json([
                'status' => true,
                'message' => "Bildirimler Başarıyla Gönderildi",
                "tokens" => $tokensArray
            ]);
        } else {
            return response()->json([
                'status' => true,
                'message' => "Bildirimler Gönderildi Bazı Cihazlara Ulaşılamadı",
                "tokens" => $tokensArray
            ]);
        }
    }
}
