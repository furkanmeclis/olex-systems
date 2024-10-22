<?php

namespace App\Http\Controllers;

use App\Models\Services;
use Barryvdh\DomPDF\Facade\Pdf;
use Inertia\Inertia;

class WarrantyController extends Controller
{
    public function index($serviceNumber = null)
    {
        return Inertia::render('Warranty/Index', [
            'serviceNumber' => $serviceNumber
        ]);
    }

    /**
     * @throws \Exception
     */
    public function pdf($serviceNumber = null)
    {

        $serviceDetails = new Worker\ServicesController();
        $serviceDetails = $serviceDetails->pdfSourceDataService($serviceNumber, true);
        if ($serviceDetails['status']) {
            $serviceDetails = (object)$serviceDetails['data'];
            PDF::setOptions([
                'isRemoteEnabled' => true,
                'defaultFont' => 'dejavusans'
            ]);
            $olexLogoWithText = "data:image/png;base64," . base64_encode(file_get_contents(storage_path('app/public/logos/with_text.png')));
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $serviceDetails->brand_logo);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            $brandLogo = curl_exec($ch);
            curl_close($ch);
            $brandLogo = base64_encode($brandLogo);
            $brandLogo = 'data:image/png;base64,' . $brandLogo;
            $page2TableLogo = "data:image/png;base64," . base64_encode(file_get_contents(storage_path('app/public/logos/page_2_table.png')));
            $page2Logo = "data:image/png;base64," . base64_encode(file_get_contents(storage_path('app/public/logos/page_2_logo.png')));
            $page2Check = "data:image/png;base64," . base64_encode(file_get_contents(storage_path('app/public/logos/page_2_check.png')));
            $page3 = "data:image/png;base64," . base64_encode(file_get_contents(storage_path('app/public/logos/3-4-1.png')));
            $page1 = "data:image/png;base64," . base64_encode(file_get_contents(storage_path('app/public/logos/3-4-2.png')));
            $pdf = PDF::loadView('pdf', [
                'carSvg' => $this->svgService()->fillCar($serviceDetails->body_data),
                'brandLogo' => $brandLogo,
                'brandName' => $serviceDetails->brand,
                'carModel' => $serviceDetails->model,
                'carGeneration' => $serviceDetails->generation,
                'carYear' => $serviceDetails->year,
                'page4Logo' => $olexLogoWithText,
                'appliedServices' => $serviceDetails->applied_services,
                'page2TableLogo' => $page2TableLogo,
                'page2Logo' => $page2Logo,
                'page2Check' => $page2Check,
                'page3' => $page3,
                'page1' => $page1,
            ]);
            return $pdf->stream('pdf.pdf');
        } else {
            return redirect()->route('warranty.index', $serviceNumber);
        }
    }
}
