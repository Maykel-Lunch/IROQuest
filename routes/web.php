<?php

use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\UserTypeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\ResetNewPasswordController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('auth/google', [GoogleController::class, 'redirect'])->name('google.redirect');
Route::get('auth/google/callback', [GoogleController::class, 'callback'])->name('google.callback');

Route::post('/register/usertype', [UserTypeController::class, 'store']);
Route::get('/select-usertype', function () {
    if (auth()->user()->usertype) {
        return redirect()->route('welcome');
    }
    return Inertia::render('Auth/SelectUserType');
})->middleware('auth')->name('select.usertype');

Route::get('/admin/dashboard', function () {
    return Inertia::render('Auth/AdminDashboard');
})->middleware(['auth'])->name('admin.dashboard');

Route::post('/forgot-password/code', [ForgotPasswordController::class, 'sendResetCode'])->name('password.send.code');
Route::post('/verify-reset-code', [ForgotPasswordController::class, 'verifyCode'])->name('password.verify.code');

Route::get('/reset-password-form', function (\Illuminate\Http\Request $request) {
    return Inertia::render('Auth/ConfirmPassword', [
        'email' => $request->query('email'),
        'reset_code' => $request->query('reset_code'),
    ]);
})->name('password.reset.form');

Route::post('/reset-password', [ResetNewPasswordController::class, 'store'])->name('password.store');

require __DIR__.'/auth.php';
