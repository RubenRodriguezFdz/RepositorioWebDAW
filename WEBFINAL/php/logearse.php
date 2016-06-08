<?php

/**
 * Autor= Ruben Rodríguez Fernández
 * Fecha= 15-Abr-2016
 * Licencia= gpl30
 * Version= 1.0
 * Descripcion= loggeo de los usuarios
 * */
/*
 * Copyright (C) 2016 Ruben
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

require_once 'registro.php';
require_once 'session.php';

$mensaje ='';
$respuesta = null;

$registro = new Registro();

//Se recogen todos los valores del formulario
$login = $_POST['log'];
$password = $_POST['password'];


$campos = array(
    "login" => $login,
    "pass" => $password,
);
if ($datos = $registro->load($mensaje, $campos, "clientes", "buscar")) {
    $ses = new Session();
    $ses->startSession();
    $_SESSION['login'] = $datos[0]['login'];
    $objeto_json = new stdClass();
    $objeto_json->mensaje="Correct";
    $objeto_json->parametros=new stdClass();
    $objeto_json->parametros->dni = $datos[0]['dni'];
    $objeto_json->parametros->login = $datos[0]['login'];
} else {
    //Error al introducir un login y password de usuario
    $objeto_json = new stdClass();
    $objeto_json->mensaje="Error";
}
echo json_encode($objeto_json);
