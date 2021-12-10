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

        //$nextWeek = time() + (7 * 24 * 60 * 60)
        $date=date_create("$year-$month-$day");
        date_time_set($date, $hour, $minute);

        $unixTime = date_timestamp_get($date);
        //$unixTime = $unixTime*1000;

        echo $description."<br />";
        echo $taskName."<br />";
        echo $day."<br />";
        echo $month."<br />";
        echo $year."<br />";
        echo $hour."<br />";
        echo $minute."<br />";
        echo $unixTime."<br />";

        $sql = "INSERT INTO deadline VALUES (NULL, '$taskName', '$description', $day, $month, $year, $hour, $minute, $unixTime)";

        /*(NULL, $taskName, $description, $day, $month, $year, $hour, $minute, $unixTime)"; */

        if($rezultat = $polaczenie->query($sql)){
            echo "Wpisano do bazy";
        }
        else{
            echo "Coś zwalone <br />";
            echo "Error: ";
        }

        $polaczenie->close();
        header('Location: index.html');

        //header('Location: index.html');
    }
    
/*
<select name="month" id="monthId">
						<option value="month">Miesiąc</option>
						<option value="junuary">styczeń</option>
						<option value="february">luty</option>
						<option value="march">marzec</option>
						<option value="april">kwiecień</option>
						<option value="may">maj</option>
						<option value="june">czerwiec</option>
						<option value="july">lipiec</option>
						<option value="august">sierpień</option>
						<option value="september">wrzesień</option>
						<option value="october">październik</option>
						<option value="november">listopad</option>
						<option value="december">grudzień</option>

*/

?>

