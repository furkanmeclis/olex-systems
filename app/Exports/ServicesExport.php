<?php

namespace App\Exports;

use App\Models\Services;
use App\Models\User;
use App\Models\DealerDetails;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class ServicesExport implements FromCollection, WithHeadings, WithMapping, ShouldAutoSize
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return Services::all();
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'Servis No',
            'Araç Marka',
            'Araç Model',
            'Araç Model Yılı',
            'İşlem Yapan Bayi',
            'İşlem Tarihi',
        ];
    }

    /**
     * @param Services $service
     * @return array
     */
    public function map($service): array
    {
        // Bayi bilgisini al
        $dealer = User::find($service->dealer_id);
        $dealerName = $dealer->name;

        // DealerDetails'den şirket adını kontrol et, varsa onu kullan
        if ($dealer->role == 'admin') {
            $dealerDetails = DealerDetails::where('user_id', $dealer->id)->first();
            if ($dealerDetails && !empty($dealerDetails->company_name)) {
                $dealerName = $dealerDetails->company_name;
            }
        }

        return [
            $service->service_no, // Servis No
            $service->car['brand'] ?? '', // Araç Marka
            $service->car['model'] ?? '', // Araç Model
            $service->car['year'] ?? '', // Araç Model Yılı
            $dealerName, // İşlem Yapan Bayi
            $service->created_at->format('d.m.Y'), // İşlem Tarihi
        ];
    }
}
