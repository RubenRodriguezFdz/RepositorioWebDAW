<?php

/**
 * Autor= RubÃ©n RodrÃ­guez FernÃ¡ndez, Yesica Rojas
 * Fecha= 15-feb-2016
 * Licencia= gpl30
 * Version= 1.0
 * Descripcion= ValidaciÃ³n de datos del lado del servidor
 * */
/*
 * Copyright (C) 2016 RubÃ©n RodrÃ­guez FernÃ¡ndez
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

class Validacion {

    private $_camposObligatorios = array();
    private $_camposPendientes = array();
    private $_camposErroneos = array();

    public function __construct($camposObligatorios = '') {
        $this->_camposObligatorios = $camposObligatorios;
    }

    public function getCamposPendientes() {
        return $this->_camposPendientes;
    }

    public function getCamposErroneos() {
        return $this->_camposErroneos;
    }

    public function validacionCampos() {
        foreach ($this->_camposObligatorios as $arr)
            switch ($this->_campoValido($arr[0], $arr[1])) {
                case "pendiente": array_push($this->_camposPendientes, $arr[0]);
                    break;
                case "erroneo": array_push($this->_camposErroneos, $arr[0]);
                    break;
            }
    }

    /**
     * Funciones para comprobar el campo y su tipo
     */
    private function _campoValido($campo, $tipo) {
        if (in_array($campo, $this->_camposObligatorios))
            if (!isset($_POST[$campo]) || !$_POST[$campo])
                return "pendiente";
        if ($_POST[$campo]) {
            switch ($tipo) {
                case "string": if (!$this->_esLetras($campo))
                        return "erroneo";
                    break;
                case "dni": if (!$this->_esDni($campo))
                        return "erroneo";
                    break;
                case "telefono": if (!$this->_esTelefono($campo))
                        return "erroneo";
                    break;
                case "email": if (!$this->_esEmail($campo))
                        return "erroneo";
                    break;
            }
        }
        return "valido";
    }

    private function _esDni($dni) {
        return preg_match("/^[0-9]{7,8}[a-zA-Z]$/", $_POST[$dni]);
    }

    private function _esLetras($str) {
        return preg_match("/^[a-zA-ZÃ¡Ã©Ã­ÃºÃ³Ã�Ã‰Ã�Ã“ÃšÃ‘Ã± ]{1,45}$/", $_POST[$str]);
    }

    private function _esTelefono($tel) {        
        return preg_match("/^[9|6][0-9]{8}$/", $_POST[$tel]);
    }

    private function _esEmail($email) {
        return preg_match("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/", $_POST[$email]);
    }

}

?>