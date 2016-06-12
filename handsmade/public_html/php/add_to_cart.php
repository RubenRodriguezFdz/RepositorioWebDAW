<?php
/**
 * Autor= Nassim El Boussaidi
 * Fecha= 02-jun-2016
 * Licencia= gpl30
 * Version= 1.0
 * Descripcion= php de HandsMade
 * */
/*
 * Copyright (C) 2016 Nassim
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */




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

// comproba si el articulo esta en el array, si está coge la cantidad solicitada 
//y s ela añade a la existentente ya en el carrito
if (array_key_exists($id, $_SESSION['cart_items'])) {

    $cant = $_SESSION['cart_items'][$id];
    $cantidad = $cantidad + $cant;
    $_SESSION['cart_items'][$id] = $cantidad;
    $mensaje = "Se han añadido {$cantidad} unidades de este producto a su carrito";
    
    $cont = count($_SESSION['cart_items']);
    
    $objeto_json = new stdClass();
    $objeto_json->mensaje = $mensaje;
    $objeto_json->contador = $cont;
    echo json_encode($objeto_json);
}

// si resulta que el articulo no existe en el carro, entonces lo añade
else {
    $_SESSION['cart_items'][$id] = $cantidad;
    $mensaje = "Se han añadido {$cantidad} unidades de este producto a su carrito";
    
    $cont = count($_SESSION['cart_items']);
    $objeto_json = new stdClass();
    $objeto_json->mensaje = $mensaje;
    $objeto_json->contador = $cont;
    echo json_encode($objeto_json);
}
?>