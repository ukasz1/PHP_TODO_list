<!--
<!DOCTYPE HTML>
<html lang="pl">
<head>
    <meta charset="utf-8" />

</head>

<body>

-->

<!-- <table> -->
<tr>


<?php


    require_once "connect.php";

    $polaczenie = @new mysqli($host, $db_user, $db_password, $db_name); //połączenie z DB

    if ($polaczenie->connect_errno!=0){     // czy jest błąd połączenia
        echo "Error: ".$polaczenie->connect_errno;
    }
    else{

        $sql = "SELECT * FROM deadline LIMIT 2";

        if ($rezultat = @$polaczenie->query($sql)){
            //$ilu_userow = $rezultat->num_rows;
            $ilu_userow = mysqli_num_rows($rezultat);
            if($ilu_userow>=1){

                //$wiersz = $rezultat->fetch_assoc();
                
                for ($i = 1; $i <= $ilu_userow; $i++){
                    
                    $wiersz = mysqli_fetch_assoc($rezultat);
                    $id = $wiersz['id'];
                    $rodzaj = $wiersz['rodzaj'];
                    $tresc = $wiersz['tresc'];
                    $dzien = $wiersz['dzien'];
                    $miesiac = $wiersz['miesiac'];
                    $rok = $wiersz['rok'];
                    $godziny = $wiersz['godziny'];
                    $minuty = $wiersz['minuty'];
                    $czas_UNIX = $wiersz['czas_UNIX'];

                    echo "<td width='50' align='center'>$id</td>";
                    echo "<td width='50' align='center'>$rodzaj</td>";
                    echo "<td width='50' align='center'>$tresc</td>";
                    echo "<td width='50' align='center'>$dzien</td>";
                    echo "<td width='50' align='center'>$miesiac</td>";
                    echo "<td width='50' align='center'>$rok</td>";
                    echo "<td width='50' align='center'>$godziny</td>";
                    echo "<td width='50' align='center'>$minuty</td>";
                    echo "<td width='50' align='center'>$czas_UNIX</td>";
                    echo "</tr><tr>";
                }

                $rezultat->free_result();   //czyszczenie pamięci
            }
            else{

            }
        };

        $polaczenie->close();
    }
    

?>
</tr>
<!-- </table> -->

<!--
</body>
</html>
-->