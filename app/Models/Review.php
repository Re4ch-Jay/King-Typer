<?php

namespace App\Models;

use App\Events\ReviewCreated;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Review extends Model
{
    use HasFactory;
    protected $fillable = [
        'message',
    ];
    protected $dispatchesEvents = [
        'created' => ReviewCreated::class,
    ];
    public function user() //: BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
