// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// Reference to DOM elements
var saveButtonEl = $('.saveBtn');
var currentDayEl = $('#currentDay');
var hours = [9,10,11,12,1,2,3,4,5];

var schedule = {};

$(function () {
  
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(saveButtonEl).click(function() {
    //console.log($(this).parent().attr("id"));
    for(var i=0; i<hours.length;i++) {
      
      var checkHour = "hour-"+hours[i];
      //console.log(checkHour);
      if($(this).parent().attr('id') === checkHour) {
        console.log("selected" + checkHour);
        localStorage.setItem(checkHour,$(this).prev().val());
        //saveScheduleLocal();
      }
    }
    //var timeClicked = $(this);
  });
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // Code to display the current date in the header of the page.
  function displayDate() {
    var timeNow = dayjs().format('dddd, MMMM DD[th]');
    console.log(timeNow);
    currentDayEl.text(timeNow);
  }

  function saveScheduleLocal() {

  }
  displayDate();
});
