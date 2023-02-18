<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class UserColorChanged extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:color:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $user = User::where('id',1)->first();
        $colors = [
            'red','blue','orange','green','black','yellow','gray'
        ];
        $user->color = $colors[rand(0,6)];
        $user->save();

        \App\Events\UserColorChanged::dispatch($user);
        

        return  0;
    }
}
