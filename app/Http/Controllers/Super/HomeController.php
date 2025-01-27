<?php

namespace App\Http\Controllers\Super;

use App\Models\Services;
use Inertia\Inertia;

class HomeController extends \App\Http\Controllers\Controller
{
    public function staticsData(): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            "chart" => Services::generateChartSuper(),
        ]);
    }

    public function services(): \Inertia\Response
    {
        return \Inertia\Inertia::render('Super/Services/Index', [
            "services" => Inertia::lazy(fn() => Services::getServices())
        ]);
    }
}
