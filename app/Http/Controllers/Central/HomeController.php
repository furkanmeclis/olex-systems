<?php

namespace App\Http\Controllers\Central;

use App\Models\Services;
use Inertia\Inertia;

class HomeController extends \App\Http\Controllers\Controller
{
    public function staticsDataCentral(): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            "chart" => Services::generateChartCentral(),
        ]);
    }

    public function services(): \Inertia\Response
    {
        return \Inertia\Inertia::render('Central/Services/Index', [
            "services" => Inertia::lazy(fn() => Services::getServices())
        ]);
    }
}
