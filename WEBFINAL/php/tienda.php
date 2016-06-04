<?php
session_start();
 
$page_title="Products";
include 'layout_head.php';

 
//to prevent undefined index notice
$action = isset($_GET['action']) ? $_GET['action'] : "";
$product_id = isset($_GET['product_id']) ? $_GET['product_id'] : "1";
$name = isset($_GET['name']) ? $_GET['name'] : "";
 
if($action=='added'){
    echo "<div class='alert alert-info'>";
        echo "<strong>{$name}</strong> was added to your cart!";
    echo "</div>";
}

if($action=='exists'){
    echo "<div class='alert alert-info'>";
        echo "<strong>{$name}</strong> already exists in your cart!";
    echo "</div>";
}
?>
<!--
//$query = "SELECT id, name, price FROM products ORDER BY name";
//$stmt = $con->prepare( $query );
//$stmt->execute();
// 
//$num = $stmt->rowCount();
// 
//if($num>0){
// 
//    //start table
//    echo "<table class='table table-hover table-responsive table-bordered'>";
// 
//        // our table heading
//        echo "<tr>";
//            echo "<th class='textAlignLeft'>Product Name</th>";
//            echo "<th>Price (USD)</th>";
//            echo "<th>Action</th>";
//        echo "</tr>";
// 
//        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
//            extract($row);
// 
//            //creating new table row per record
//            echo "<tr>";
//                echo "<td>";
//                    echo "<div class='product-id' style='display:none;'>{$id}</div>";
//                    echo "<div class='product-name'>{$name}</div>";
//                echo "</td>";
//                echo "<td>&#36;{$price}</td>";
//                echo "<td>";
//                    echo "<a href='add_to_cart.php?id={$id}&name={$name}' class='btn btn-primary'>";
//                        echo "<span class='glyphicon glyphicon-shopping-cart'></span> Add to cart";
//                    echo "</a>";
//                echo "</td>";
//            echo "</tr>";
//        }
// 
//    echo "</table>";
//}
// 
//// tell the user if there's no products in the database
//else{
//    echo "No products found.";
//}
// -->
<!DOCTYPE html>
<div class="gallery-text">
                        <h2>Tienda</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor.</p>
                        </div>
<div class="container">

        <div class="row">

            <div class="col-md-3">
                <p class="lead">HandsMade</p>
                <div class="list-group">
                    <a href="#" class="list-group-item" onclick="bolsos()">Bolsos</a>
                    <a href="#" class="list-group-item" onclick="bisuteria()">Bisutería</a>
                    <a href="#" class="list-group-item" onclick="accesorios()">Accesorios</a>
                </div>
            </div>

            <div class="col-md-9"  id="bolsos">

                <div class="row carousel-holder">

                    <div class="col-md-12">
                        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="item active">
                                    <img class="slide-image" src="../images/bolso1.jpg" alt="">
                                </div>
                                <div class="item">
                                    <img class="slide-image" src="../images/bolso2.jpg" alt="">
                                </div>
                                <div class="item">
                                    <img class="slide-image" src="../images/bolso3.jpg" alt="">
                                </div>
                            </div>
                            <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                            </a>
                            <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                            </a>
                        </div>
                    </div>

                </div>

                <div class="row">

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="../images/bolso4.png" alt="">
                            <div class="caption">
                                <h4 class="pull-right">$24.99</h4>
                                <h4><a href="#">First Product</a>
                                </h4>
                                <p>See more snippets like this online store item at <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
                            </div>
                            <div class="ratings">
                                <p class="pull-right">15 reviews</p>
                                <p>
                                <a href='add_to_cart.php?id=1&name=primero' class='btn btn-primary'>
                                <span class='glyphicon glyphicon-shopping-cart'></span> Add to cart
                                </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="../images/bolso5.png" alt="">
                            <div class="caption">
                                <h4 class="pull-right">$64.99</h4>
                                <h4><a href="#">Second Product</a>
                                </h4>
                                <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div class="ratings">
                                <p class="pull-right">12 reviews</p>
                                <p>
                                <a href='add_to_cart.php?id=2&name=segundo' class='btn btn-primary'>
                                <span class='glyphicon glyphicon-shopping-cart'></span> Add to cart
                                </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="../images/bolso6.png" alt="">
                            <div class="caption">
                                <h4 class="pull-right">$74.99</h4>
                                <h4><a href="#">Third Product</a>
                                </h4>
                                <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div class="ratings">
                                <p class="pull-right">31 reviews</p>
                                <p>
                                <a href='add_to_cart.php?id=3&name=tercero' class='btn btn-primary'>
                                <span class='glyphicon glyphicon-shopping-cart'></span> Add to cart
                                </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="../images/bolso7.png" alt="">
                            <div class="caption">
                                <h4 class="pull-right">$84.99</h4>
                                <h4><a href="#">Fourth Product</a>
                                </h4>
                                <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div class="ratings">
                                <p class="pull-right">6 reviews</p>
                                <p>
                                <a href='add_to_cart.php?id=4&name=cuarto' class='btn btn-primary'>
                                <span class='glyphicon glyphicon-shopping-cart'></span> Add to cart
                                </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="../images/bolso8.png" alt="">
                            <div class="caption">
                                <h4 class="pull-right">$94.99</h4>
                                <h4><a href="#">Fifth Product</a>
                                </h4>
                                <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div class="ratings">
                                <p class="pull-right">18 reviews</p>
                                <p>
                                <a href='add_to_cart.php?id=5&name=quinto' class='btn btn-primary'>
                                <span class='glyphicon glyphicon-shopping-cart'></span> Add to cart
                                </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="../images/bolso8.png" alt="">
                            <div class="caption">
                                <h4 class="pull-right">$94.99</h4>
                                <h4><a href="#">Fifth Product</a>
                                </h4>
                                <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div class="ratings">
                                <p class="pull-right">18 reviews</p>
                                <p>
                                <a href='add_to_cart.php?id=6&name=sexto' class='btn btn-primary'>
                                <span class='glyphicon glyphicon-shopping-cart'></span> Add to cart
                                </a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div class="col-md-9"  id="accesorios">

                <div class="row carousel-holder">

                    <div class="col-md-12">
                        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="item active">
                                    <img class="slide-image" src="http://placehold.it/800x300" alt="">
                                </div>
                                <div class="item">
                                    <img class="slide-image" src="http://placehold.it/800x300" alt="">
                                </div>
                                <div class="item">
                                    <img class="slide-image" src="http://placehold.it/800x300" alt="">
                                </div>
                            </div>
                            <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                            </a>
                            <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                            </a>
                        </div>
                    </div>

                </div>

                <div class="row">

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="http://placehold.it/320x150" alt="">
                            <div class="caption">
                                <h4 class="pull-right">$24.99</h4>
                                <h4><a href="#">First Product</a>
                                </h4>
                                <p>See more snippets like this online store item at <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
                            </div>
                            <div class="ratings">
                                <p class="pull-right">15 reviews</p>
                                <p>
                                <a href='add_to_cart.php?id=6&name=Pendientes Bohemia' class='btn btn-primary'>
                                <span class='glyphicon glyphicon-shopping-cart'></span> Add to cart
                                </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="http://placehold.it/320x150" alt="">
                            <div class="caption">
                                <h4 class="pull-right">$64.99</h4>
                                <h4><a href="#">Second Product</a>
                                </h4>
                                <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div class="ratings">
                                <p class="pull-right">12 reviews</p>
                                <p>
                                <a href='add_to_cart.php?id=6&name=Pendientes Bohemia' class='btn btn-primary'>
                                <span class='glyphicon glyphicon-shopping-cart'></span> Add to cart
                                </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="http://placehold.it/320x150" alt="">
                            <div class="caption">
                                <h4 class="pull-right">$74.99</h4>
                                <h4><a href="#">Third Product</a>
                                </h4>
                                <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div class="ratings">
                                <p class="pull-right">31 reviews</p>
                                <p>
                                <a href='add_to_cart.php?id=6&name=Pendientes Bohemia' class='btn btn-primary'>
                                <span class='glyphicon glyphicon-shopping-cart'></span> Add to cart
                                </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="http://placehold.it/320x150" alt="">
                            <div class="caption">
                                <h4 class="pull-right">$84.99</h4>
                                <h4><a href="#">Fourth Product</a>
                                </h4>
                                <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div class="ratings">
                                <p class="pull-right">6 reviews</p>
                                <p>
                                <a href='add_to_cart.php?id=6&name=Pendientes Bohemia' class='btn btn-primary'>
                                <span class='glyphicon glyphicon-shopping-cart'></span> Add to cart
                                </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="http://placehold.it/320x150" alt="">
                            <div class="caption">
                                <h4 class="pull-right">$94.99</h4>
                                <h4><a href="#">Fifth Product</a>
                                </h4>
                                <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div class="ratings">
                                <p class="pull-right">18 reviews</p>
                                <p>
                                <a href='add_to_cart.php?id=6&name=Pendientes Bohemia' class='btn btn-primary'>
                                <span class='glyphicon glyphicon-shopping-cart'></span> Add to cart
                                </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <h4><a href="#">Like this template?</a>
                        </h4>
                        <p>If you like this template, then check out <a target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this tutorial</a> on how to build a working review system for your online store!</p>
                        <a class="btn btn-primary" target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">View Tutorial</a>
                    </div>

                </div>

            </div>
            <div class="col-md-9"  id="bisuteria">

                <div class="row carousel-holder">

                    <div class="col-md-12">
                        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="item active">
                                    <img class="slide-image" src="../images/bisu1.jpe" alt="">
                                </div>
                                <div class="item">
                                    <img class="slide-image" src="../images/bisu2.jpg" alt="">
                                </div>
                                <div class="item">
                                    <img class="slide-image" src="../images/bisu3.jpg" alt="">
                                </div>
                            </div>
                            <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                            </a>
                            <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                            </a>
                        </div>
                    </div>

                </div>

                <div class="row">

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="../images/bisu4.png" alt="">
                            <div class="caption">
                                <h4 class="pull-right">11.99€</h4>
                                <h4><a href="#">Pendientes Bohemia</a>
                                </h4>
                                <p>Pendientes de aro dorado con charms de estrellita y pluma. Diámetro del aro 3,5cm</p>
                            </div>
                            <div class="ratings">
                                <p class="pull-right">15 reviews</p>
                                <p>
                                <a href='add_to_cart.php?id=6&name=Pendientes Bohemia' class='btn btn-primary'>
                                <span class='glyphicon glyphicon-shopping-cart'></span> Add to cart
                                </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="../images/bisu5.png" alt="">
                            <div class="caption">
                                <h4 class="pull-right">$64.99</h4>
                                <h4><a href="#">Second Product</a>
                                </h4>
                                <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div class="ratings">
                                <p class="pull-right">12 reviews</p>
                                <p>
                                <a href='add_to_cart.php?id=6&name=Pendientes Bohemia' class='btn btn-primary'>
                                <span class='glyphicon glyphicon-shopping-cart'></span> Add to cart
                                </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="../images/bisu6.png" alt="">
                            <div class="caption">
                                <h4 class="pull-right">$74.99</h4>
                                <h4><a href="#">Third Product</a>
                                </h4>
                                <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div class="ratings">
                                <p class="pull-right">31 reviews</p>
                                <p>
                                <a href='add_to_cart.php?id=6&name=Pendientes Bohemia' class='btn btn-primary'>
                                <span class='glyphicon glyphicon-shopping-cart'></span> Add to cart
                                </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="../images/bisu7.png" alt="">
                            <div class="caption">
                                <h4 class="pull-right">$84.99</h4>
                                <h4><a href="#">Fourth Product</a>
                                </h4>
                                <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div class="ratings">
                                <p class="pull-right">6 reviews</p>
                                <p>
                                <a href='add_to_cart.php?id=6&name=Pendientes Bohemia' class='btn btn-primary'>
                                <span class='glyphicon glyphicon-shopping-cart'></span> Add to cart
                                </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="../images/bisu8.png" alt="">
                            <div class="caption">
                                <h4 class="pull-right">$94.99</h4>
                                <h4><a href="#">Fifth Product</a>
                                </h4>
                                <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div class="ratings">
                                <p class="pull-right">18 reviews</p>
                                <p>
                                <a href='add_to_cart.php?id=6&name=Pendientes Bohemia' class='btn btn-primary'>
                                <span class='glyphicon glyphicon-shopping-cart'></span> Add to cart
                                </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <h4><a href="#">Like this template?</a>
                        </h4>
                        <p>If you like this template, then check out <a target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this tutorial</a> on how to build a working review system for your online store!</p>
                        <a class="btn btn-primary" target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">View Tutorial</a>
                    </div>

                </div>

            </div>

        </div>

    </div>

     <?php       
include 'layout_foot.php';
?>