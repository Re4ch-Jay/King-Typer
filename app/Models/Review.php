<?php

namespace App\Models;

use App\Models\User;
use App\Events\ReviewCreated;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Review extends Model
{
    use HasFactory;
    protected $fillable = [
        'message',
    ];
   
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
