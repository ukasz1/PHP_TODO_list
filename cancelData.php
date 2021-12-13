<?php

if(isset($_POST['input_1'])){  

    require_once "connect.php";

    $polaczenie = @new mysqli($host, $db_user, $db_password, $db_name); 

    if ($polaczenie->connect_errno!=0){     
        echo "Error: ".$polaczenie->connect_errno;
    }
    else{
        $dane = (int) $_POST['input_1'];
        $sql = "DELETE FROM deadline WHERE id=$dane";

        $rezultat = @$polaczenie->query($sql);

        $polaczenie->close();
        
        header('Location: index.html');
    }

}
else
    header('Location: index.html');

?>