<?php

namespace App\Http\Controllers;

use App\Models\Furniture;
use App\Models\Order;
use Illuminate\Http\Request;
use Razorpay\Api\Api;

class PaymentController extends Controller
{
    public function createOrder(Request $request)
    {
        $request->validate([
            'fur_id' => 'required',
        ]);
        $talk = Furniture::find($request->fur_id);
        // $diff=date_diff($request->end_date,$request->start_date);
        $api = new Api(env('RAZORPAY_KEY'), env('RAZORPAY_SECRET'));
        $res = $api->order->create(array(
            'amount' => $talk->rent * 100 * 2,
            'currency' => 'INR',
            'notes' => ['talk' => $talk->id]
        ));
        $order = new Order();
        $order->order_id = $res->id;
        $order->address = $request->address;
        $order->start_date = $request->start_date;
        $order->end_date = $request->end_date;
        $order->rent = $res->amount;
        $order->furniture_id = $talk->id;
        $order->order_created_at = date('Y-m-d h:i:s', $res->created_at);
        $order->user_id = auth()->user()->id;
        $order->save();
        return redirect()->back()->with(['order' => $order, 'talk' => $talk]);
    }
    public function verifyOrder(Request $request)
    {
        $request->validate([
            'razorpay_payment_id' => 'required',
            'razorpay_order_id' => 'required|exists:orders,order_id',
            'razorpay_signature' => 'required',
        ]);
        $order=Order::where('order_id',$request->razorpay_order_id)->first();
        $api = new Api(env('RAZORPAY_KEY'), env('RAZORPAY_SECRET'));
        try {
            $api->utility->verifyPaymentSignature(array('razorpay_order_id' => $request->razorpay_order_id, 'razorpay_payment_id' => $request->razorpay_payment_id, 'razorpay_signature' => $request->razorpay_signature));
            $order->is_authorized=true;
            $order->payment_id=$request->razorpay_payment_id;
            $order->save();
            return redirect("purchases")->withSuccess('Talk Purchased successfully');
        } catch (SignatureVerificationError) {
            return "Failed";
        }
    }
    public function purchases(){
        
    }
}
