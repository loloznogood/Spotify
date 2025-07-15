<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\SongController;
use App\Http\Controllers\PlaylistController;
use App\Http\Controllers\AlbumController;
use App\Http\Controllers\ArtistController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->middleware('guest');

// Health check route (DevOps)
Route::get('/health', function() {
    return response()->json(['status' => 'ok', 'timestamp' => now()]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/playlists', function() {
    return Inertia::render('Playlists');
})->name('playlists');

Route::get('/albums', function() {
    return Inertia::render('Albums');
})->name('albums');

Route::get('/artists', function() {
    return Inertia::render('Artists');
})->name('artists');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Songs
    Route::resource('songs', SongController::class);
    
    // Playlists
    Route::resource('playlists', PlaylistController::class);

    // Albums
    Route::resource('albums', AlbumController::class);

    // Artists
    Route::resource('artists', ArtistController::class);
});

require __DIR__.'/auth.php';
