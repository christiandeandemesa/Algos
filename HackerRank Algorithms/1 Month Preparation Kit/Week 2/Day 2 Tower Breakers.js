/*

Two players are playing a game of Tower Breakers! Player 1 always moves first, and both players always play optimally.The rules of the 
game are as follows:

    Initially there are n towers.
    Each tower is of height m.
    The players move in alternating turns.
    In each turn, a player can choose a tower of height x and reduce its height to y, where 1 <= y < x and y evenly divides x.
    If the current player is unable to make a move, they lose the game.

    Given the values of n and m, determine which player will win. If the first player wins, return 1. Otherwise, return 2.
*/

function towerBreakers(n, m) {

    /*
    If there are even amount of towers, player 2 will always win, since the optimal move is to always reduce a tower to a hight of 1.
    So, if there are 2 towers of height 2, player 1 reduces the first tower to height 1 and player 2 reduces the second tower to height 1.
    Thus, player 2 wins since player 1 has no more moves.
    If the height of all the towers is 1, player 2 automatically wins because player 1 has no moves.
    */
    if(n % 2 === 0 || m === 1) return 2;

    // If there are an odd amount of towers, player 1 will always win for similar reasons stated above.
    else return 1;
}

console.log(towerBreakers(2, 6));
// 2