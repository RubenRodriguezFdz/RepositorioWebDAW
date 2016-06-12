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

// cogemos el id del producto
$id = isset($_GET['id']) ? $_GET['id'] : "";

//recorremos la session de cart_items y comprobamos si el prodcuto cuyo id hemos
//  recibido tiene o no mas de una unidad selecionada.
foreach ($_SESSION['cart_items'] as $key => $value) {
    if ($key == $id) {
        
        //si resulta que tine mas de una unidad solo le restamos una
        if ($value > 1) {
            $newValue = $value - 1;
            $_SESSION['cart_items'][$id] = $newValue;
        }else{
            //en caso de que tenga una sola unidad borramos el producto entero
            unset($_SESSION['cart_items'][$id]);
        }
    }
}
// redirecciona al carrito y le dice que el producto ha sido borrado
header('Location: ../carrito.html');
?>