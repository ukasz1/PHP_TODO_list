<?php
    if(!isset($_POST['description'])){
        header('Location: index.html');
        exit();
    }

    require_once "connect.php";

    $polaczenie = @new mysqli($host, $db_user, $db_password, $db_name); //połączenie z DB

    if ($polaczenie->connect_errno!=0){     // czy jest błąd połączenia
        echo "Error: ".$polaczenie->connect_errno;
    }
    else{

        echo "Połączenie ustanowione <br />";

        $description = $_POST['description'];
        $taskName = $_POST['taskName'];
        $day = $_POST['day'];
        $month = $_POST['month'];
        $year = $_POST['year'];
        $hour = $_POST['hour'];
        $minute = $_POST['minute'];

        $description = htmlentities($description, ENT_QUOTES, "UTF-8");
        
        $date=date_create("$year-$month-$day");
        date_time_set($date, $hour, $minute);

        $unixTime = date_timestamp_get($date);
        //$unixTime = $unixTime*1000;
/*
        echo $description."<br />";
        echo $taskName."<br />";
        echo $day."<br />";
        echo $month."<br />";
        echo $year."<br />";
        echo $hour."<br />";
        echo $minute."<br />";
        echo $unixTime."<br />";
*/
        $sql = "INSERT INTO deadline VALUES (NULL, '$taskName', '$description', $day, $month, $year, $hour, $minute, $unixTime)";

        if($rezultat = $polaczenie->query($sql)){
            echo "Wpisano do bazy";
        }
        else{
            echo "Error: ";
        }

        $polaczenie->close();
        header('Location: index.html');
    }
?>

