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
let eventErr=true, dayErr=true, monthErr=true, yearErr=true, hourErr=true, minuteErr=true;

/*
	eventErr=true 	-	the event description is empty
	dayErr=true		-	day is incorrect
	monthErr=true	-	month is incorrect
	yearErr=true 	-	year is incorrect
	hourErr=true	-	hour is incorrect
	minuteErr=true	-	minute is incorrect
*/

//---------------------------------------------------------------------------------------
let description = document.getElementById('description');

function descriptionCheck(){
	if(description.value == '')
		eventErr=true;
	else
		eventErr=false;
}

description.addEventListener('change', descriptionCheck, false);

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

//---------------------------------------------------------------------------------------
let hourId = document.getElementById('hour-Id');
let minuteId = document.getElementById('minute-Id');

const timeCheck = (timeUnit, endpoint) => {
	let timeUnitValue = timeUnit.value;

	let commentText = undefined;
										//NEED TO ADD ERROR FLAG
	if(endpoint == 23){
		commentText = 'godzina';
	}
	else{
		commentText = 'minuta';
	}
	
	
	if(timeUnitValue[0]==='0' && timeUnitValue[1]!==undefined)	//hour format '0x' accepted, e.g. '05'
		timeUnitValue=timeUnitValue[1];
			
			if(timeUnitValue === String(parseInt(timeUnitValue,10))) //main checking
				;	
			else{
				hourErr = true;
				document.getElementById("hourComment").textContent='Niepoprawna '+ commentText +'. ';
				return 0;
			}
			parseInt(timeUnitValue,10);
			
			if(timeUnitValue>=0 && timeUnitValue<=endpoint){
				hourErr = false;
				document.getElementById("hourComment").textContent='';
			}
			else{
				hourErr = true;
				document.getElementById("hourComment").textContent='Niepoprawna '+ commentText +'. ';
			}
}

hourId.addEventListener('blur', function(){
	timeCheck(hourId, 23);
}, false);

/*
minuteId.addEventListener('blur', function(){
	timeCheck(minuteId, 59);
}, false);*/

//---------------------------------------------------------------------------------------


const minuteCheck = () => {
	if(minuteId.value == '')
		minuteErr = true;
	else
		minuteErr = false;
}

minuteId.addEventListener('blur', minuteCheck, false);

//---------------------------------------------------------------------------------------

const btn = document.getElementById('submit-form');

btn.addEventListener('click', e => {
	
	e.preventDefault();
	
	if(eventErr + dayErr + monthErr + yearErr + hourErr + minuteErr !=0)
		console.log('Błędny formularz');
	else
		console.log('Wszystko git!');
	
	console.log(`
	eventErr: ${eventErr}
	dayErr: ${dayErr}
	monthErr: ${monthErr}
	yearErr: ${yearErr}
	hourErr: ${hourErr}
	minuteErr: ${minuteErr}
`);
	
}, false);