<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
$db_host = "localhost";
$db_usuario = "root";
$db_passwd = "";
$db_nombre = "categorias";

$conn = new mysqli($db_host,$db_usuario,$db_passwd, $db_nombre);

if ($conn->connect_error) {
    die("Connexió fallida: " . $conn->connect_error);
}


$cat = 4; 

$sql = "SELECT * FROM subcategorias WHERE id_categoria= $cat";
$result = $conn->query($sql);

$return = array();


if ($result->num_rows > 0) {
   
    while ($row = $result->fetch_assoc()) {
        $objeto = new stdClass();
        $objeto->nom = $row["nom"];
        $objeto->valor = $row["id"];
        $return[] = $objeto;
    }
}

echo json_encode($return);
$conn->close();

?>  
    
</body>
</html>

