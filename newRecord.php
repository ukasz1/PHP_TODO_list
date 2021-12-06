<!DOCTYPE HTML>
<html lang="pl">
<head>
    <meta charset="utf-8" />

</head>

<body>

<table>
<?php
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

        $sql = "SELECT * FROM deadline LIMIT 2";

        if ($rezultat = @$polaczenie->query($sql)){
            $ilu_userow = $rezultat->num_rows;
            if($ilu_userow>0){
                $wiersz = $rezultat->fetch_assoc();
                
                echo $wiersz['id']." ";
                echo $wiersz['rodzaj']." ";
                echo $wiersz['tresc']." ";
                echo $wiersz['dzien']." ";
                echo $wiersz['miesiac']." ";
                echo $wiersz['rok']." ";
                echo $wiersz['godziny']." ";
                echo $wiersz['minuty']." | ";
                echo $wiersz['czas_UNIX']." ";

                $rezultat->free_result();   //czyszczenie pamięci
            }
            else{

            }
        };


/*echo "<tr>";
echo "<td>1</td>";
echo "<td>$taskName</td>";
echo "<td>$description</td>";
echo "<td>$day $month $year</td>";
echo "<td>$hour:$minute</td>";
echo "<td>Pozostały czas</td>";
echo "<td>X</td>";
echo "</tr>";*/

        $polaczenie->close();
    }
    

?>

</table>

</body>
</html>