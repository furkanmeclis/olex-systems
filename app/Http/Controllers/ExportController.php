<?php

namespace App\Http\Controllers;

use App\Exports\ServicesExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportController extends Controller
{
    /**
     * Excel dosyasına servisleri aktar
     *
     * @return \Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public function exportServices()
    {
        return Excel::download(new ServicesExport, 'servisler.xlsx');
    }
}
