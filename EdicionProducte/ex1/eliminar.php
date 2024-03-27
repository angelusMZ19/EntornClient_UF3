<?php
 if(isset($_GET["id"]) && !empty($_GET["id"])){
    include("../connection.php");

    $sql = "DELETE FROM producte WHERE id=" . $_GET["id"];
        
    echo $sql;

    if ($conn->query($sql) === TRUE) {
        echo "Deleted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

 }  
    header('Location: ex1List.php');
    
?>