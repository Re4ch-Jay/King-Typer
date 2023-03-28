<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TypingTest extends Model
{
    use HasFactory;

    protected $fillable = [
        'wpm',
        'accuracy',
        'error',
        'typed',
        'time',
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
