<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(){
        return inertia('Auth/Register');
    }
    public function store(Request $request){
        return back();
        User::create([
            'name' => $request->name,
            'password' => Hash::make($request->password),
            'email' => $request->email,
            'color' => 'red',
        ]);

        return 0;
    }
}
