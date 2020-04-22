// first, create the body, we will need 24 sections to fill out a full day
    // create each section individually in html
    // assign each section its own id, but the same class
    // assign each section its corrisponding time (12am to 11:59pm)
    // give each hour some text area for user input, and a submit button to apply it to the page
    // use normal time for the visible sections
    // maybe add a scroll to each input section? 

// wright a script that
    // is able to grab the users local time(from the browser probably?)
    // changes the id of each box as hours pass
        // if time is > section time ---> change class to .grey
        // if time === section time (roughly) ---> change class to .red
        // if time < section time ---> class = .green (standard)
    // use military time for the script
    // use local time (probalby from browser) to grab the date and append it to the bottom of the header

// lets grab the time to use and update with the hour by hour schedule. 
// var date = new Date() ;
// var time = date.getHours() + ':' + date.getMinutes();
// console.log(time)
// // now grab the full date and time (includes time zone, why not?)
// var fullDate = Date($.now())
// console.log(fullDate)

// lets append fullDate to the bottom of the headder
var day = moment().format('dddd, MMMM Do YYYY, h:mm a');
$('#currentDay').append(day).value;
// now create a variable to take the current hour and make it an integer
var currentHour = parseInt(moment().format('H'))

// now conditional statement to change the block colors
// only two needed for each html id since green is standard for each
// if in the past
if (currentHour > 1) {
    $('#midnight').toggleClass('grey')
}
// if current
else if (currentHour === 0) {
    $('#midnight').toggleClass('current')
}

if (currentHour === 23) {
    $('#11pm').toggleClass('current')
}
