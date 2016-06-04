<?php
// connect to database
include 'config/db_connect.php';
?>
<!--
<!DOCTYPE html>
<html>
    <head>
        <title>HandsMade</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <script type="application/x-javascript">

            addEventListener("load", function() {setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } 

        </script>

        <link rel="stylesheet" href="../css/lightbox.css" type="text/css"
              media="all" />
        owl-css
        <link href="css/owl.carousel.css" rel="stylesheet">
        bootstrap
        <link href="../css/bootstrap.min.css" rel="stylesheet" type="text/css">
        coustom css
        <link href="../css/style.css" rel="stylesheet" type="text/css" />
        default-js
        <script src="../js/jquery-2.1.4.min.js"></script>
        menu_jqueryLogin-js
        <script src="../js/menu_jqueryLogin.js"></script>
        bootstrap-js
        <script src="../js/bootstrap.min.js"></script>
        script
        <script type="text/javascript" src="../js/move-top.js"></script>
        <script type="text/javascript" src="../js/easing.js"></script>
        <script src="../js/tienda.js" type="text/javascript"></script>

    </head>
    body
    <body>
        -----------Header--------------

        <div class="container">
            <div class="row">

                <header>
                    <div class="logo col-xs-12 col-md-3">
                        <a href="index.html"> <img src="../images/logo.jpg"
                                                   class="img-responsive">
                        </a>
                    </div>
                    <div class="todo col-xs-12 col-md-8">

                        <div class="row">
                            <div class="nombreEmpresa col-xs-6 col-md-10">
                                <h1>
                                    <a href="index.html"><span>Hands</span>Made</a>
                                </h1>

                            </div>
                            <div class=" col-xs-6 col-md-2">
                                <div class="dropdown-grids">
                                    <div id="loginContainer">
                                        <a id="loginButton"><span>Login</span></a>
                                        <div style="display: none;" id="loginBox">
                                            <form id="loginForm">
                                                <div class="login-grids">
                                                    <div class="login-grid-left">
                                                        <fieldset id="body">
                                                            <fieldset>
                                                                <label for="email">Email Address</label> <input
                                                                    name="email" id="email" type="text">
                                                            </fieldset>
                                                            <fieldset>
                                                                <label for="password">Password</label> <input
                                                                    name="password" id="password" type="password">
                                                            </fieldset>
                                                            <input id="login" value="Sign in" type="submit"> <label
                                                                for="checkbox"><input id="checkbox"
                                                                                  type="checkbox"> <i>Remember me</i></label>
                                                        </fieldset>
                                                        <span><a href="#">Forgot your password?</a></span>
                                                        <div class="or-grid">
                                                            <p>OR</p>
                                                        </div>
                                                        <div class="social-sits">
                                                            <div class="facebook-button">
                                                                <a href="#">Connect with Facebook</a>
                                                            </div>
                                                            <div class="chrome-button">
                                                                <a href="#">Connect with Google</a>
                                                            </div>
                                                            <div class="button-bottom">
                                                                <p>
                                                                    New account? <a href="signup.html">Signup</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="search col-xs-12 col-md-11">

                                <form method="post" action="search.html">
                                    <input type="text" name="query" id="query" placeholder="Search…"
                                           autocomplete="off" value="">
                                </form>
                            </div>
                            <div class="mini-cart col-xs-7 col-md-1">
                                 Mini cart 
                                <a href="cart.php" title="Go to cart →"> <span>3</span>
                                </a>
                                <a href="cart.php" title="Go to cart →">
                                    <?php
                                    // contador de productos en el carro
                                    @ $cart_count = count($_SESSION['cart_items']);
                                    ?>
                                    <span class="badge" id="comparison-count"><?php echo $cart_count; ?></span>
                                </a>
                                 End class="mini-cart" 
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>

        --------Fin header-------------

        ---------Menu de navegacion-----------

        <nav class="navbar navbar-default nav-dflt-setin">
            <div class="container">
                 Brand and toggle get grouped for better mobile display 
                <div class="navbar-header nav-min-wid">
                    <button type="button" class="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span> <span
                            class="icon-bar"></span> <span class="icon-bar"></span> <span
                            class="icon-bar"></span>
                    </button>
                    <h1>
                        <a class="navbar-brand" href="index.html"></a>
                    </h1>
                </div>
                 Collect the nav links, forms, and other content for toggling 
                <div class="collapse navbar-collapse "
                     id="bs-example-navbar-collapse-1">

                    <ul class="nav navbar-nav nav-max-wid cl-effect-5"
                        id="cl-effect-5">
                        <li><a href="index.html"><span data-hover="Home"
                                                       >Home</span></a></li>
                        <li><a href="tienda.php"><span data-hover="Tienda" class="active">Tienda</span></a></li>
                        <li><a href="../galeria.html"><span data-hover="Galeria">Galeria</span></a></li>
                        <li><a href="../nosotros.html"><span data-hover="Nosotros">Nosotros</span></a></li>
                        <li><a href="../contacto.html"><span data-hover="Contacto">Contacto</span></a></li>
                        <li><a href="cart.php"><span data-hover="Carro">Carro</span></a></li>
                    </ul>

                </div>
                 /.navbar-collapse 
                <div class="clearfix"></div>
            </div>
             /.container-fluid 
        </nav>-->
