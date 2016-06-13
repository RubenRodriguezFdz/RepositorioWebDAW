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






$host = "localhost";
$db_name = "handsmade"; // Cambiar por las credenciales de cada base de datos
$username = "homestead";
$password = "secret";
 
try {
    $con = new PDO("mysql:host={$host};dbname={$db_name}", $username, $password);
}
// tratar los errores  de la conexion
catch(PDOException $exception){
    echo "Error en la conexion: " . $exception->getMessage();
}
?>
