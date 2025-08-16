<?php
namespace App\Http\Controllers;

use Inertia\Inertia;

class InboundServicesController extends Controller
{
    public function index()
    {
        return Inertia::render('InboundServices');
    }
}