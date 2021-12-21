/*
Complete the isPositive function below. It has one integer parameter, a. If the value of a is positive, it must return the string YES. 
Otherwise, it must throw an Error according to the following rules:

If a is 0, throw an Error with message = Zero Error.
If a is negative, throw an Error with message = Negative Error.
*/

function isPositive(a) {
    try{

        // The throw statement lets you create a custom error.
        if(a === 0) throw 'Zero ';
        else if(a < 0) throw 'Negative ';
        else return 'YES';
    }

    // The variable error is where the custom error is saved, and the variable can be given any name but the convention is to use error.
    catch(error) {
        return error + 'Error';
    }
}

console.log(isPositive(1));
// 'YES'

console.log(isPositive(0));
// 'Zero Error'

console.log(isPositive(-1));
// 'Negative Error'