<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ArtistController extends Controller
{
    public function index() {
        return Inertia::render('Artists');
    }
}
