<?php
$db_server = "localhost";
$db_name = "m6";
$db_user = "angelo";
$db_pwd = "";

$conn = mysqli_connect($db_server, $db_user, $db_pwd, $db_name);

if (mysqli_ping($conn)) {
    $id = $_POST["id"];
    $sql = "SELECT * FROM barris WHERE id_districte = $id";
    $query = mysqli_query($conn, $sql);
    $object = new stdClass();
    $return = array();
    while ($row = $query->fetch_assoc()) {
        $object = new stdClass();
        $object->id = $row["id"];
        $object->name = $row["name"];
        array_push($return, $object);
    }
    echo json_encode($return);
    mysqli_close($conn);
}