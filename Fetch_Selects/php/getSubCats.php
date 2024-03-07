<?php
$db_host = "localhost";
$db_usuario = "root";
$db_passwd = "";
$db_nombre = "categorias";

$conn = new mysqli($db_host,$db_usuario,$db_passwd, $db_nombre);

if ($conn->connect_error) {
    die("Connexió fallida: " . $conn->connect_error);
}


$cat = $_POST['categoria']; 

//$cat = 1; 
$sql = "SELECT * FROM subcategorias where id_categoria= '$cat' ";
$result = $conn->query($sql);

$return = array();


if ($result->num_rows > 0) {
   
    while ($row = $result->fetch_assoc()) {
        $objeto = new stdClass();
        $objeto->nom = $row["nom"];
        $objeto->id = $row["id"];
        $return[] = $objeto;
    }
    header("Content-Type:application/json");
    echo json_encode($return);
}else{
    header("HTTP/1.1 500 Internal Server Error");
    echo json_encode(array("error" => $conn->error));
}


$conn->close();

?>  


