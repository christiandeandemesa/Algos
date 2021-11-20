/*
Your task is to write a function which returns the sum of following series upto nth term(parameter).

0 --> 0 --> "0.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

// Refer to the README.md for explanation on functions.
function SeriesSum(n){
    let str = "";
    let num = 0;

    // Returns 0.00.
    if(n === 0){
        return str += num.toFixed(2);
    }

    // Increments the num by the series of numbers.
    for(let i = 0; i < n; i++){
        let divisor = 1 + (3 * i);
        let series = 1/divisor;
        num += series;
    }

    // Converts the float to the hundreth place as a string.
    str += num.toFixed(2);
    return str;
}

console.log(SeriesSum(0));
// 0.00

console.log(SeriesSum(1));
// 1.00

console.log(SeriesSum(2));
// 1.25

console.log(SeriesSum(3));
// 1.39

console.log(SeriesSum(4));
//1.49

console.log(SeriesSum(5));
//1.57