/*
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement 
the global count variable according to the card's value (see table). The function will then return a string with the current count and the 
string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) 
should be separated by a single space.

| Count Change |          Cards         |
|      +1      |      2, 3, 4, 5, 6     |
|       0      |         7, 8, 9        |
|      -1      | 10, 'J', 'Q', 'K', 'A' |
*/

function cc(card) {
    let count = 0;
    for(let i = 0; i < card.length; i++) {
        switch (card[i]) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                count += 1;
                break;
            case 10:
            case 'J':
            case 'Q':
            case 'K':
            case 'A':
                count -= 1;
                break;
        }
    }
    if(count >= 1) return count + ' Bet';
    else return count + ' Hold';
}

console.log(cc([2, 3, 4, 5, 6]));
// '5 Bet'
console.log(cc([7, 8, 9]));
// '0 Hold'
console.log(cc([10, 'J', 'Q', 'K', 'A']));
// '-5 Hold'
console.log(cc([3, 7, 'Q', 8, 'A']));
// '-1 Hold'
console.log(cc([2, 'J', 9, 2, 7]));
// '1 Bet'
console.log(cc([2, 2, 10]));
// '1 Bet'
console.log(cc([3, 2, 'A', 10, 'K']));
// '-1 Hold'