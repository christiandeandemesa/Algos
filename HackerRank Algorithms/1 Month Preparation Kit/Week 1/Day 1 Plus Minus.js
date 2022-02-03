/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each 
fraction on a new line with 6 places after the decimal.
*/

function plusMinus(arr) {

    // Instantiates three different counts to keep track of the number of zeroes, positive, and negative numbers.
    let posCount = 0;
    let negCount = 0;
    let zeroCount = 0;

    // For loops through every element in the array.
    for(let i = 0; i < arr.length; i++) {

        // Increases the respective count based on if the number at the index is a zero, positive, or negative number.
        if(arr[i] > 0) posCount++;
        else if(arr[i] < 0) negCount++;
        else zeroCount++;
    }

    // total is the number of elements in the array.
    let total = arr.length;

    // Instantiates a ratio by dividing the respective count by the total, and fixing it to six decimal places.
    const posRatio = (posCount / total).toFixed(6);
    const negRatio = (negCount / total).toFixed(6);
    const zeroRatio = (zeroCount / total).toFixed(6);

    // \n creates a new line between the text, and uses string interpolation.
    console.log(`Positive ratio: ${posRatio}\nNegative ratio: ${negRatio}\nZero ratio: ${zeroRatio}`);
}

plusMinus([1, 1, 0, -1, -1]);
/*
Positive ratio: 0.400000
Negative ratio: 0.400000
Zero ratio: 0.200000
*/