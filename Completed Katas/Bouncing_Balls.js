/*
A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?)

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
*/

/*
Removes the edge cases if the height is a non-positive number, bounce is less than or equal to 0, bounce is greater than or equal to 1, or
the window height is greater than height.
*/
function bouncingBall(h, bounce, window) {
    if(h <= 0 || bounce <= 0 || bounce >= 1 || window > h) {
        return -1;
    }

    // Starts the count at 1 for when the ball first falls.
    let count = 1;
    while(h > window) {
        h *= bounce;

        // Increments count by 2 for when the ball bounces up and falls down.
        count += 2;
        console.log("The count: " + count);
        console.log("The h: " + h);
    }
    return count -= 2;
}

console.log(bouncingBall(3.0, 0.66, 1.5)); 
// 3

console.log(bouncingBall(30.0, 0.66, 1.5)); 
// 15

console.log(bouncingBall(0, 0.66, 1.5)); 
// -1

console.log(bouncingBall(30.0, 1, 1.5)); 
// -1

console.log(bouncingBall(30.0, 0.66, 31.0)); 
// -1