<?php

if(isset($_POST['input_1'])){  
    $dane = $_POST['input_1'];
    echo $dane;
}
else
    header('Location: index.html');
    
?>