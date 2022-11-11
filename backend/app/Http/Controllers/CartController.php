<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Kurs;
use Illuminate\Http\Request;

class CartController extends Controller
{


    public function addToCart(Request $request)
    {
        if (auth('sanctum')->check()) {
            $user_id = auth('sanctum')->user()->id;
            $course_id = $request->course_id;
            $kolicina = $request->kolicina;
            $courseCheck = Kurs::where('id', $course_id)->first();
            if ($courseCheck) {
                if (Cart::where('course_id', $course_id)->where('user_id', $user_id)->exists()) {
                    return response()->json([
                        'status' => 409,
                        //      'message' => $courseCheck->name . 'Vec ste dodali u korpu',
                    ]);
                } else {
                    $cartItem = new Cart;
                    $cartItem->user_id = $user_id;
                    $cartItem->course_id = $course_id;
                    $cartItem->kolicina = $kolicina;
                    $cartItem->save();
                    return response()->json([
                        'status' => 201,
                        'message' => 'Dodato u korpu'
                    ]);
                }
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'Kurs nije pronadjen'
                ]);
            }

            return response()->json([
                'status' => 401,
                'message' => 'Ulogujte se da biste dodali u korpu'
            ]);
        }
    }


    public function viewCart()
    {
        if (auth('sanctum')->check()) {
            $user_id = auth('sanctum')->user()->id;
            $cartItems = Cart::where('user_id', $user_id)->get();
            return response()->json([
                'status' => 200,
                'cart' => $cartItems,
            ]);
        } else {
            return response()->json([
                'status' => 401,
                'message' => "Ulogujte se",
            ]);
        }
    }

    public function updateQuantity($cart_id, $scope)
    {
        if (auth('sanctum')->check()) {
            $user_id = auth('sanctum')->user()->id;
            $cartItem = Cart::where('id', $cart_id)->where('user_id', $user_id)->first();
            if ($scope == "inc") {
                $cartItem->kolicina += 1;
            } else if ($scope == "dec") {
                $cartItem->kolicina -= 1;
            }
            $cartItem->update();
            return response()->json([
                'status' => 200,
                'message' => 'Kolicina je azurirana'
            ]);
        } else {
            return response()->json([
                'status' => 401,
                'message' => 'Ulogujte se'
            ]);
        }
    }


    public function deleteCartItem($cart_id)
    {
        if (auth('sanctum')->check()) {
            $user_id = auth('sanctum')->user()->id;
            $cartItem = Cart::where('id', $cart_id)->where('user_id', $user_id)->first();
            if ($cartItem) {
                $cartItem->delete();
                return response()->json([
                    'status' => 200,
                    'message' => 'Uspesno uklonjeno iz korpe',
                ]);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'Nije pronadjeno',
                ]);
            }
        } else {
            return response()->json([
                'status' => 401,
                'message' => 'Ulogujte se',
            ]);
        }
    }
}
