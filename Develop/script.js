// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = dayjs().format("dddd, MMM DD");
$("#currentDay").text(currentDay);

var currentTime=dayjs().format("HH");

var userInput=$(".description");

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

$(".saveBtn").on("click", function () {
  var key=$(this).parent().attr("id");
  var userInput=$(this).siblings(".description").val();

  localStorage.setItem(key,userInput);    
  
})
});
$("#09 .description").val(localStorage.getItem("09"));
