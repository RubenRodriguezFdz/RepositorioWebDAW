<?php

/**
 * Autor= Ruben
 * Fecha= 29-ene-2016
 * Licencia= gpl30
 * Version= Expression version is undefined on line 6, column 14 in Templates/Scripting/EmptyPHP.php.
 * Descripcion= gestiona la variable global $_SESSION
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

/**
 * Class Session
 *
 * Clase que gestiona la variable global $_SESSION
 */
class Session {

    public function startSession() {
        if ($this->_isOpen())
            return;
        session_start();
        $_SESSION["on"] = true;
    }

    public function closeSession() {
        if (!$this->_isOpen())
            return;
        if (isset($_COOKIE[session_name()])) {
            setcookie(session_name(), "", time() - 3600, "/");
        }
        session_unset();
        session_destroy();
    }

    public function _isOpen() {
        return isset($_SESSION["on"]);
    }

}

?>