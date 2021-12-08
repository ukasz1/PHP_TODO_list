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

window.addEventListener('DOMContentLoaded', function(){
    loadDoc();
}, false);

setTimeout(function(){
    timeDecode();
},100);

//----------
function timeDecode(){
    let today = new Date();
    let todayUnitime = today.getTime();
    let timeList = document.getElementsByClassName('timeRemaining');
    const tab = new Array(timeList.length);

    for (let i=0; i<tab.length; i++){
        tab[i] = Number(timeList[i].innerHTML);
        tab[i] = tab[i] - todayUnitime;
        timeList[i].textContent = timeLeft(tab[i]);
        console.log(timeList[i]);
    }
};

















// var zxc = document.getElementById('zxc');
// zxc.addEventListener('click', test, false);

//window.addEventListener('DOMContentLoaded', spadaj, false);

/*
window.addEventListener('DOMContentLoaded', wstaw, false);
function wstaw(){
	document.getElementsByClassName('timeRemaining')[0].innerHTML='<b>asdz</b>';
}
window.addEventListener('DOMContentLoaded', wstaw, false);
*/
