function loadDoc(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            document.getElementsByTagName("tbody")[0].innerHTML = this.responseText;
        }
    }
    xhttp.open("POST", "getData.php", true);
    xhttp.send();
}


window.addEventListener('DOMContentLoaded', loadDoc, false);


function spadaj(){
    /*console.log(document.getElementsByClassName('timeRemaining').length);*/
    //let dzisiaj = new Date();
    let jutro = new Date(2022, 0, 3, 10, 25, 0);
    let pojutrze = new Date(2022, 4, 3, 15, 0, 0);
    let roznica = pojutrze - jutro;
    console.log(roznica);
    //console.log(jutro.getTime());
    //console.log(pojutrze.getTime());
}

var zxc = document.getElementById('zxc');
zxc.addEventListener('click', spadaj, false);

