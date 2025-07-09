<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Song>
 */
class SongFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(3),
            'artist_id' => fake()->numberBetween(1, 10),
            'album_id' => fake()->numberBetween(1, 10),
            'genre_id' => fake()->numberBetween(1, 10),
            'audio_path' => fake()->imageUrl(640, 480, 'audio', true),
            'duration' => fake()->numberBetween(120, 360),
            'play_count' => fake()->numberBetween(0, 1000),
        ];
    }
}
