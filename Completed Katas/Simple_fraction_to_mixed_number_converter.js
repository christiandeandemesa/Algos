/*
Given a string representing a simple fraction x/y, your function must return a string representing the corresponding 
mixed fraction in the following format:

[sign]a b/c where a is integer part and b/c is irreducible proper fraction. There must be exactly one space between a and 
b/c. Provide [sign] only if negative (and non zero) and only at the beginning of the number (both integer part and
fractional part must be provided absolute).

If the x/y equals the integer part, return integer part only. If integer part is zero, return the irreducible proper
fraction only. If both of these cases, the resulting string must not contain any spaces.

Division by zero should raise an error (preferably, the standard zero division error of your language).
*/

// Refer to the README.md for explanation on functions.
function mixedFraction(s) {

    // Seperates the dividend into the number before the slash, and the divisor into the number after the slash.
    s = s.split('/');
    let dividend = Number(s[0]);
    let divisor = Number(s[1]);

    // Removes the edge case of dividing by 0.
    if(divisor === 0) {
        return "ZeroDivisionError";
    }

    // Returns an integer.
    if(dividend % divisor === 0) {
        return String(dividend / divisor);
    }

    // Returns a mixed number.
    else {
        let integer = (dividend / divisor) | 0;
        let numerator = dividend % divisor;
        let denominator = Number(divisor);

        // Finds the GCF (greatest common factor) to simplify the fraction.
        console.log(numerator + ' ' + denominator);
        const findGCF = (a, b) => b === 0 ? a : findGCF(b, a % b);
        let GCF = findGCF(numerator, denominator);
        console.log('The GCF is: ' + GCF);

        // Converts the simpleNum (numerator in the mixed number) to be positive.
        let simpleNum = numerator/GCF > 0 ? numerator/GCF : (numerator/GCF) * -1;
        let simpleDen = denominator/GCF;

        // Returns only a fraction.
        if(integer === 0) {
            return `${simpleNum}/${simpleDen}`;
        }

        // Returns an integer with a fraction.
        else {
            return `${integer} ${simpleNum}/${simpleDen}`;
        }
    }
}

console.log(mixedFraction('42/9'));
// '4 2/3'

console.log(mixedFraction('6/3'));
// '2'

console.log(mixedFraction('1/1'));
// '1'

console.log(mixedFraction('11/11'));
// '1'

console.log(mixedFraction('4/6'));
// '2/3'

console.log(mixedFraction('0/18891'));
// '0'

console.log(mixedFraction('-10/7'));
// '-1 3/7'

console.log(mixedFraction('-22/-7'));
// '3 1/7'

console.log(mixedFraction('0/0'));
// 'ZeroDivisonError'

console.log(mixedFraction('3/0'));
// 'ZeroDivisonError'