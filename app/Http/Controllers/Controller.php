<?php

namespace App\Http\Controllers;

use App\Services\GenerateCarSvg;

abstract class Controller
{
    public function svgService(): GenerateCarSvg
    {
        return new GenerateCarSvg();
    }
}
