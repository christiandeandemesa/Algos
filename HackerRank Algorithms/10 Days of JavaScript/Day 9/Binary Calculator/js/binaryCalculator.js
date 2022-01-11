/*
Implement a simple calculator that performs the following operations on binary numbers: addition, subtraction, multiplication, and 
division. Note that division operation must be integer division only; for example, 1001/100 = 10, 1110/101 = 10, and 101/1 = 101.

1. The calculator's initial state must look like this:
|               |
| 0 | 1 | C | = |
| + | - | * | / |

2. Each element in the document must have an id, specified below:
innerHTML	id	    Description/Behavior
            res	    Contains the result of button presses.
            btns	A button container that displays all eight calculator buttons.
0	        btn0	A button expressing binary digit .
1	        btn1	A button expressing binary digit .
C	        btnClr	A button to clear the contents of .
=	        btnEql	A button to evaluate the contents of the expression in .
+	        btnSum	A button for the addition operation.
-	        btnSub	A button for the subtraction operation.
*	        btnMul	A button for the multiplication operation.
/	        btnDiv	A button for the integer division operation.

3. The document's elements must have the following styles:
3a. body has a width of 33%.
3b. res has a background-color of lightgray, a border that is solid, a height of 48px, and a font-size of 20px.
3c. btn0 and btn1 have a background-color of lightgreen and a color of brown.
3d. btnClr and btnEql have a background-color of darkgreen and a color of white.
3e. btnSum, btnSub, btnMul, and btnDiv have a background-color of black, a color of red.
3f. All the buttons in btns have a width of 25%, a height of 36px, a font-size of 18px, margin of 0px, and float value left.
*/

const res = document.getElementById("res");

/*
This function adds the number to the "screen" (i.e. the text within the div with id="res").
Notice how the click event handler was moved to binaryCalculator.html.
*/
function number(num) {res.innerHTML += num;}

/*
This function "clears" the "screen" by setting it to an empty string.
Notice you cannot name a function clear() because it will not run due to another Document.clear() method already existing.
*/
function clearRes() {res.innerHTML = "";}

// This function adds the operator to the "screen".
function operator(op) {

    // The if statement stops more than one operator from existing in the "screen" simultaneously to simplify how the equal function works.
    if(res.innerHTML.includes("+", "-", "*", "/")) console.log('One operator only!');
    else res.innerHTML += ` ${op} `;
}

// This function performs the action depending on what the "screen" displays.
function equal() {

    // Turns the string into an array of strings (e.g. if res.innerHTML = "1 + 0", then equation = ["1", "+", "0"]).
    const equation = res.innerHTML.split(' ');

    /*
    The if statement runs if the array length is not equal to three, or the third string in the array is empty (e.g. if res.innerHTML = 
    "1 + ", then equation = ["1", "+", ""]).
    */
    if(equation.length !== 3 || equation[2] === '') {
        console.log("Include two operands and an operator!");
    }

    // These if and else if statements run a specific action for each operator.
    if(equation[1] === '+') res.innerHTML = Number(equation[0]) + Number(equation[2]);
    else if(equation[1] === '-') res.innerHTML = Number(equation[0]) - Number(equation[2]);
    else if(equation[1] === '*') res.innerHTML = Number(equation[0]) * Number(equation[2]);

    // Used Math.floor to get whole integers when dividing.
    else if(equation[1] === '/') res.innerHTML = Math.floor(Number(equation[0]) / Number(equation[2]));

    // Used if the if statement on line 64 runs to avoid getting NaN.
    else res.innerHTML = equation.join();
}