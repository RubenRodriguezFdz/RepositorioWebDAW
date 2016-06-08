<?php

session_start();
include 'db_connect.php';

$objeto = array();

if (isset($_SESSION['cart_items']) && count($_SESSION['cart_items']) > 0) {
    $ids = "";
    foreach ($_SESSION['cart_items'] as $id => $value) {
        $ids = $ids . $id . ",";
        $objeto[$id] = $value;
    }
    $ids = rtrim($ids, ',');
    
    $query = "SELECT id_prod, nombre_prod, categoria_prod, precio_prod FROM productos WHERE id_prod IN ($ids) ORDER BY nombre_prod";
    $stmt = $con->prepare($query);
    $stmt->execute();
    
    $arrayobj = Array();
    while ($row = $stmt->fetch(PDO::FETCH_OBJ)) {
        
        $arrayobj[] =$row;
    }
    $arrayobj[] = $objeto;
   $stmt = null;
    // formamos la respuest
    $objeto_json = new stdClass();
    $objeto_json->productos = $arrayobj;
    echo json_encode($objeto_json);
    
} else {

    $objeto_json = new stdClass();
    $objeto_json->productos = "no";
    echo json_encode($objeto_json);
}