/*
Given arrival and departure times of all trains that reach a railway station. Find the minimum number of platforms required for the railway station so that no train is 
kept waiting.
Consider that all the trains arrive on the same day and leave on the same day. Arrival and departure time can never be the same for a train but we can have arrival time 
of one train equal to departure time of the other. At any given instance of time, same platform can not be used for both departure of a train and arrival of another 
train. In such cases, we need different platforms.
*/

function findPlatform(arr, dep, n) {

    // Sort arrival and departure arrays from lowest to highest numerically.
    arr = [...arr].sort((a, b) => a - b);
    dep = [...dep].sort((a, b) => a - b);

    /*
    stations is the current number of stations needed for all the trains that have arrived, but not departed
    maxStations is the maximum number of stations needed for all the trains that have arrived, but not departed.
    i represents arrivals, and starts at 1 instead of 0 because we already accounted for the first arrival by having stations and maxStations start at 1.
    j represent departures.
    */
    let stations = 1;
    let maxStations = 1;
    let i = 1;
    let j = 0;

    // While both i and j are less than the length of their respective arrays...
    while (i < n && j < n) {

        // If the arrival at i's index comes before the departure at j's index, increment stations and move i to the next index.
        if (arr[i] <= dep[j]) {
            stations++;
            i++;
        }

        // If the arrival at i's index comes after the departure at j's index, decrement stations and move j to the next index.
        else if (arr[i] > dep[j]) {
            stations--;
            j++;
        }

        // If the number of stations filled is greater than the max number of stations needed, update the max number.
        if (stations > maxStations)
            maxStations = stations;
    }
    return maxStations;
}

console.log(findPlatform([0900, 0940, 0950, 1100, 1500, 1800], [0910, 1200, 1120, 1130, 1900, 2000], 6));
// 3