// DOM ELEMENTS


// JS VARIABLES
var currentDayEl = moment().format('dddd, MMMM Do');

function displayDay() {
    $('#currentDay').html(currentDayEl);
    
}
displayDay()

