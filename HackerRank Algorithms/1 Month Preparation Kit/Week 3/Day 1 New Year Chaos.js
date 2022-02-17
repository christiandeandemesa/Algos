/*
It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial 
position in the queue from 1 to n. Any person can bribe the person directly in front of them to swap positions, but they still wear their 
original sticker. One person can bribe at most two others.

Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed 
more than two people, print Too chaotic.
*/

function minimumBribes(q) {

    // bribes is the number of bribes, and chaos determines if any person bribed more than two people.
    let bribes = 0
    let chaos = false

    // For loop through each element starting at the last element.
    for (let i = q.length - 1; i >= 0; i--) {

        /*
        If the element at the current index minus the index where it should be is greater than 3, it means the element has moved to the 
        left more than twice.
        */
        if (q[i] - i > 3) chaos = true

        // For loop through to compare q[j] and q[i] and increment bribes accordingly.
        for (let j = q[i] - 2; j < i; j++) {
            if (q[j] > q[i]) bribes++
        }
    }

    // If chaos is true, then log this string.
    if(chaos) console.log("Too chaotic")

    // If chaos is false, then log this number.
    else console.log(bribes)
}

minimumBribes([1, 2, 3, 5, 4, 6, 7, 8]);
// 1
minimumBribes([4, 1, 2, 3]);
// 'Too chaotic'
minimumBribes([2, 1, 5, 3, 4]);
// 3
minimumBribes([2, 5, 1, 3, 4]);
// 'Too chaotic'
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
// 7