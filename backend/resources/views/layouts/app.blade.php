<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clone E-Commerce</title>


    <link rel="stylesheet" type="text/css" href="styles.css">
    <!-- Bootstrap -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
    <!--Font awesome!-->
    <script src="https://kit.fontawesome.com/f4e855eb8f.js" crossorigin="anonymous"></script><script type="text/javascript" src="//cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.js"></script>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css" />
    @yield('styles')
</head>

<body>



    <div class="container pt-3">

        <div class="input-group">
            <a class="navbar-brand" href="#"> <img alt="logo" class="me-3 me-md-5"
                    src="img/logo.svg"></img></a> <!--LOGO!-->

            <input type="text" id="input-form" class="form-control" placeholder="Search"
                aria-label="Text input with dropdown button">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">All type</button>
            <button title="Search" class="btn btn-primary d-none d-lg-block"><i
                    class="fa-solid fa-magnifying-glass rounded d-none d-lg-block"></i></button>

            <div class="ms-md-5 mt-2 mt-md-0">
                @auth
                
                @else
                <a type="button" href="/login" class="btn btn-outline-primary fw-500 rounded ">
                    <i class="fa-solid fa-user me-lg-2"></i>
                    <p class="d-none d-lg-inline">Sign in</p>
                </a>
                @endauth
                Location:
                <select class="js-example-basic-single" name="state" id="citySelect">

                  </select>
            </div>

            <ul class="dropdown-menu  dropdown-menu-start">
                <li><a class="dropdown-item" href="#">Best</a></li>
                <li><a class="dropdown-item" href="#">Special</a></li>
                <li><a class="dropdown-item" href="#">Latest</a></li>
            </ul>

        </div>

    </div> <!--Container div!-->
    <hr>


    <!--  Navbar  -->
    <div class="container mt-3">
        <nav class="navbar navbar-expand-lg navbar-light">

            <button class="navbar-toggler mb-2" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
    </div>

    @yield('app')

        <!-- Footer -->

        <div class="py-5">
            <div class="container">

                <div class="row d-flex">

                    <div class="col-md-12 col-lg-3 mb-3">

                        <img alt="logo"
                            src="/img/logo.svg"></img>
                        <p class="mt-4 text-muted">© 2018- 2021 Templatemount.<br>
                            All rights reserved.</p>

                    </div>

                    <div class="col-6 col-sm-6 col-md-4 col-lg-2">

                        <h6 class="h6 fw-bold">Store</h6>

                        <a href="#" class="text-decoration-none text-muted">About us</a>
                        <a href="#" class="text-decoration-none text-muted">Find stories</a>
                        <a href="#" class="text-decoration-none text-muted">Categories</a>
                        <a href="#" class="text-decoration-none text-muted">Blogs</a>
                    </div>

                    <div class="col-6 col-sm-6 col-md-4 col-lg-2">
                        <h6 class="h6 fw-bold">Information</h6>
                        <a href="#" class="text-decoration-none text-muted">About us</a>
                        <a href="#" class="text-decoration-none text-muted">Find stories</a>
                        <a href="#" class="text-decoration-none text-muted">Categories</a>
                        <a href="#" class="text-decoration-none text-muted">Blogs</a>
                    </div>

                    <div class="col-6 col-sm-6 col-md-4 col-lg-2 mt-3 mt-md-0">
                        <h6 class="h6 fw-bold">Support</h6>
                        <a href="#" class="text-decoration-none text-muted">About us</a>
                        <a href="#" class="text-decoration-none text-muted">Find stories</a>
                        <a href="#" class="text-decoration-none text-muted">Categories</a>
                        <a href="#" class="text-decoration-none text-muted">Blogs</a>
                    </div>

                    <div class="col-lg-3 mt-3 mt-lg-0">

                        <h6 class="h6 fw-bold">Newsletter</h6>
                        <p class="text-muted">Stay in touch with latest updates about our products and offers</p>

                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Email" aria-label="Email"
                                aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-secondary" type="button">Join</button>
                            </div>
                        </div>
                    </div>

                    



                </div><!--row div-->



            </div>
        </div>

<script>
$(document).ready(function(){
    const selectBox = document.getElementById('citySelect');
    fetch("/api/cities")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                
                
                // Assuming the data is an array of city names
                data.data.forEach(city => {
                    const option = document.createElement('option');
                    option.value = city.id;
                    option.dataset.id=city.id
                    option.textContent = city.name;
                    selectBox.appendChild(option);
                });
                const savedCity = getCityFromCookies();
                if (savedCity) {
                    selectBox.value = savedCity;
                }
                $('#citySelect').select2();
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });  
        $('#citySelect').on('select2:select', function (e) {
        const selectedCity = selectBox.value;
        saveCityToCookies(selectedCity);
    });
    function saveCityToCookies(city) {
        document.cookie = `selectedCity=${city}; path=/; max-age=${60*60*24*30}`;
    }
    function getCityFromCookies() {
        const name = 'selectedCity=';
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    }
});
</script>
@yield('scripts')
</body>

</html>