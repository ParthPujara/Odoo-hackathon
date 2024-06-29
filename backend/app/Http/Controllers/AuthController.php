<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\DB;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\Events\Verified;
class AuthController extends Controller
{
    public function signup(Request $request){
        $request->validate([
            'name'=>'required',
            'email'=>'required|unique:users',
            'mobile_number'=>'required',
            'password'=>'required',
        ]);
        DB::transaction(function () use ($request){
            $user=new User();
            $user->name=$request->name;
            $user->email=$request->email;
            $user->mobile_number=$request->mobile_number;
            $user->password=Hash::make($request->password);
            $user->save();
            event(new Registered($user));
        });
        return response()->json(['status'=>true,'message'=>'User created successfully']);
    }
    public function signin(Request $request){
        $request->validate([
            'email'=>'required',
            'password'=>'required',
        ]);
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            // The user is being remembered...
            $token = $request->user()->createToken(time()."_login");
            return response()->json(['status'=>true,'message'=>'User login successfully','token' => $token->plainTextToken,'role'=>$request->user()->roles[0]->name]);
        }
        return response()->json(['status'=>false,'message'=>'Invalid credentials']);
    }
    public function __invoke(Request $request)
    {
        $user = User::findOrFail($request->route('id'));

        if (! hash_equals(sha1($user->getEmailForVerification()), (string) $request->route('hash'))) {
            throw new AuthorizationException;
        }

        if (!$user->hasVerifiedEmail()) {
            event(new Verified($user));
            $user->markEmailAsVerified();
            return "Verified";
        }
        return "Already Verified";
    }
    public function login(Request $request){
       return view('auth.login');
    }
    public function authenticate(Request $request){
         $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
 
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
 
            return redirect()->intended('/');
        }
 
        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }
    public function register(Request $request){
        return view('auth.register');
     }
     public function registerUser(Request $request){
        $request->validate([
            'name'=>'required',
            'email'=>'required|unique:users',
            'mobile_number'=>'required',
            'password'=>'required|confirmed',
        ]);
        DB::transaction(function () use ($request){
            $user=new User();
            $user->name=$request->name;
            $user->email=$request->email;
            $user->mobile_number=$request->mobile_number;
            $user->password=Hash::make($request->password);
            $user->save();
            $user->assignRole('rentee');
            event(new Registered($user));
        });
        return view('homepage');
     }
}
