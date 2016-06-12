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
//variable que recojerá el login del usuario
$login = "";

//comprobamos si ha sido inciada la sesion de login
// si es asi se ejecuta el codigo interno
if (isset($_SESSION['login'])) {
    
//    foreach ($_SESSION['login'] as $value) {
        $login = $_SESSION['login'];
    //  selccionamos el id del usuario logeado
    $query = "SELECT id_user FROM clientes WHERE login = '$login'";
    //preparamos la conexion 
    $stmt = $con->prepare($query);
    //se ejecuta la sentencia
    $stmt->execute();
    


    $user = "";
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
    $user = $id_user;
    }
    $query = null;
    $stmt = null;
//  insertamos la fila en la tabla de pedidos relacionado con el uaurio logeado
    $query = "INSERT INTO pedidos (id_user) values ('$user')";
    $stmt = $con->prepare($query);
    $stmt->execute();

    // devolvemos un simple mensaje para controlar si ha sido insertada o no la fila;
    $objeto_json = new stdClass();
    $objeto_json->mensaje = "si";
    echo json_encode($objeto_json);
    
} else {
    
    // en caso de que no se haya iniciado la session login nos devuelve el siguiente mensaje
    $objeto_json = new stdClass();
    $objeto_json->mensaje = "no hay session iniciada";
    echo json_encode($objeto_json);
}

