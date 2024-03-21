<?php
    include("../connection.php");

    if(isset($_GET['id'])) {

        $sql = "DELETE FROM producte WHERE id=" . $_GET["id"];
        $result = mysqli_query($conn, $sql);
    }
    header('Location: ex2FormListat.php');
?>