// wright a script that
    // is able to grab the users local time(from the browser probably?)
    // changes the id of each box as hours pass
       
    // use military time for the script
// use local time to grab the date and append it to the bottom of the header
// is able to grab the users local time
// lets append fullDate to the bottom of the headder
var day = moment().format('dddd, MMMM Do YYYY, h:mm a');
$('#currentDay').append(day).value;
// now create a variable to take the current hour and make it an integer
var currentHour = parseInt(moment().format('H'));
var todayMiliseconds = new Date().getTime();
var singleDay = 86400000
// now blocks of code to either clear an item from local storage or append item to the page 
enteredTask = localStorage.getItem(9)
if (enteredTask) {
    parsedItem = JSON.parse(enteredTask)
    task = parsedItem.text
    stamp = parsedItem.timestamp
    if ((todayMiliseconds - stamp) > singleDay) {
        localStorage.removeItem(9)
    }
    else {
        $('#9am').append(task)
    }

}

enteredTask = localStorage.getItem(10)
if (enteredTask) {
    parsedItem = JSON.parse(enteredTask)
    task = parsedItem.text
    stamp = parsedItem.timestamp
    if ((todayMiliseconds - stamp) > singleDay) {
        localStorage.removeItem(10)
    }
    else {
        $('#10am').append(task)
    }

}

enteredTask = localStorage.getItem(11)
if (enteredTask) {
    parsedItem = JSON.parse(enteredTask)
    task = parsedItem.text
    stamp = parsedItem.timestamp
    if ((todayMiliseconds - stamp) > singleDay) {
        localStorage.removeItem(11)
    }
    else {
        $('#11am').append(task)
    }

}

enteredTask = localStorage.getItem(12)
if (enteredTask) {
    parsedItem = JSON.parse(enteredTask)
    task = parsedItem.text
    stamp = parsedItem.timestamp
    if ((todayMiliseconds - stamp) > singleDay) {
        localStorage.removeItem(12)
    }
    else {
        $('#noon').append(task)
    }

}

enteredTask = localStorage.getItem(13)
if (enteredTask) {
    parsedItem = JSON.parse(enteredTask)
    task = parsedItem.text
    stamp = parsedItem.timestamp
    if ((todayMiliseconds - stamp) > singleDay) {
        localStorage.removeItem(13)
    }
    else {
        $('#1pm').append(task)
    }

}

enteredTask = localStorage.getItem(14)
if (enteredTask) {
    parsedItem = JSON.parse(enteredTask)
    task = parsedItem.text
    stamp = parsedItem.timestamp
    if ((todayMiliseconds - stamp) > singleDay) {
        localStorage.removeItem(14)
    }
    else {
        $('#2pm').append(task)
    }

}

enteredTask = localStorage.getItem(15)
if (enteredTask) {
    parsedItem = JSON.parse(enteredTask)
    task = parsedItem.text
    stamp = parsedItem.timestamp
    if ((todayMiliseconds - stamp) > singleDay) {
        localStorage.removeItem(15)
    }
    else {
        $('#3pm').append(task)
    }

}

enteredTask = localStorage.getItem(16)
if (enteredTask) {
    parsedItem = JSON.parse(enteredTask)
    task = parsedItem.text
    stamp = parsedItem.timestamp
    if ((todayMiliseconds - stamp) > singleDay) {
        localStorage.removeItem(16)
    }
    else {
        $('#4pm').append(task)
    }

}

enteredTask = localStorage.getItem(17)
if (enteredTask) {
    parsedItem = JSON.parse(enteredTask)
    task = parsedItem.text
    stamp = parsedItem.timestamp
    if ((todayMiliseconds - stamp) > singleDay) {
        localStorage.removeItem(17)
    }
    else {
        $('#5pm').append(task)
    }

}

// now conditional statement to change the block colors
// only two needed for each html id since green is standard for each
// if in the past
if (currentHour > 9) {
    $('#9am').toggleClass('grey')
}
// if current
else if (currentHour === 9) {
    $('#9am').toggleClass('current')
}

if (currentHour > 10) {
    $('#10am').toggleClass('grey')
}
// if current
else if (currentHour === 10) {
    $('#10am').toggleClass('current')
}

if (currentHour > 11) {
    $('#11am').toggleClass('grey')
}
// if current
else if (currentHour === 11) {
    $('#11am').toggleClass('current')
}

if (currentHour > 12) {
    $('#noon').toggleClass('grey')
}
// if current
else if (currentHour === 12) {
    $('#noon').toggleClass('current')
}

if (currentHour > 13) {
    $('#1pm').toggleClass('grey')
}
// if current
else if (currentHour === 13) {
    $('#1pm').toggleClass('current')
}

if (currentHour > 14) {
    $('#2pm').toggleClass('grey')
}
// if current
else if (currentHour === 14) {
    $('#2pm').toggleClass('current')
}

if (currentHour > 15) {
    $('#3pm').toggleClass('grey')
}
// if current
else if (currentHour === 15) {
    $('#3pm').toggleClass('current')
}

if (currentHour > 16) {
    $('#4pm').toggleClass('grey')
}
// if current
else if (currentHour === 16) {
    $('#4pm').toggleClass('current')
}

if (currentHour > 17) {
    $('#5pm').toggleClass('grey')
}
// if current
else if (currentHour === 17) {
    $('#5pm').toggleClass('current')
}

// now we need to apply the text in the textbox to the local storage 
$('.submit').on('click', function(e) {
    e.preventDefault();
    // setting to col-8 since it is the only consistant in the class attribute
    newTask = $(this).siblings(".col-8").val();
    // now put the text of the new task in a n object with a timestamp
    var newTaskObject = {
        text: newTask,
        timestamp: new Date().getTime()
    }
    timeValue = $(this).siblings(".time").attr('id');
    // now apply to local storage for each submition
    localStorage.setItem(timeValue, JSON.stringify(newTaskObject));
})


// now lets grab items from the local storage and append them to the page.





