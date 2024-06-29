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

    <div class="py-5">
        <div class="container">
            <h3 class="fw-bold mb-sm-3 mb-md-5 text-center text-md-start">Our Range</h3>
            <div class="row g-3 d-flex justify-content-evenly">
                @foreach ($furnitures as $item)
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
                        <a href="/rentItem/{{$item->id}}" role="button" class="btn btn-primary card-link py-2 px-4">Rent Now!</a>
                         
                    </div>
                </div> <!--First Card--->
                @endforeach
                </div><!--row idv--->

            </div>
        </div>


        <!--blog post---->
        <div class="pb-5">
            <div class="container py-5">
                <h3 class="h3 fw-bold mb-3 text-center text-md-start mb-3">Blog posts</h3>
                <div class="row mt-md-5">

                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <img alt="boxes" class="bg rounded"
                            src="img/boxes.jpg" width="250"
                            height="200" img>
                        <div class="mt-3">
                            <a href="#" class="fw-bold">How to promote brands</a>
                            <p class="text-muted">When you enter into any new area of science, you almost reach</p>
                        </div>
                    </div><!--col div -->

                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <img alt="shipping" class="bg rounded"
                            src="img/ship.jpg" width="250"
                            height="200" img>
                        <div class="mt-3">
                            <a class="fw-bold">How we handle shipping</a>
                            <p class="text-muted">When you enter into any new area of science, you almost reach</p>
                        </div>
                    </div><!--col div -->

                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <img alt="fruit" class="bg rounded"
                            src="img/fruit.jpg" width="250"
                            height="200" img>
                        <div class="mt-3">
                            <a class="fw-bold">How to promote brands</a>
                            <p class="text-muted">When you enter into any new area of science, you almost reach</p>
                        </div>
                    </div><!--col div -->

                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <img alt="a girl with her laptop" class="bg rounded"
                            src="img/girl.jpg" width="250"
                            height="200" img>
                        <div class="mt-3">
                            <a class="fw-bold">Success story of sellers</a>
                            <p class="text-muted">When you enter into any new area of science, you almost reach</p>
                        </div>
                    </div><!--col div -->

                </div><!-- div row -->

            </div>
        </div>

@endsection