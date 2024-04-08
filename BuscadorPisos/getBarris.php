<?php
include("connection.php");

if (mysqli_ping($conn)) {
    echo "echo";
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