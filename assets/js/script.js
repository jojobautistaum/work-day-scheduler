const workHours = 9;
const workStartAt = 9;
var toDoList = document.querySelectorAll("#to-do textarea");

// Display the current Date
function currentDay() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
}

// Return the current hour in 24-hour format
function currentHour() {
    return moment().hour();
}

// Update our "to do" list and date every 5 minutes
function checkSchedule (toDos) {
    currentDay();
    updateToDo();
    for (var i = 0; i < toDos.length; i++) {
        if (currentHour() > i + workStartAt || currentHour() > 17) {
            toDos[i].classList.remove("future", "present");
            toDos[i].classList.add("past");
        }
        else if (currentHour() === i + workStartAt ) {
            toDos[i].classList.remove("past", "future");
            toDos[i].classList.add("present");
        }
        else {
            toDos[i].classList.remove("present", "past");
            toDos[i].classList.add("future");
        }
    }
}

// Retrieve "To Do" from localStorage and populate our list
function updateToDo() {
    if (localStorage.length > 0) {
        for (var i = 0; i < localStorage.length; i++){
            var n = parseInt((localStorage.key(i)));
            // Filter strayed content of localStorage
            if (n > -1 && n < workHours) {
                toDoList[n].value = localStorage.getItem(localStorage.key(i));
            }
        }   
    }
}

// Save the "To Do" in the localStorage when save button is clicked
function saveListener () {
    $("i").click(function() {
        var btnIndex = parseInt($(event.target).text());
        localStorage.setItem(btnIndex, toDoList[btnIndex].value);
    });
}

// Starting our app
$(document).ready(function() {
    checkSchedule(toDoList);
    saveListener();
   
    // Update every 5 minutes
    setInterval(function() {
        checkSchedule(toDoList);    
    }, (1000 * 60) * 5);
});



