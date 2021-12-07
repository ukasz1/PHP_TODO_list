<!--
<!DOCTYPE HTML>
<html lang="pl">
<head>
    <meta charset="utf-8" />

</head>

<body>

-->

<!-- <table> -->
    <table>
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

                    // text formatting 
                    $dzien_txt = $dzien;
                    if($dzien_txt<10)
                        $dzien_txt='0'.$dzien_txt;

                    $miesiac_txt = $miesiac;
                    if($miesiac_txt<10)
                        $miesiac_txt='0'.$miesiac_txt;

                    $minuty_txt = $minuty;
                    if($minuty_txt<10)
                        $minuty_txt='0'.$minuty_txt;

                    echo "<td align='center'>$id</td>";
                    echo "<td align='center'>$rodzaj</td>";
                    echo "<td align='center'>$tresc</td>";
                    echo "<td align='center'>$dzien_txt/$miesiac_txt/$rok</td>";
                    echo "<td align='center'>$godziny:$minuty_txt</td>";
                    echo "<td class='timeRemaining'>$czas_UNIX</td>";
                    echo "<td class='cancel'><img src='Pliki/cancel-icon2.png' width='30%'></td>";
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
</table>
<!-- </table> -->

<!--
</body>
</html>
-->