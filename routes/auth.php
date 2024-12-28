<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Route;

Route::get('manifest.json', function () {
    $json = '{
                "name": "OLEX Films®",
                "short_name": "OLEX® Films",
                "theme_color": "#003f26",
                "background_color": "#003f26",
                "display": "fullscreen",
                "orientation": "portrait",
                "scope": "/",
                "start_url": "{start_url}",
                "icons": [
                    {
                        "src": "/icons/logo-48x48.png",
                        "sizes": "48x48",
                        "type": "image/png"
                    },
                    {
                        "src": "/icons/logo-72x72.png",
                        "sizes": "72x72",
                        "type": "image/png"
                    },
                    {
                        "src": "/icons/logo-128x128.png",
                        "sizes": "128x128",
                        "type": "image/png"
                    },
                    {
                        "src": "/icons/logo-144x144.png",
                        "sizes": "144x144",
                        "type": "image/png"
                    },
                    {
                        "src": "/icons/logo-192x192.png",
                        "sizes": "192x192",
                        "type": "image/png"
                    },
                    {
                        "src": "/icons/logo-512x512.png",
                        "sizes": "512x512",
                        "type": "image/png"
                    },
                    {
                        "src": "/icons/logo-1024x1024.png",
                        "sizes": "1024x1024",
                        "type": "image/png"
                    }

                ]
            }';
    if (request()->session()->has('manifest')) {
        $customerId = request()->session()->get('manifest');
        $print = str_replace("{start_url}", '/customer/' . Crypt::encrypt($customerId), $json);
        //request()->session()->forget('manifest');
        return response($print)->header('Content-Type', 'application/json');
    } else {
        $print = str_replace("{start_url}", '/', $json);
        request()->session()->forget('manifest');
        return response($print)->header('Content-Type', 'application/json');
    }
});
Route::post("/customer-otp-login", [\App\Http\Controllers\CustomerController::class, 'customerOtpLogin'])->name('customer-otp-login');
    Route::post("/customer-otp-verify", [\App\Http\Controllers\CustomerController::class, 'customerOtpVerify'])->name('customer-otp-verify');
    Route::middleware('guest')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])
        ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
        ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
        ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
        ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
        ->name('password.store');
});

Route::middleware('auth')->group(function () {
    Route::get('verify-email', EmailVerificationPromptController::class)
        ->name('verification.notice');

    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verification.verify');

    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
        ->middleware('throttle:6,1')
        ->name('verification.send');

    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
        ->name('password.confirm');

    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
});
