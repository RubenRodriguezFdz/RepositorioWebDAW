<?php

session_start();

// obtiene los datos del articulo
$id = isset($_GET['id']) ? $_GET['id'] : "";
$name = isset($_GET['name']) ? $_GET['name'] : "";
$quantity = isset($_GET['quantity']) ? $_GET['quantity'] : "";

/*
 *  comproba si la sesion de 'carro'  fue creada
 * sino ha sido creada la crea 
 */
if (!isset($_SESSION['cesta'])) {
    $_SESSION['cesta'] = array();
}

// comproba si el articulo esta en el array, si lo está no lo añade al carro
if (array_key_exists($id, $_SESSION['cesta'])) {
    // redirecciona a la tienda para seleccionar otro articulo
    header('Location: ../tienda.html?action=exists&id=' . $id . '&name=' . $name);
}

// si resulta que el articulo no existe en el carro, entonces loañade
else {
    $_SESSION['cesta'][$id] = $name;

    // redirercciona a la tienda para seguir con la compra y avisa de que has sido añadido
    header('Location: ../tienda.html?action=added&id' . $id . '&name=' . $name);
}
?>