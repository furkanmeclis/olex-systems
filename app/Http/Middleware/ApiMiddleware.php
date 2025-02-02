<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ApiMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // API versiyonu kontrolü
        if (!$request->header('X-API-Version')) {
            return response()->json([
                'status' => false,
                'message' => 'API versiyonu gerekli',
                'data' => null
            ], 400);
        }

        // Platform kontrolü (iOS/Android)
        if (!$request->header('X-Platform')) {
            return response()->json([
                'status' => false,
                'message' => 'Platform bilgisi gerekli',
                'data' => null
            ], 400);
        }

        return $next($request);
    }
} 