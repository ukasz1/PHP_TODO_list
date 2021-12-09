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

//----------

var tab = [];                           // <--- stores the number of milliseconds for each activity till the deadline

function firstTimeLoad(){               // <--- time calculation for deadline in ms
    let today = new Date();
    let todayUnitime = today.getTime();
    let timeList = document.getElementsByClassName('timeRemaining');

    for (let i=0; i<timeList.length; i++){
        tab.push(Number(timeList[i].innerHTML));
        tab[i] = tab[i] - todayUnitime + 1000;
        timeList[i].textContent = tab[i];
        console.log(tab[i]);
    }
}

function uniTimeRefresh(){              // <--- refreshing the time every second
    for (let i=0; i<tab.length; i++){
        tab[i] = tab[i] - 1000;

        if(tab[i] <= 0)
            continue;
        
        let timeList = document.getElementsByClassName('timeRemaining');
        timeList[i].textContent = timeLeft(tab[i]);

        //timeList[i].textContent = tab[i];
    }
    console.log(tab);
    setTimeout(function(){uniTimeRefresh()},1000);
}

setTimeout(function(){
    firstTimeLoad();
    uniTimeRefresh();
    cancel();

},100);


