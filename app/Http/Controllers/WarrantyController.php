<?php

namespace App\Http\Controllers;

use App\Services\PdfService;
use Inertia\Inertia;
use Illuminate\Http\Response;

class WarrantyController extends Controller
{
    private PdfService $pdfService;

    public function __construct(PdfService $pdfService)
    {
        $this->pdfService = $pdfService;
    }

    public function index($serviceNumber = null)
    {
        return Inertia::render('Warranty/Index', [
            'serviceNumber' => $serviceNumber
        ]);
    }

    public function pdf($serviceNumber = null)
    {
        try {
            $serviceDetails = app(Worker\ServicesController::class)->pdfSourceDataService($serviceNumber, true);
            
            if (!$serviceDetails['status']) {
                return response()->json(['error' => 'Service not found'], 404);
            }

            $pdf = $this->pdfService->generateWarrantyPdf((object)$serviceDetails['data']);
            
            return $pdf->stream('warranty.pdf');

        } catch (\Exception $e) {
            report($e); // Log the error
            return response()->json(['error' => 'Failed to generate PDF. Please try again later.','errors' => $e->getMessage()], 500);
        }
    }
}
