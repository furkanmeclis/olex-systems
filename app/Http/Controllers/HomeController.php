<?php

namespace App\Http\Controllers;

use App\Services\GenerateCarSvg;
use Barryvdh\DomPDF\Facade\PDF;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function dashboard(): \Inertia\Response|\Illuminate\Http\RedirectResponse
    {
        $user = \auth()->user();
        if ($user && $user->role == "worker") {
            return \Illuminate\Support\Facades\Redirect::route('worker.index');
        }
        return Inertia::render('Dashboard',[
            "metrics" => auth()->user()->getMetrics()
        ]);
    }

    public function pdfSourceDataService(): \Illuminate\Http\Response
    {
        PDF::setOptions([
            'isRemoteEnabled' => true,
        ]);
        $pdf = PDF::loadView('pdf',[
            'carSvg' => $this->svgService()->fillCar(["body_kaput"])
        ]);
        return $pdf->stream('pdf.pdf');
    }
}
