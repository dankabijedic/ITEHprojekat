<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Kurs>
 */
class KursFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'naziv' => $this->faker->title(),
            'broj_casova' => $this->faker->randomNumber(),
            'cena' => $this->faker->randomNumber(),
            'opis' => $this->faker->text(),
            'predmet_id' => $this->faker->randomNumber(),
        ];
    }
}
