<?php

namespace App\Http\Controllers\Worker;

use App\Http\Controllers\Controller;
use App\Models\ProductCode;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\In;
use Inertia\Inertia;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function checkProduct(): \Illuminate\Http\JsonResponse
    {
        $code = request()->input('code');
        $code = Products::controlProductCode(auth()->user()->parent_id,$code);
        if($code->status) {
            $product = $code->product;
            if($product) {
                return response()->json(['status' => true, 'product' => $product, 'code' => $code->code]);
            } else {
                return response()->json(['status' => false, 'message' => 'Ürün bulunamadı.']);
            }
        } else {
            return response()->json(['status' => false, 'message' => 'Ürün kodu yanlış.Sadece Bayinize Tanımlı Kodları Kullanabilirsiniz.']);
        }
    }

    public function pdf()
    {
        return Inertia::render('Worker/Pdf');
    }
}
