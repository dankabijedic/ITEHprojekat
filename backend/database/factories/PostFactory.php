<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'predmet_id' => $this->faker->randomNumber(),
            'sadrzaj' => $this->faker->text(),
            'datoteka' => $this->faker->text(),
            'user_id' => User::factory(),
        ];
    }
}
