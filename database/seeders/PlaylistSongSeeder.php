<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Playlist;
use App\Models\Song;
use App\Models\PlaylistSong;

class PlaylistSongSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $playlists = Playlist::all();
        $songs = Song::all();
        $data = array();
        $playlists->each(function ($playlist) use ($songs, &$data) {
            $playlist_id = $playlist->id;
            $song_id = $songs->random(5)->pluck('id');
            foreach($song_id as $id) {
                $data[] = [
                    'playlist_id' => $playlist_id,
                    'song_id' => $id,
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }
        });
        PlaylistSong::insert($data);
    }
}