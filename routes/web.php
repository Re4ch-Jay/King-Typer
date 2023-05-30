<?php

use App\Models\Review;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\InfoController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\MyStatsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TypingTestController;
use App\Http\Controllers\LeaderboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'message' => Review::with('user:id,name')->latest()->take(10)->get(),
        'rating' => Review::with('user:id,name')->latest()->take(10)->get(),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/guest', function () {
    return Inertia::render('Guest');
})->middleware(['guest'])->name('guest');

Route::get('/info', [InfoController::class, 'index'])->middleware(['auth', 'verified'])->name('info.index');

Route::post('/typing', [TypingTestController::class, 'store'])->middleware(['auth', 'verified'])->name('typing.store');

Route::get('/leaderboard/{time}', [LeaderboardController::class, 'index'])->middleware(['auth', 'verified'])->name('leaderboard.index');

Route::get('/mystats', [MyStatsController::class, 'index'])->middleware(['auth', 'verified'])->name('mystats.index');

Route::get('/profile/{user:name}', [ProfileController::class, 'index'])->middleware(['auth', 'verified'])->name('profile.index');

Route::resource('reviews', ReviewController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__ . '/auth.php';
