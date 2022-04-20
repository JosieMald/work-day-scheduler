// DOM ELEMENTS

// JS VARIABLES
var currentDayEl = moment().format("dddd, MMMM Do");

function displayDay() {
  $("#currentDay").html(currentDayEl);
  displayPlanner();
}
displayDay();

function displayPlanner() {
  $(".container").append(
    "<div class='row'>" +
      "<p class='col-1 hour time-block pt-3'>9AM</p>" +
      "<input type='text' value='' class='col-10 description text-area' />" +
      "<button class='col-1 saveBtn'>save</button>" +
      "</div>"
  );
}
