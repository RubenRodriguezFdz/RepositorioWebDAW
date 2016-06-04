<?php

session_start();
include 'db_connect.php';
//$action = isset($_GET['action']) ? $_GET['action'] : "";
//$name = isset($_GET['name']) ? $_GET['name'] : "";
$json = "";

if (\count($_SESSION['cesta']) > 0) {
    $ids = "";
    foreach ($_SESSION['cesta'] as $id => $value) {
        $ids = $ids . $id . ",";
    }

    $query = "SELECT id, name, price FROM products WHERE id IN (1, 2, 3) ORDER BY name";
    $stmt = $con->prepare($query);
    $stmt->execute();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        
            $objeto_json1 = new stdClass();
            $objeto_json1->id = $id;
            $objeto_json1->name = $name;
            $objeto_json1->price = $price;
            $json .= "{";
            $json .= '"id":"'.$id.'",';
            $json .= '"nombre":"'.$name.'",';
            $json .= '"precio":"'.$price.'"';
//            $json .= '"cantidad":"'.$row[2].'"';
        
            $json .= "},";
    }
    $json = rtrim($json, ',');
//    $json .= "]";
    
    // formamos la respuest
    $objeto_json = new stdClass();
    $objeto_json->productos = $objeto_json1;
    echo json_encode($objeto_json);
} else {

    echo "<div class='alert alert-danger'>";
    echo "<strong>Producto no encontrado</strong> in your cart!";
    echo "</div>";
}