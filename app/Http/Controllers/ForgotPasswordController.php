<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Carbon;
use App\Models\User;
use App\Mail\SendResetCode;

class ForgotPasswordController extends Controller
{
    public function sendResetCode(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return back()->withErrors(['email' => 'Email not found.']);
        }

        // Generate 6-digit code and save to DB
        $code = random_int(100000, 999999);
        $user->reset_code = $code;
        $user->reset_code_expires_at = Carbon::now()->addMinutes(10);
        $user->save();

        // Send the email with the code
        Mail::to($user->email)->send(new SendResetCode($code));

        // Just return back, do NOT redirect to password reset form
        return back()->with('status', 'Verification code sent!');
    }

    public function verifyCode(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'code' => 'required|digits:6',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !$user->reset_code || !$user->reset_code_expires_at) {
            return back()->withErrors(['code' => 'Invalid or expired code.']);
        }

        if ($user->reset_code !== $request->code) {
            return back()->withErrors(['code' => 'The code is incorrect.']);
        }

        if (Carbon::parse($user->reset_code_expires_at)->isPast()) {
            return back()->withErrors(['code' => 'The code has expired.']);
        }

       
        $user->reset_code = null;
        $user->reset_code_expires_at = null;
        $user->save();

       
        session(['password_reset_email' => $request->email]);

        return redirect()->route('password.reset.form');
    }
}
