<?php

namespace App\Http\Controllers\Super;

use App\Models\Services;

class HomeController extends \App\Http\Controllers\Controller
{
    public function staticsData(): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            "chart" => Services::generateChartSuper(),
        ]);
    }
}
