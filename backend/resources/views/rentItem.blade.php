@extends('layouts.app')


@section('styles')
    <style>
    * {
        padding: 0;
        margin: 0;
        font-family: arial;
        scroll-behavior: smooth;
    }

    /* footer link */
    .col-6>a {
        display: block;
    }

    /* shop now btn */

    #shop-btn{
        background-color:#ff8100;
    }

    /* width of every cards on product section */
    #card-width {
        width: 18rem;
    }


    /* categories nav link */

    .nav-item .nav-link {
        font-size: 20px;
    }








    @media (max-width: 768.98px) {
        #input-form {
            width: 35%;
        }
    }



    /* responsive blog post. modify the width of image in each breakpoints */

    @media (min-width: 768px) {
        .bg {
            width: 350px;
        }
    }

    @media (min-width: 992px) {
        .bg {
            width: 230px;

        }
    }

    @media (min-width: 1200px) {
        .bg {
            width: 250px;
        }
    }

    @media (max-width: 768px) {
        .bg {
            width: 250px;
        }
    }

    @media (max-width: 578px) {
        .bg {
            width: 100%;
        }
    }
        </style>
@endsection

@section('app')

    <!--   Product section   -->

        <script>
            $(document).ready(function(){
                $('input[name="daterange"]').daterangepicker({
                locale: {
                format: 'YYYY-MM-DD'
                },
                startDate:'{{$today}}',
                endDate: '{{$tommorow}}',
            }, 
            function(start, end, label) {
                startDate.value=start.format('YYYY-MM-DD');
                endDate.value=end.format('YYYY-MM-DD');
                // alert("A new date range was chosen: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
            });
            });
        </script>
    <div class="py-5">
        <div class="container">
<div class="row">
    <div class="left col-6">
        <div class="card" id="card-width">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                @foreach ($item->images as $key=>$image)
                @if ($key==0)
                <div class="carousel-item active">
                    <img src="/{{$image->image}}" class="d-block w-100" alt="...">
                    </div>
                @else

                <div class="carousel-item">
                    <img src="/{{$image->image}}" class="d-block w-100" alt="...">
                </div>
                @endif
                    @endforeach
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            <div class="card-body">
                <hr>
                <h5 class="card-title">₹{{$item->rent}}/day</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{$item->name}}</h6>
                <h6 class="card-subtitle mb-2 text-muted">{{$item->description}}</h6>
                 
            </div>
        </div> 
    </div>
    <div class="right col-6">
        <form method="POST" action="/createOrder">
            {{ csrf_field() }}
            <input type="hidden" name="fur_id" value="{{$item->id}}">
            <input type="hidden" id="start_date" name="start_date" value="{{$today}}">
            <input type="hidden" name="end_date" id="end_date" value="{{$tommorow}}">
            <div class="mb-3">

                Choose Time
                <input type="text" name="daterange" value="01/01/2015 - 01/31/2015" class="form-control"/>
            </div>
            <div class="mb-3">
                
                Street Address
                <input type="text" class="form-control" name="address" required/>
            </div>
            <div class="mb-3">
                Pincode
                <input type="number" class="form-control" name="pincode" min="111111" max="999999" required/>

            </div>
            <button type="submit" class="btn btn-primary"  id="rzp-button1">
                Book Now
            </button>
          </form>

    </div>

    </div>
    
</div>
        </div>


@endsection


@section('scripts')
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
@if (Session::has('order'))
<script>
    var options = {
        "key": "{{ env('RAZORPAY_KEY') }}", // Enter the Key ID generated from the Dashboard
        "name": "Acme Corp", //your business name
        "description": "{{ Session::get('talk')->title }}",
        "image": "https://example.com/your_logo",
        "order_id": "{{ Session::get('order')->order_id }}", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "/verifyOrder?_token={{ csrf_token() }}",
        "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
            "name": "{{ auth()->user()->name }}", //your customer's name
            "email": "{{ auth()->user()->email }}",
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#135b8f"
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
</script>
    @endif

@endsection