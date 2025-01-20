<?php

namespace App\Services;

use Barryvdh\DomPDF\Facade\Pdf;

class PdfService
{
    private GenerateCarSvg $carSvgService;
    private array $logoCache = [];

    public function __construct(GenerateCarSvg $carSvgService)
    {
        $this->carSvgService = $carSvgService;
    }

    public function generateWarrantyPdf(object $serviceDetails): \Barryvdh\DomPDF\PDF
    {
        PDF::setOptions([
            'isRemoteEnabled' => true,
            'defaultFont' => 'Michroma Regular'
        ]);

        return PDF::loadView('pdf', [
            'carSvg' => $this->carSvgService->fillCar($serviceDetails->body_data),
            'brandLogo' => $this->getBase64Logo($serviceDetails->brand_logo),
            'brandName' => $serviceDetails->brand,
            'carModel' => $serviceDetails->model,
            'carGeneration' => $serviceDetails->generation,
            'carYear' => $serviceDetails->year,
            'page4Logo' => $this->getStorageLogoBase64('logos/with_text.png'),
            'appliedServices' => $serviceDetails->applied_services,
            'page2TableLogo' => $this->getStorageLogoBase64('logos/page_2_table.png'),
            'page2Logo' => $this->getStorageLogoBase64('logos/page_2_logo.png'),
            'page2Check' => $this->getStorageLogoBase64('logos/page_2_check.png'),
            'page3' => $this->getStorageLogoBase64('logos/3-4-1.png'),
            'page4' => $this->getStorageLogoBase64('logos/3-4-2.png'),
        ]);
    }

    private function getBase64Logo(string $url): string
    {
        if (isset($this->logoCache[$url])) {
            return $this->logoCache[$url];
        }

        try {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            $logoData = curl_exec($ch);
            curl_close($ch);

            if ($logoData === false) {
                throw new \Exception('Failed to fetch logo');
            }

            $base64Logo = 'data:image/png;base64,' . base64_encode($logoData);
            $this->logoCache[$url] = $base64Logo;

            return $base64Logo;
        } catch (\Exception $e) {
            // Return a default logo or throw exception based on requirements
            return 'data:image/png;base64,' . base64_encode(file_get_contents(storage_path('app/public/logos/default.png')));
        }
    }

    private function getStorageLogoBase64(string $path): string
    {
        if (isset($this->logoCache[$path])) {
            return $this->logoCache[$path];
        }

        $fullPath = storage_path('app/public/' . $path);
        if (!file_exists($fullPath)) {
            throw new \Exception("Logo file not found: {$path}");
        }

        $base64Logo = "data:image/png;base64," . base64_encode(file_get_contents($fullPath));
        $this->logoCache[$path] = $base64Logo;

        return $base64Logo;
    }
} 