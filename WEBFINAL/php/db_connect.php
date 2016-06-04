<?php
$host = "localhost";
$db_name = "mispruebas";
$username = "root";
$password = "";
 
try {
    $con = new PDO("mysql:host={$host};dbname={$db_name}", $username, $password);
}
// tratar los errores  de la conexion
catch(PDOException $exception){
    echo "Error en la conexion: " . $exception->getMessage();
}
?>
