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

// FUNCTIONS
function displayDay() {
  $("#currentDay").html(currentDate);
  displayPlanner();
}

function displayPlanner() {
  var j = 9;
  for (var i = 0; i < time.length; i++) {
    if (i <= 2) {
      midday = " AM";
    } else {
      midday = " PM";
    }
    $(".container").append(
      "<div class='row time-block'>" +
        "<p class='col-1 hour pt-3'>" +
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

// <-- LOCAL STORAGE -->
$("input[data-number='9']").val(localStorage.getItem("9"));
$("input[data-number='10']").val(localStorage.getItem("10"));
$("input[data-number='11']").val(localStorage.getItem("11"));
$("input[data-number='12']").val(localStorage.getItem("12"));
$("input[data-number='13']").val(localStorage.getItem("13"));
$("input[data-number='14']").val(localStorage.getItem("14"));
$("input[data-number='15']").val(localStorage.getItem("15"));
$("input[data-number='16']").val(localStorage.getItem("16"));
$("input[data-number='17']").val(localStorage.getItem("17"));

// EVENT LISTENER
$(".saveBtn").click(function () {
  var activity = $(this).siblings("input").val();
  console.log(activity);
  var hour = $(this).siblings("input").attr("data-number");
  console.log(hour);
  localStorage.setItem(hour, activity);
});

// FUNCTION CALLS
displayDay();
