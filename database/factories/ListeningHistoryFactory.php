<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ListeningHistory>
 */
class ListeningHistoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => fake()->numberBetween(1, 10),
            'song_id' => fake()->numberBetween(1, 10),
            'listened_at' => fake()->dateTimeBetween('-1 year', 'now'),
        ];
    }
}
