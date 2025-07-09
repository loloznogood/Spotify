<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Song;
use App\Models\Album;
use App\Models\Genre;
use App\Models\Artist;

class SongSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $genres = Genre::all();
        $albums = Album::all();
        $albums->each(function ($album) use ($genres) {
            $artist_id = $album->artist_id;
            $album->songs()->saveMany(Song::factory(2)->create([
                'genre_id' => $genres->random()->id,
                'artist_id' => $artist_id,
            ]));
        });
    }
}
