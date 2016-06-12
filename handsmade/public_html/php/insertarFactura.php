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
include 'db_connect.php';

$login = "";
if (isset($_SESSION['login'])) {
    //seleccionamos el id del ultimo pedido realizado y que está pendiente por facturar.
    $query = "SELECT id_pedido FROM pedidos ORDER BY id_pedido DESC LIMIT 1";
    $stmt = $con->prepare($query);
    $stmt->execute();
    $pedido = "";
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $pedido = $id_pedido;
    }
    $query = '';
    $stmt = null;
    
    
    //formamos la sentencia de insert con el pedido y recorremos los valores 
    //de los productos que hay que insertar y sus cantidades correspondientes
    $query = "INSERT INTO facturas (id_pedido, id_prod, cantidad) VALUES ";
    
    //por cada vez que se recorre el foreach se forma una fila para insertar en
    // funcion de la cantidad de los productos seleccionados.
    foreach ($_SESSION['cart_items'] as $id => $value) {
        $query .= "($pedido, $id, $value),";
    }
    
    //quitamos la ultima coma y la sustituimos con un punto y coma
    $query = rtrim($query, ',');
    //colocamos punto y coma para cerrar la sentencia
    $query .= ';';

    $stmt = $con->prepare($query);
    $stmt->execute();

    // formamos la respuest 
    $objeto_json = new stdClass();
    $objeto_json->mensaje = "$query";
    echo json_encode($objeto_json);
    
} else {

    // formamos la respuest
    $objeto_json = new stdClass();
    $objeto_json->mensaje = "ha habido un problema con la conexion a la base de datos";
    echo json_encode($objeto_json);
}