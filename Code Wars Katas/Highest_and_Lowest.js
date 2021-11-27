// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Refer to the README.md for explanation on functions.
function highAndLow(numbers) {
    let newNum = numbers.split(' ');
    let sortNum = newNum.sort(function(low, high) {
        return Number(low) - Number(high);
    })
    return sortNum[sortNum.length - 1] + " " + sortNum[0];
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
// 42 -9