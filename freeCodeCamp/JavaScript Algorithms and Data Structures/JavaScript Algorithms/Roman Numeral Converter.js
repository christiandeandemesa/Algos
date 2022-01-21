function convertToRoman(num) {
    num = Number(num);

    // Removes the edge case of the passed argument not being a whole number (e.g. strings or floats).
    if (typeof num !== 'number' || !Number.isInteger(num))
        return 'Input is not a whole number';

    // Object to hold the Roman numerals as a key, and their Arabic numeral counterpart as their value.
    const romanNum = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    let result = '';

    // for...in statement to iterate over every Roman numeral in the object.
    for(key in romanNum) {

        // repeatCounter keeps track of how many times each key is found.
        const repeatCounter = Math.floor(num / romanNum[key]);

        /*
        If the repeatCounter for a specific key is greater than 0, .repeat() repeats the Roman numeral (key) a number of times 
        (repeatCounter).
        */
        if(repeatCounter > 0) result += key.repeat(repeatCounter);

        // num is now set to the remainder of itself divided by the value (Arabic numeral) of the current key (Roman Numeral).
        num %= romanNum[key];
        if(num === 0) return result;
    }
    return result;
}

console.log(convertToRoman('1'));
// I
console.log(convertToRoman(3999));
// MMMCMXCIX
console.log(convertToRoman('three'));
// 'Input is not a whole number'