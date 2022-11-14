var dateTime = $('#dateTime');
var saveBtn = $('.saveBtn');

var currentHour = moment().hour();

function printDateTime() {
    var date = moment().format("dddd, MMM Do YYYY")
    dateTime.text(date);
}

function hourTracker() {
       $('.timeSchedule').each(function () {
        var schedulehHour = $(this).attr("id");
        console.log( "currentHour " + currentHour)
        console.log("schedulehHour " + schedulehHour)

        if (schedulehHour < currentHour) {
            $(this).addClass("past");
        }
        else if (schedulehHour == currentHour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
}

printDateTime();
hourTracker();