<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class MyStatsController extends Controller
{
    public function index()
    {

        $total_test = DB::table('typing_tests')->where('user_id', '=', $this->currentUser())->count('id');
        $average_wpm = DB::table('typing_tests')->where('user_id', '=', $this->currentUser())->avg('wpm');
        $average_accuracy = DB::table('typing_tests')->where('user_id', '=', $this->currentUser())->avg('accuracy');
        $average_error = DB::table('typing_tests')->where('user_id', '=', $this->currentUser())->avg('error');
        $max_time = DB::table('typing_tests')->where('user_id', '=', $this->currentUser())->sum('time');
        $max_typed = DB::table('typing_tests')->where('user_id', '=', $this->currentUser())->sum('typed');
        $reviews = DB::table('reviews')->where('user_id', '=', $this->currentUser())->count('id');

        $world_average_accuracy = DB::table('typing_tests')->avg('accuracy');
        $world_average_wpm = DB::table('typing_tests')->avg('wpm');
        $world_average_error = DB::table('typing_tests')->avg('error');

        return Inertia::render('MyStats/Index', [
            'total_test' => $total_test,
            'average_wpm' => $average_wpm,
            'average_accuracy' => $average_accuracy,
            'average_error' => $average_error,
            'max_time' => $max_time,
            'max_typed' => $max_typed,
            'reviews' => $reviews,
            'all_tests' => $this->allTests(),
            'country' => auth()->user()->country,
            'world_average_accuracy' => $world_average_accuracy,
            'world_average_wpm' => $world_average_wpm,
            'world_average_error' => $world_average_error,
        ]);
    }

    public function allTests()
    {
        return DB::table('typing_tests')->where('user_id', '=', $this->currentUser())->orderByDesc("created_at")->take(10)->get();
    }

    public function currentUser()
    {
        return auth()->user()->id;
    }
}
