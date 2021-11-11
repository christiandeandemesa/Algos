/*
A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st 
character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books 
of this code in stock.

For example an extract of a stocklist could be:

L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] 

You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

M = ["A", "B", "C", "W"]

and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):

(A : 20) - (B : 114) - (C : 50) - (W : 0)
where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 
corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

If L or M are empty, return string is "".
*/

function stockList(listOfArt, listOfCat) {

    /*
    Ternary operator is written as follows (condition ? run this expression if true : run this expression if false).

    If listOfArt or listOfCat is an empty array, it returns an empty string ("").

    .map() creates a new array by applying a given function inside the parentheses onto every element in a given array (e.g. listOfCat).
    */
    return (!listOfArt.length || !listOfCat.length) ? "" : listOfCat.map(cat => {

        /*
        .filter() creates a new array with all the elements from the given array (e.g. listOfArt) that pass the given test inside the 
        parentheses.

        .charAt() returns a new string at the given element (e.g. 0) from the given string (e.g. el).

        needs is going to be every element in the listOfArt array that starts with the given letter from the listOfCat array. If 
        listOfArt is ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"] and listOfCat is ["A", "B"], then  the second cat is 'B' and 
        needs is 'BKWR 250,BTSQ 890'.
        */
        let needs = listOfArt.filter(el => el.charAt(0) === cat);

        /*
        .reduce() returns a value by applying the given function in the parentheses on every element in the given array (e.g. needs).
        
        Number() converts what is in the parentheses into the number data type.

        .split(' ') divides a given string (e.g. b) into an array of substrings.

        count is going to be the total number from needs. If needs is 'BKWR 250,BTSQ 890', then count is 1140 (250 + 890).
        */
        let count = needs.reduce((a, b) => {
            return Number(a) + Number(b.split(" ")[1]);
        }, 0);
        console.log(count);

        /*
        Uses string interpolation to add the letter (e.g. cat) and number (e.g. count). For example, ( B : 1140 ).
        */
        return `( ${cat} : ${count} )`;

    // .join(' - ') joins strings with a ' - ' between them.
    }).join(" - ");
}

a = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
b = ["A", "B"];
console.log(stockList(a, b)); // "(A : 200) - (B : 1140)"

c = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
d = ["A", "B", "C", "W"];
console.log(stockList(c, d)); // "(A : 0) - (B : 114) - (C : 70) - (W : 0)"

e = [];
f = ["A", "B"];
console.log(stockList(e, f)); // ""

g = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
h = [];
console.log(stockList(g, h));