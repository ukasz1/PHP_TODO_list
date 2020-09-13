/*Funkcja konstruktora do tworzenia obiektu eventu*/ 

function TODOListGenerator(event, targetDate, timeRemaining){
    this.event = event;
    this.targetDate = targetDate;
    this.timeRemaining = function (todaysDate){
        return this.targetDate-todaysDate;
    };
}

// Pobieranie daty do nagłówka

var todaysDate = new Date();
var numberOfDay = todaysDate.getDate();
var numberOfMonth = todaysDate.getMonth()+1;
var numberOfYear = todaysDate.getFullYear();

//console.log(numberOfDay + '/' + numberOfMonth + '/' + numberOfYear); - sprawdzenie w konsoli

var fullPresentDate = numberOfDay + '/' + numberOfMonth + '/' + numberOfYear;

var EldateSection = document.getElementById('dateSection');
EldateSection.textContent = fullPresentDate;