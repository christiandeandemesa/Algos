/*
We want to create nine buttons enclosed in a div, laid out so they form a 3x3 grid. Each button has a distinct label from 1 to 9, and the 
labels on the outer buttons must rotate in the clockwise direction each time we click the middle button.

Complete the code so that it satisfies the following criteria:

1. The initial layout looks like this:
|1|2|3|
|4|5|6|
|7|8|9|

2. Each element in the document must have an id, specified below:

2a. The button container div's id must be btns.
2b. The initial innerHTML labels must have the following button ids:
|innerHTML| id |
|    1    |btn1|
|    2    |btn2|
|    3    |btn3|
|    4    |btn4|
|    5    |btn5|
|    6    |btn6|
|    7    |btn7|
|    8    |btn8|
|    9    |btn9|

3. The document's elements must have the following styles:

3a. The width of btns is 75%, relative to the document body's width.
3b. Each button (i.e., btn1 through btn9) satisfies the following:

3i. The width is 30%, relative to its container width.
3ii. The height is 48px.
3iii. The font-size is 24px.

4. Each time btn5 is clicked, the innerHTML text on the grid's outer buttons (i.e., bt1, btn2, btn3, btn4, btn6, btn7, btn8, btn9) must rotate in the clockwise direction. Do not update the button id's.
*/

document.addEventListener('DOMContentLoaded', () => {
    const button1 = document.getElementById('btn1');
    const button2 = document.getElementById('btn2');
    const button3 = document.getElementById('btn3');
    const button4 = document.getElementById('btn4');
    const button5 = document.getElementById('btn5');
    const button6 = document.getElementById('btn6');
    const button7 = document.getElementById('btn7');
    const button8 = document.getElementById('btn8');
    const button9 = document.getElementById('btn9');
    button5.addEventListener('click', () => {

        // Creates a temp variable to hold button4's text because it will be replaced first.
        let temp = button4.innerText;

        // Note the order below is important to get all the button text to rotate correctly without duplicating or deleting numbers.
        button4.innerText = button7.innerText;
        button7.innerText = button8.innerText;
        button8.innerText = button9.innerText;
        button9.innerText = button6.innerText;
        button6.innerText = button3.innerText;
        button3.innerText = button2.innerText;
        button2.innerText = button1.innerText;
        button1.innerText = temp;
    })
})