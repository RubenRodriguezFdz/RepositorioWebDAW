<?php
session_start();
 
// cogemos el id del producto
$id = isset($_GET['id']) ? $_GET['id'] : "";
 
// borramos el producto del array de session
unset($_SESSION['cart_items'][$id]);
 
// redirecciona al carrito y le dice que el producto ha sido borrado
header('Location: ../carrito.html');
?>