<!DOCTYPE HTML>
<html lang="pl">
<head>
    <meta charset="utf-8" />

</head>

<body>

<table>
<?php
    $description = $_POST['description'];
    $taskName = $_POST['taskName'];
    $day = $_POST['day'];
    $month = $_POST['month'];
    $year = $_POST['year'];
    $hour = $_POST['hour'];
    $minute = $_POST['minute'];

echo<<<END

<tr>
<td>1</td>
<td>$taskName</td>
<td>$description</td>
<td>$day $month $year</td>
<td>$hour:$minute</td>
<td>Pozostały czas</td>
<td>X</td>
</tr>

END

?>

</table>

</body>
</html>