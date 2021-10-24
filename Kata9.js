/* The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO. */

function tickets(peopleInLine){
    var bill25 = 0;
    var bill50 = 0;
    var bill100 = 0;
    for(var i = 0; i < peopleInLine.length; i++){
        if(peopleInLine[i] === 25){
            bill25 += 1;
        }
        if(peopleInLine[i] === 50){
            if(bill25 >= 1){
                bill25 -= 1;
                bill50 += 1;
            } 
            else {
                return "NO";
            }
        }
        if(peopleInLine[i] === 100){
            if(bill25 >= 1 && bill50 >= 1){
                bill25 -= 1;
                bill50 -= 1;
                bill100 += 1;
            }
            else if(bill25 >= 3){
                bill25 -= 3;
                bill100 += 1;
            }
            else{
                return "NO";
            }
        }
    }
    return "YES";
}

console.log(tickets([25, 25, 50]));
console.log(tickets([25, 100]));
console.log(tickets([25, 25, 50, 50, 100]));
console.log([[25, 25, 25, 25, 50, 100, 50]]);