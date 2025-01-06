<?php

namespace App\Http\Controllers\Central;

use App\Models\Services;

class HomeController extends \App\Http\Controllers\Controller
{
    public function staticsDataCentral(): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            "chart" => Services::generateChartCentral(),
        ]);
    }
}
