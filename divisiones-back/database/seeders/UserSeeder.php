<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run()
    {
        $user_registers = config('seeders.user_registers');

        User::factory()->count($user_registers)->create();
    }
}
