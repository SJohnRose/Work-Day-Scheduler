// Reference to DOM elements
var saveButtonEl = $('.saveBtn');
var currentDayEl = $('#currentDay');
var timeBlockEl = $('.time-block');

var dateNow = dayjs().format('dddd, MMMM DD[th]');

$(function () {
  
  // Listener for click eventson the save button. This code uses the id in the containing time-block as a key to save the user input in local storage. 
  $(saveButtonEl).click(function() {
    for(var i=9; i<=17;i++) {
      var checkHour = "hour-"+i;
      if($(this).parent().attr('id') === checkHour) {
        localStorage.setItem(checkHour,$(this).prev().val());
      }
      
    }
  });
  
  // Code to retrieve data from local storage and display in time blocks
  function getFromLocal() {
    for(var i=9;i<=17;i++) {
      scheduleText = localStorage.getItem('hour-'+i);
      $('#hour-'+i+' textarea').val(scheduleText);
    }
  }
  getFromLocal();


  // Code to apply the past, present, or future class to each time block by comparing the id to the current hour. 
  function changeColour() {
    var timeNow = dayjs().format('HH');
    var divHour;
    $('.time-block').each(function() {
      divHour = parseInt(($(this).attr('id')).split('-')[1]);
      if(divHour < timeNow) {
        $(this).addClass('past');
      }
      else if (divHour == timeNow) {
        $(this).addClass('present');
      }
      else if(divHour > timeNow) {
        $(this).addClass('future');
      }
    });
  }
  changeColour();
 
  // Code to display the current date in the header of the page.
  function displayDate() {
    currentDayEl.text(dateNow);
  }

  displayDate();
});
