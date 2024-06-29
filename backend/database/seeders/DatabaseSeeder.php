<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        DB::transaction(function(){
            Role::create(['name'=>'admin']);
            Role::create(['name'=>'renter']);
            Role::create(['name'=>'rentee']);
            $user=\App\Models\User::factory()->create([
                'name' => 'Admin',
                'email' => 'admin@oodo-hackathon.com',
                'mobile_number' => '9123456789',
                'password' => Hash::make('admin'),
            ]);
            $user->assignRole('admin');
        });
    }
}
