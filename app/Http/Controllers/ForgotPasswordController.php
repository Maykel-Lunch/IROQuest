<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Carbon;
use App\Models\User;
use App\Mail\SendResetCode;
use App\Models\PasswordResetToken;

class ForgotPasswordController extends Controller
{
    public function sendResetCode(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return back()->withErrors(['email' => 'Email not found.']);
        }

        // Generate 6-digit code and save to password_reset_tokens table
        $code = random_int(100000, 999999);
        PasswordResetToken::updateOrCreate(
            ['email' => $user->email],
            [
                'reset_code' => $code,
                'reset_code_expires_at' => now()->addMinutes(10),
                'created_at' => now(),
                'token' => '', 
            ]
        );

        // Send the email with the code
        Mail::to($user->email)->send(new SendResetCode($code));

        return back()->with('status', 'Verification code sent!');
    }

    public function verifyCode(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'code' => 'required|digits:6',
        ]);

        $record = PasswordResetToken::where('email', $request->email)->first();

        if (
            !$record ||
            !$record->reset_code ||
            !$record->reset_code_expires_at ||
            $record->reset_code !== $request->code ||
            now()->gt($record->reset_code_expires_at)
        ) {
            return back()->withErrors(['code' => 'Invalid or expired code.']);
        }
       
        session(['password_reset_email' => $request->email]);

        return redirect()->route('password.reset.form', [
            'email' => $request->email,
            'reset_code' => $request->code,
        ]);
    }
}
