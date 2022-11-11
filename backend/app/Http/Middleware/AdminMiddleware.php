<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AdminMiddleware
{


    public function handle(Request $request, Closure $next)
    {
        if (Auth::check()) {
            if (Auth::user()->role == '1') {
                return $next($request);
            } else {
                return redirect('/')->with('message', 'Access Denied');
            }
        } else {
            return redirect('login')->with('message', 'Login to continue');
        }

        return $next($request);
    }
}
