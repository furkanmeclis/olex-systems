<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    public function getCodes()
    {
        $codes = ProductCode::where('product_id', $this->id)->orderBy('id', 'desc')->get()->map(function ($code) {
            $code->worker = (object)[];
            if ($code->worker_id) {
                $code->worker = User::find($code->worker_id);
            }
            if ($code->dealer_id) {
                $code->dealer = User::find($code->dealer_id);
            }
            $code->service_number = "";
            if ($code->used == 1) {
                $code->service_number = ServiceProducts::where("product_code", $code->code)->first()->service()->service_no;
            }
            return $code;
        });
        return $codes;
    }

    public static function controlProductCode($dealerId, $productCode): object
    {
        $product = ProductCode::where("dealer_id", $dealerId)->where("location", "dealer")->where("code", $productCode)->first();
        if ($product) {
            return (object)[
                "product" => $product->product(),
                "code" => $product->code,
                "code_details" => $product,
                "status" => true
            ];
        } else {
            return (object)[
                "status" => false
            ];
        }
    }
}
