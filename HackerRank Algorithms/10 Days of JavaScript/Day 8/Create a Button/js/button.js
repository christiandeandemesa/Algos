/*
Complete the code so that it creates a clickable button satisfying the following properties:

1. The button's id is btn.
2. The button's initial text label is 0. After each click, the button must increment by 1. Recall that the button's text label is the JS 
object's innerHTML property.
3. The button has the following style properties:

3a. A width of 96px.
3b. A height of 48px.
3c. The font-size attribute is 24px.
*/

/*
document is a document object that represents the HTML document.
The addEventListener() method attaches an event handler (i.e. JavaScript code that fires some code when something occurs on an HTML 
element) to the given element (e.g. document).
The DOMContentLoaded event fires when the HTML document is loaded and parsed.
*/
document.addEventListener('DOMContentLoaded', () => {

    // the getElementById method returns an element object relative to the HTML element with the given id (e.g. btn).
    const button = document.getElementById('btn');

    /*
    The click event fires when the element object is clicked.
    e is an argument in the arrow function that stands for event.
    */
    button.addEventListener('click', e => {

        /*
        The Number() method converts the value given in the parentheses into a number if possible.
        The currentTarget property refers to the HTML element whose event listener triggered the event (e.g. <button>).
        The innerText property refers to the text of whatever is chained before it (e.g. e.currentTarget.innerText is initially 0 from 
        <button id="btn">0</button>).
        Creates a count variable to equal the number/text on the button plus one.
        */
        let count = Number(e.currentTarget.innerText) + 1;

        // Changes the number/text on the button to be count's value.
        e.currentTarget.innerText = count;
    });
});