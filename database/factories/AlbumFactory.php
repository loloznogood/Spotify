<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Album>
 */
class AlbumFactory extends Factory
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
            'release_date' => fake()->date(),
            'cover_path' => fake()->imageUrl(640, 480, 'cover', true),
        ];
    }
}
