// displays current day at the header of page 
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

var currentDay = dayjs().format("dddd, MMM Do");
$("#currentDay").text(currentDay);

// will retrieve current time in 24 hour style
var currentTime=dayjs().format("HH");

// will contain value of user input when entered in calendar events 
var userInput=$(".description");

// will run when browser loads to indicate by color in the time blocks current, past or future  
$(".time-block").each(function(){
  var id = $(this).attr("id");

  if (id < currentTime){
    $(this).addClass("past")
  }

  else if (id === currentTime){
    $(this).addClass("present")
  }

  else if (id > currentTime){
    $(this).addClass("future")
  }

// event listener function to run when saving events on calendar 
$(".saveBtn").on("click", function () {
  var key=$(this).parent().attr("id");
  var userInput=$(this).siblings(".description").val();

  localStorage.setItem(key,userInput);    
})
});
// store events on calendar and display on time block
$("#09 .description").val(localStorage.getItem("09"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
