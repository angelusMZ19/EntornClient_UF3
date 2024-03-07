<?php
$db_host = "localhost";
$db_usuario = "root";
$db_passwd = "";
$db_nombre = "categorias";

$conn = new mysqli($db_host,$db_usuario,$db_passwd, $db_nombre);

if ($conn->connect_error) {
    die("Connexió fallida: " . $conn->connect_error);
}

$sql = "SELECT * FROM categoria";
$result = $conn->query($sql);

$return = array();


if ($result->num_rows > 0) {
   
    while ($row = $result->fetch_assoc()) {
        $objeto = new stdClass();
        $objeto->nom = $row["nom"];
        $objeto->id = $row["id"];
        $return[] = $objeto;
    }
   
}

echo json_encode($return);
$conn->close();

?>  
