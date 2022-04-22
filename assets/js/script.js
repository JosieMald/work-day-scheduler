// DOM ELEMENTS

// JS VARIABLES
var currentDate = moment().format("dddd, MMMM Do");
var currentTime = moment().format("k");
var time = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var midday = "";
var icon =
  "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-device-floppy' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>" +
  "<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>" +
  "<path d='M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2'></path>" +
  "<circle cx='12' cy='14' r='2'></circle>" +
  "<polyline points='14 4 14 8 8 8 8 4'></polyline></svg>";

function displayDay() {
  $("#currentDay").html(currentDate);
  displayPlanner();
}
displayDay();

function displayPlanner() {
  var j = 9;
  for (var i = 0; i < time.length; i++) {
    if (i <= 2) {
      midday = " AM";
    } else {
      midday = " PM";
    }
    $(".container").append(
      "<div class='row'>" +
        "<p class='col-1 hour time-block pt-3'>" +
        time[i] +
        midday +
        "</p>" +
        "<input type='text' value='' class='col-10 description' data-number='" +
        j +
        "' />" +
        "<button class='col-1 saveBtn'>" +
        icon +
        "</button>" +
        "</div>"
    );
    var dataNumber = $(".container input[data-number='" + j + "']").attr(
      "data-number"
    );
    if (parseInt(dataNumber) < parseInt(currentTime)) {
      $(".container input[data-number='" + j + "']").addClass("past");
    }
    if (parseInt(dataNumber) == parseInt(currentTime)) {
      $(".container input[data-number='" + j + "']").addClass("present");
    }
    if (parseInt(dataNumber) > parseInt(currentTime)) {
      $(".container input[data-number='" + j + "']").addClass("future");
    }
    j++;
  }
}
