/*
	Submissions	Leaderboard	Discussions	Editorial
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
*/

function timeConversion(s) {

    // Removes the edge case of putting an hour greater 12.
    if(s[0] > 1) return 'Please enter a correct hour';
    else if(s[0] == 1 && s[1] > 2) return 'Pleae enter a correct hour';

    // Removes the edge case of putting a minute greater than 59.
    else if(s[3] > 5) return 'Please enter a correct minute';

    // Removes the edge case of putting a second greater than 59.
    else if(s[6] > 5) return 'Please enter a correct second';

    /*
    Array holds the conversion to milTime.
    For example, 1PM = 13, so 13 is at milTime[1].
    */
    const milTime = ['', 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

    // Converts 12PM to 12.
    if(s[8] === 'P' && s[0] == 1 && s[1] == 2) return s.slice(0, 8);

    // Converts 12AM to 0.
    else if(s[8] === 'A' && s[0] == 1 && s[1] == 2) return '00'.concat(s.slice(2, 8));

    // Converts 1PM - 11PM to its military time equivalent.
    else if(s[8] === 'P') {
        let hourTime = Number(s.slice(0, 2));
        hourTime = milTime[hourTime];
        return String(hourTime).concat(s.slice(2, 8));
    }

    // Converts 1AM - 11AM by removing AM.
    else return s.slice(0, 8);
}

console.log(timeConversion('12:01:00PM'));
// '12:01:00'
console.log(timeConversion('12:01:00AM'));
// '00:01:00'
console.log(timeConversion('01:01:00PM'));
// '13:01:00'
console.log(timeConversion('01:01:00AM'));
// '01:01:00'
console.log(timeConversion('22:01:00PM'));
// 'Please enter a correct hour'
console.log(timeConversion('19:01:00PM'));
// 'Please enter a correct hour'
console.log(timeConversion('12:61:00AM'));
// 'Please enter a correct minute'
console.log(timeConversion('12:01:60AM'));
// 'Please enter a correct second'