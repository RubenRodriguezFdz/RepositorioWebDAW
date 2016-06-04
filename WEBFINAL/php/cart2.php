<?php

session_start();
include 'db_connect.php';
//$action = isset($_GET['action']) ? $_GET['action'] : "";
//$name = isset($_GET['name']) ? $_GET['name'] : "";
$json = "";

$response = $_POST['producto'];
$doc = json_decode($response, true);

$id = $doc['id'];
$nombre = $doc['nombre'];
$precio = $doc['precio'];
$cantidad = $doc['cantidad'];

//    $query = "SELECT name, price FROM products WHERE id IN (1, 2, 3) ORDER BY name";
    $query = "INSERT INTO PRODUCTS (id, name, price) values (".$id.",".$nombre.",".$precio.")";
    $stmt = $con->prepare($query);
    $stmt->execute();
    