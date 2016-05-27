<?php

/**
 * Autor= Ruben Rodríguez Fernández
 * Fecha= 15-Abr-2016
 * Licencia= gpl30
 * Version= 1.0
 * Descripcion= Registro de un usuario nuevo en la base de datos
 * */
/*
 * Copyright (C) 2016 Rubén Rodríguez Fernández
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
require_once 'login.php';

Class Registrar {

    public function registro ()
    {

        $mensaje = '';

        $registro = new Registro();

        //Se recogen todos los valores del formulario
        $login = $_POST['log'];
        $password = $_POST['pass'];
        $nombre = $_POST['nombre'];
        $apellidos = $_POST['apellidos'];
        $dni = $_POST['dni'];
        $email = $_POST['e-mail'];
        $direccion = $_POST['direccion'];
        $telefono1 = $_POST['telefono1'];
        if ($_POST['telefono2']) {
            $telefono2 = $_POST['telefono2'];
        } else {
            $telefono2 = "";
        }

        // Validación de datos
        // Validación de DNI
        if (!preg_match("/^[0-9]{7,8}[a-zA-Z]$/", $dni)) {
            header('Location: ../signup.html?mensaje=campoErroneo');
            exit;
        }
        // Validación de nombre
        if (!preg_match("/^[A-Za-záÁéÉíÍóÓúÚñÑ]{1}[A-Z a-z áÁéÉíÍóÓúÚñÑ]*$/", $nombre)) {
            header('Location: ../signup.html?mensaje=campoErroneo');
            exit;
        }
        // Validación de apellidos
        if (!preg_match("/^[A-Za-záÁéÉíÍóÓúÚñÑ]{1}[A-Z a-z áÁéÉíÍóÓúÚñÑ]*$/", $apellidos)) {
            header('Location: ../signup.html?mensaje=campoErroneo');
            exit;
        }
        // Validación de email
        if (!preg_match("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/", $email)) {
            header('Location: ../signup.html?mensaje=campoErroneo');
            exit;
        }
        // Validación de dirección
        if ($direccion === "") {
            header('Location: ../signup.html?mensaje=campoErroneo');
            exit;
        }
        // Validación de telefono 1
        if (!preg_match("/^[9|6][0-9]{8}$/", $telefono1)) {
            header('Location: ../signup.html?mensaje=campoErroneo');
            exit;
        }
        // Validación de telefono 2
        if ($telefono2 !== "") {
            if (!preg_match("/^[9|6][0-9]{8}$/", $telefono2)) {
                header('Location: ../signup.html?mensaje=campoErroneo');
                exit;
            }
        }

        //Se define el array de campos a introducir en la basa de datos
        $campos = array(
            "login" => $login,
            "pass" => $password,
            "dni" => $dni,
            "nombre" => $nombre,
            "apellidos" => $apellidos,
            "email" => $email,
            "direccion" => $direccion,
            "telefono1" => $telefono1,
            "telefono2" => $telefono2,
        );
        if ($registro->load($mensaje, $campos, "clientes", "guardar")) {
            header('Location: ../thanksRegistro.html');
            exit;
        } else {
            //Error al introducir un nuevo usuario
            header('Location: ../signup.html?mensaje=errorUsuario');
            exit;
        }

    }
}
$start = New Registrar();
$start->registro();

?>