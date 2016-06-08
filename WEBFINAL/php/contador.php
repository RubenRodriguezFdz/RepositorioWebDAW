<?php

session_start();
$num = 0;
//$cart_count = count($_SESSION['cart_items']);
if (isset($_SESSION['cart_items'])) {
    $num = count($_SESSION['cart_items']);
}



$objeto_json = new stdClass();
$objeto_json->contador = $num;
echo json_encode($objeto_json);
