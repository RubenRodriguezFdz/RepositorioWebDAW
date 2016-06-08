<?php

session_start();

// obtiene los datos del articulo
$response = $_POST["json"];
$doc = json_decode($response, true);
$id = $doc['id'];
$cantidad = $doc['cantidad'];
$mensaje = "";


/*
 *  comproba si la sesion de 'cart_items'  fue creada
 * sino ha sido creada la crea 
 */
if (!isset($_SESSION['cart_items'])) {
    $_SESSION['cart_items'] = array();
}

// comproba si el articulo esta en el array, si lo está no lo añade al carro
if (array_key_exists($id, $_SESSION['cart_items'])) {
    
        $_SESSION['cart_items'][$id] = $cantidad;
        $mensaje = "Se han añadido {$cantidad} unidades de este producto a su carrito";

        $objeto_json = new stdClass();
        $objeto_json->mensaje = $mensaje;
        echo json_encode($objeto_json);
}

// si resulta que el articulo no existe en el carro, entonces lo añade
else {
    $_SESSION['cart_items'][$id] = $cantidad;
}
?>