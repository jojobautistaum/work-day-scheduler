const workHours = 9;
const workStartAt = 9;

function currentDay() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    console.log(currentHour());
}

function currentHour() {
    return 15;
    // return moment().hour();
}


function checkSchedule () {
    var toDosColor = document.querySelectorAll("#to-do textarea");
    console.log("select all")
    console.log(toDosColor);
    for (var i = 0; i < toDosColor.length; i++) {
        if (currentHour() > i + workStartAt || currentHour() > 17) {
            toDosColor[i].classList.remove("future", "present");
            toDosColor[i].classList.add("past");
        }
        else if (currentHour() === i + workStartAt ) {
            toDosColor[i].classList.remove("past", "future");
            toDosColor[i].classList.add("present");
        }
        else {
            toDosColor[i].classList.remove("present", "past");
            toDosColor[i].classList.add("future");
        }
    }
    console.log("After");
    console.log(toDosColor);
}

currentDay();
checkSchedule();
