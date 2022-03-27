/*
Given a string in roman no format (s)  your task is to convert it to an integer . Various symbols and their values are given below.

I 1
V 5
X 10
L 50
C 100
D 500
M 1000
*/

function romanToDecimal(str) {

    // arr is an array where each element is a Roman numeral in str.
    let arr = [...str];

    // For loop through every index in arr.
    for(let i = 0; i < arr.length; i++) {

        // Uses a switch statement on the Roman numeral at the current index to replace it with its decimal equivalent.
        switch(arr[i]) {
            case 'I':
                arr[i] = 1;
                break;
            case 'V':
                arr[i] = 5;
                break;
            case 'X':
                arr[i] = 10;
                break;
            case 'L':
                arr[i] = 50;
                break;
            case 'C':
                arr[i] = 100;
                break;
            case 'D':
                arr[i] = 500;
                break;
            case 'M':
                arr[i] = 1000;
                break;
        }
    }

    // decimal will hold the final decimal value of the given Roman numerals.
    let decimal = 0;

    // For loop through every index in arr.
    for(let i = 0; i < arr.length; i++) {

        // If the decimal at the current index is less than the decimal at the next index, subtract it from our decimal variable (e.g. ['I', 'V'] = ['1', '5'] = 4).
        if(arr[i] < arr[i + 1]) decimal -= arr[i];
        
        // If the decimal at the current index is greater than or equal to the decimal at the next index, add it to our decimal variable.
        else decimal += arr[i];
    }
    return decimal;
}

console.log(romanToDecimal('V'));
// 5
console.log(romanToDecimal('III'));
// 3
console.log(romanToDecimal('IV'));
// 4