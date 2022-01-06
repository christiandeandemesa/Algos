/*
Given a date string, dateString, in the format MM/DD/YYYY, find and return the day name for that date. Each day name must be one of the 
following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example, the day name for the date 12/07/2016 is 
Wednesday.
*/

function getDayName(dateString) {

    // Created an array to hold all the date names indexed in order.
    let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    /*
    You can create a date object using new Date(), and read https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
    for what you can pass in the parentheses.

    The getDay() method returns a number based on the day of the date object where Sunday is 0, and Saturday is 6.

    Could rewrite the below code as such:

    let date = new Date(dateString);
    let dayNum = date.getDay();
    return dayName = dayNames[dayNum];
    */
    return dayName = dayNames[new Date(dateString).getDay()];
}

// Notice that the dates below are written as a string. That is necessary to get the correct date object for this specific format.
console.log(getDayName('10/11/2009'));
// Sunday

console.log(getDayName('11/10/2010'));
// Wednesday