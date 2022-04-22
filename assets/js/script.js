// DOM ELEMENTS

// JS VARIABLES
var currentDate = moment().format("dddd, MMMM Do");
var currentTime = moment().format("k");
var time = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var midday = "";

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
      "<input type='text' value='' class='col-10 description text-area' data-number='" + j +"' />" +
      "<button class='col-1 saveBtn'>save</button>" +
      "</div>"
      );
      var dataNumber = $(".container input[data-number='" + j + "']").attr('data-number');
      if (parseInt(dataNumber) < parseInt(currentTime)) {
        $(".container input[data-number='" + j + "']").addClass('past')
      }
      if (parseInt(dataNumber) == parseInt(currentTime)) {
        $(".container input[data-number='" + j + "']").addClass('present')
      }
      if (parseInt(dataNumber) > parseInt(currentTime)) {
        $(".container input[data-number='" + j + "']").addClass('future')
      }
      j++
    }
}

