<?php
$db_server = "localhost";
$db_name = "m6";
$db_user = "angelo";
$db_pwd = "";
$conn = mysqli_connect($db_server, $db_user, $db_pwd, $db_name);
if (!$conn) {
    die("Error de conexion: " . mysqli_connect_error());
}
?>