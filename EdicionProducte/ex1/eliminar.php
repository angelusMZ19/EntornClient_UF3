<?php
    include("../connection.php");

        $delete= mysqli_real_escape_string($conn, $_GET["id"] );
        $sql = "DELETE FROM producte WHERE id= $delete" ;
        echo $sql  ; 
    header('Location: ex1List.php');
    $conn.close();
?>