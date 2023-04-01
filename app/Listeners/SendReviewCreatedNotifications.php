<?php

namespace App\Listeners;

use App\Events\ReviewCreated;
use App\Models\User;
use App\Notifications\NewReview;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendReviewCreatedNotifications implements ShouldQueue
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(ReviewCreated $event): void
    {
        foreach (User::whereNot('id', $event->review->user_id)->cursor() as $user) {
            $user->notify(new NewReview($event->review));
        }
    }
}
