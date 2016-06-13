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

// array que acojerá los ids de los productos y las cantidades seleccionadas;
// que nos lo devolverá el json, ya que nos hace falta en la parte cliente 
//saber las cantidades elegidas de cada producto para calcular el precio y 
//posteriormente guardar esa misma cantidad en la tabla facturas
$objeto = array();

//comprobamos si ha sido iniciada la session cart_items y si tine valores o no
// en caso de que haya sido iniciada y que tiene productos,
//procedemos a ejecutar la sentencia
if (isset($_SESSION['cart_items']) && count($_SESSION['cart_items']) > 0) {
    $ids = "";
    foreach ($_SESSION['cart_items'] as $id => $value) {
        $ids = $ids . $id . ",";
        $objeto[$id] = $value;
    }
    $ids = rtrim($ids, ',');
    //formulamos la sentencia para extraer los danotos necesarios de la BD
    $query = "SELECT id_prod, nombre_prod, categoria_prod, precio_prod FROM productos WHERE id_prod IN ($ids) ORDER BY nombre_prod";
    $stmt = $con->prepare($query);
    $stmt->execute();
    
    //Array que acojerá todas la filas posibles que podamos obtener con nuestra
    //consulta a la base de datos
    $arrayobj = Array();
    while ($row = $stmt->fetch(PDO::FETCH_OBJ)) {
        
        $arrayobj[] =$row;
    }

    $arrayobj[] = $objeto;
    
    // formamos la respuest y devolvemos todas las filas que has sido afectadas
    //nuestra consulta a la base de datos
    $objeto_json = new stdClass();
    $objeto_json->productos = $arrayobj;
    echo json_encode($objeto_json);
    
} else {
//  en caso de que no se haya iniciado la session o que no tenga productos
//      seleccionados nos devuelve  un mensaje negativo
    $objeto_json = new stdClass();
    $objeto_json->productos = "no";
    echo json_encode($objeto_json);
}