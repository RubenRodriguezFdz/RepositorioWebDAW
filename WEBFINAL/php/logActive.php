<?php
/**
 * Autor= Ruben Rodríguez Fernández
 * Fecha= 12/05/16
 * Licencia= gpl30
 * Version= 1.0
 * Descripcion= Comprobación de sesion abierta de usuarios
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
session_start();

$objeto_json = new stdClass();

if (isset($_SESSION['on'])) {
    $objeto_json->mensaje = $_SESSION['on'];
    if ($_SESSION['on'])
        $objeto_json->login = $_SESSION['login'];
}

echo json_encode($objeto_json);