<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Song;
use App\Models\ListeningHistory;

class ListeningHistorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $songs = Song::all();
        $users->each(function ($user) use ($songs) {
            ListeningHistory::factory(2)->create([
                'user_id' => $user->id,
                'song_id' => $songs->random()->id,
            ]);
        });
    }
}
