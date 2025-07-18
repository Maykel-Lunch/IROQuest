<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\PasswordResetToken; 
use App\Models\User;

class ResetNewPasswordController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'reset_code' => 'required|digits:6',
            'email' => 'required|email',
            'password' => 'required|confirmed|min:8',
        ]);

        $record = PasswordResetToken::where('email', $request->email)->first();

        if (
            !$record ||
            !$record->reset_code ||
            !$record->reset_code_expires_at ||
            $record->reset_code !== $request->reset_code ||
            now()->gt($record->reset_code_expires_at)
        ) {
            return back()->withErrors(['reset_code' => __('The reset code is invalid or has expired.')]);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return back()->withErrors(['email' => 'Email not found.']);
        }

        // Update password
        $user->password = Hash::make($request->password);
        $user->save();

        // Critical authentication steps
        Auth::login($user); // Authenticate
        $request->session()->regenerate(); // New session
        $request->session()->put('auth.password_confirmed_at', time()); // Mark as verified

        // Only this is needed for redirection
        return redirect()->route('welcome');
    }
}
