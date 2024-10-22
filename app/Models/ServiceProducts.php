<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceProducts extends Model
{
    use HasFactory;

    public function service()
    {
        return Services::where("id", $this->service_id)->first();
    }
}
