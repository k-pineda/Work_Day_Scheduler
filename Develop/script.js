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


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?-- id[0] localstorage.setItem("hour-9",userInput)
  //


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

});
$("#09 .description").val(localStorage.getItem("09"));
