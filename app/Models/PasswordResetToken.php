<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PasswordResetToken extends Model
{
    protected $table = 'password_reset_tokens';
    public $timestamps = false; 

    protected $fillable = [
        'email',
        // 'token',
        'reset_code',
        'reset_code_expires_at',
        'created_at',
    ];

    protected $primaryKey = 'email';
    public $incrementing = false;
}
