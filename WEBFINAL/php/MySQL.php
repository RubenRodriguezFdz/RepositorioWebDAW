<?php

/**
 * Autor= Ruben
 * Fecha= 15-feb-2016
 * Licencia= gpl30
 * Version= 1.0
 * Descripcion= Control de acceso a MySQL
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

class MySQL {

    const DB_DSN = "mysql:host=localhost"; // Nombre de host MYSQL
    const DB = "pruebas"; // Nombre de LA BASE DE DATOS
    const USUARIO = "homestead"; // Nombre de usuario de MySQL
    const PASSWORD = "secret"; // Contraseña de usuario de MySQL
    const TABLA = "clientes"; // Nombre de la tabla

    private $_mensaje;
    private $_conexion;

    public function getBase() {
        return self::DB;
    }

    public function getTabla() {
        return self::TABLA;
    }

    private function _conectar() {
        $this->_conexion = new PDO(self::DB_DSN, self::USUARIO, self::PASSWORD);
        $this->_conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->_conexion->exec("SET NAMES 'utf8'");
    }

    private function _desconectar() {
        $this->_conexion = NULL;
    }

    private function _traerDatos(Sql $sql, $ejecucion, &$mensaje) {
        $datos = array();
        try {
            $this->_conectar();
            $resultado = $this->_conexion->prepare($sql);
            $resultado->execute($ejecucion);
            $datos = $resultado->fetchAll(PDO::FETCH_ASSOC);
            $this->_desconectar();
        } catch (PDOException $e) {
            $mensaje = "No se ha podido realizar la consulta: " . $e->getMessage();
        }
        return $datos;
    }

    private function _modificarDatos(Sql $sql, $ejecucion, &$mensaje) {
        try {
            $this->_conectar();
            $resultado = $this->_conexion->prepare($sql);
            $resultado->execute($ejecucion);
            $this->_desconectar();
            if ($resultado->rowCount()) {
                return true;
            }
        } catch (PDOException $e) {
            $mensaje = "No se ha podido realizar la modificación: " . $e->getMessage();
            return false;
        }
    }

    public function ejecutar(Sql $sql, $ejecucion = "", &$mensaje) {
        $funcion = $sql->getFuncion();
        if ($funcion == "select") {
            $datos = self::_traerDatos($sql, $ejecucion, $mensaje);
        } else {
            $datos = self::_modificarDatos($sql, $ejecucion, $mensaje);
        }
        return $datos;
    }

}

?>