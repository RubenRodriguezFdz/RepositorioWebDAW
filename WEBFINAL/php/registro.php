<?php

/**
 * Autor= Ruben Rodríguez Fernández
 * Fecha= 15-Abr-2016
 * Licencia= gpl30
 * Version=
 * Descripcion= Generacion de la sentencia SQL
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

require_once 'MySQL.php';
require_once 'Sql.php';

class Registro {
    
    //Funcion llamada por _load
    //Evalua la accion a realizar y rellena la sentencia SQL en funcion de la accion
    private function _crearLoad($campos = array(), $tabla = '', $accion = '') {
        $bd = new MySQL();
        $sql = new Sql();
        $base = $bd->getBase();
        $tabla = $base . ".$tabla";
        $sql->addTable($tabla);
        switch ($accion) {
            case 'buscar':
                $sql->addSelect("*");
                if ($campos) {
                    foreach ($campos as $key => $value) {
                        $sql->addWhere($key . " = :" . $key);
                    }
                }
                break;
            case 'guardar':
                $sql->setFuncion("insert");
                if ($campos) {
                    foreach ($campos as $key => $value) {
                        $sql->addSelect($key);
                        $sql->addValue(":" . $key);
                    }
                }
                break;
            case 'eliminar':
                $sql->setFuncion("delete");
                if ($campos) {
                    foreach ($campos as $key => $value) {
                        $sql->addWhere($key . " = :" . $key);
                    }
                }
                break;
            case 'modificar':
                $sql->setFuncion("update");
                if ($campos) {
                    foreach ($campos['select'] as $key => $value) {
                        $sql->addSelect($key . " = :" . $key);
                    }
                    foreach ($campos['where'] as $key => $value) {
                        $sql->addWhere($key . " = :" . $key);
                    }
                }
                break;
        }
        return $sql;
    }

    //Función que recibe los parametros siguientes:
    //Mensaje: vacio
    //$campos: array asociativo nombre_campo => valor_campo. En caso de modificacion, bidimensional de este formato
            //select = array (nombre_campo => valor_campo),
            //where = array (nombre_campo => valor_campo),
    //$tabla: nombre de la tabla
    //$accion: accion a realizar (buscar, guardar, eliminar, modificar)
    //La funcion realiza la sentencia SQL necesaria
    public function load(&$mensaje, $campos = array(), $tabla = '', $accion = '') {
        $bd = new MySQL();
        $sql = $this->_crearLoad($campos, $tabla, $accion);
        if ($campos && $accion != 'modificar') {
            foreach ($campos as $key => $value) {
                $sql->addEjecutar(':' . $key, $value);
            }
        } elseif ($campos && $accion == 'modificar') {
            foreach ($campos['select'] as $key => $value) {
                $sql->addEjecutar(':' . $key, $value);;
            }
            foreach ($campos['where'] as $key => $value) {
                $sql->addEjecutar(':' . $key, $value);
            }
        }
        $ejecucion = $sql->generarEjecucion();
        return $bd->ejecutar($sql, $ejecucion, $mensaje);
    }

}

?>