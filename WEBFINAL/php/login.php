<?php

/**
 * Autor= Ruben Rodríguez Fernández
 * Fecha= 15-Abr-2016
 * Licencia= gpl30
 * Version= 1.0
 * Descripcion= comprueba la existe de un login en la base de datos
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

Class Login
{

    public function compruebaLogin ()
    {
        $mensaje = "";
        //se recibe lo enviado al servidor mediante post
        $response = $_POST['login'];

        //Se rellena la cabecera
        header('Content-Type: text/xml');

        //Se completa el XML
        $xml = "<log>";

        $registro = New Registro();
        //Se elige el array dependiendo del origen
        $campos = array(
            "login" => $response,
        );
        if ($registro->load($mensaje, $campos, "clientes", "buscar")) {
            $xml = $xml . "false";
        } else {
            //Error al introducir un nuevo usuario
            $xml = $xml . "true";
        }

        $xml = $xml . "</log>";
        echo $xml;
    }
}

$login = New Login();
$login->compruebaLogin();
?>