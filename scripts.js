/*Funkcja konstruktora do tworzenia obiektu eventu*/ 

function TODOListGenerator(event, targetDate, timeRemaining){
    this.event = event;
    this.targetDate = targetDate;
    this.timeRemaining = function (todaysDate){
        return this.targetDate-todaysDate;
    };
}

	// Gaining the date to the header

function czas(){
	var dzisiaj = new Date();
	var dzien = dzisiaj.getDate();
		if (dzien<10)
			dzien='0'+dzien;
	var miesiac = dzisiaj.getMonth()+1;
		if (miesiac<10)
			miesiac='0'+miesiac;
	var rok = dzisiaj.getFullYear();
	var godzina = dzisiaj.getHours();
	var minuta = dzisiaj.getMinutes();
			if (minuta<10)
			minuta='0'+minuta;
	var sekunda = dzisiaj.getSeconds();
		if (sekunda<10)
			sekunda='0'+sekunda;

		//Date printing
	document.getElementById('sekcja_daty').innerText =dzien + '/' + miesiac + '/' + rok + ' | ' + godzina + ':' + minuta + ':' + sekunda;

	setTimeout("czas()",1000);
}
//--------------------------------------------------------------------------------------- error flags
let dayErr=true, monthErr=true, yearErr=true, hourErr=true, minuteErr=true;

//---------------------------------------------------------------------------------------
let dayId=document.getElementById('dayId');

function dayCheck(){
	let day = dayId.value;
	
	if(day=='day'){
		document.getElementById("dayComment").textContent='Niepoprawny dzień. ';
		dayErr=true;
	}
	else{
		document.getElementById("dayComment").textContent='';
		dayErr=false;
	}

}

dayId.addEventListener('blur', dayCheck, false);

//---------------------------------------------------------------------------------------
let monthId=document.getElementById('monthId');

function monthCheck(){
	let month = monthId.value;
	
	if(month=='month'){
		document.getElementById("monthComment").textContent='Niepoprawny miesiąc. ';
		monthErr=true;
	}
	else{
		document.getElementById("monthComment").textContent='';
		monthErr=false;
	}

}

monthId.addEventListener('blur', monthCheck, false);

//---------------------------------------------------------------------------------------

let yearId=document.getElementById('yearId');

function yearCheck(){
	let year = yearId.value;
	
	if(year=='year'){
		document.getElementById("yearComment").textContent='Niepoprawny rok. ';
		yearErr=true;
	}
	else{
		document.getElementById("yearComment").textContent='';
		yearErr=false;
	}
}

yearId.addEventListener('blur', yearCheck, false);
