<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customers extends Model
{
    use HasFactory;

    protected $fillable = [
        'dealer_id',
        'worker_id',
        'name',
        'email',
        'phone',
        'player_id',
        'address',
        'notification_settings', 
        'birthday',
        'gender',
        'type',
        'vat_name',
        'vat_number',
        'vat_office'
    ];

    public static function getCustomersForDealer()
    {
        $dealer_id = null;
        if (auth()->user()->role == 'dealer') {
            $dealer_id = auth()->user()->id;
        } else {
            $dealer_id = auth()->user()->parent_id;
        }
        return Customers::where('dealer_id', $dealer_id)->orderBy('id', 'desc')->get()->map(function ($customer) {
            $customer->dealer = User::find($customer->dealer_id);
            $customer->dealer->company = $customer->dealer->company();
            if ($customer->worker_id != null) $customer->worker = User::find($customer->worker_id);
            else $customer->worker = (object)[];
            return $customer;
        });
    }

    public function getServices()
    {
        return Services::getCustomerServices($this->id);
    }
}
