<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia; 

class UserTypeController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'usertype' => 'required|string',
        ]);

        $user = Auth::user();
        $user->usertype = $request->usertype;
        $user->save();

        return Inertia::location(route('welcome'));
    }
}
