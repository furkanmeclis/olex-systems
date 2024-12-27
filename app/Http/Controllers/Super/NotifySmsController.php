<?php

namespace App\Http\Controllers\Super;

use Inertia\Inertia;

class NotifySmsController
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Super/NotifySms/Index');
    }
}
