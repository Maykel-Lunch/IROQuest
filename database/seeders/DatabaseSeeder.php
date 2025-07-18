<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'first_name' => 'IRO',
            'last_name' => 'Staff',
            'role' => 'admin',
            'usertype' => null,
            'email' => 'iro-personnel@bicol-u.edu.ph',
            'password' => Hash::make('mahal-na-mahal-ko-pa-rin2020'),
        ]);
    }
}
