<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Cart;
use App\Models\Kurs;
use App\Models\Post;
use App\Models\Predmet;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Kurs::truncate();
        Post::truncate();
        User::truncate();
        Cart::truncate();

        Post::factory(5)->create();
        Kurs::factory(5)->create();
        Cart::factory(5)->create();
    }
}
