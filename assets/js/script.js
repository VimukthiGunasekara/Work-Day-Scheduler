var dateTime = $('#dateTime');
var saveBtn = document.querySelector(".saveBtn");

var currentHour = moment().hour();

function printDateTime() {
    var date = moment().format("dddd, MMM Do YYYY")
    dateTime.text(date);
}

function hourTracker() {
    $('.timeSchedule').each(function () {
        var schedulehHour = $(this).attr("id");
        console.log("currentHour " + currentHour)
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

$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
})

$("#time08 .description").val(localStorage.getItem("time08"));
$("#time09 .description").val(localStorage.getItem("time09"));
$("#time10 .description").val(localStorage.getItem("time10"));
$("#time11 .description").val(localStorage.getItem("time11"));
$("#time12 .description").val(localStorage.getItem("time12"));
$("#time13 .description").val(localStorage.getItem("time13"));
$("#time14 .description").val(localStorage.getItem("time14"));
$("#time15 .description").val(localStorage.getItem("time15"));
$("#time16 .description").val(localStorage.getItem("time16"));
$("#time17 .description").val(localStorage.getItem("time17"));

printDateTime();
hourTracker();

