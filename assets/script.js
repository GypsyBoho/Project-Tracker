$(document).ready(function() {
    var currentDate = dayjs();
    $('#currentDate').text(currentDate.format('MMM D, YYYY' + " at " + "hh:mm:ss a"));
    console.log(currentDate);
  });
  

