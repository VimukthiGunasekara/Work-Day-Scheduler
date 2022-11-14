var dateTime = $('#dateTime');
var saveBtn = $('.saveBtn');

var currentHour = moment().hour();

function printDateTime() {
    var date = moment().format("dddd, MMM Do YYYY")
    dateTime.text(date);
}

function hourTracker() {
       $('.timeSchedule').each(function () {
        var blockHour = $(this).attr("id");
        console.log( "currentHour " + currentHour)
        console.log("blockHour " + blockHour)

        //check if we've moved past this time
        if (blockHour < currentHour) {
            $(this).addClass("past");
        }
        else if (blockHour == currentHour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
}

printDateTime();
saveData();