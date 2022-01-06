/*
We define S to be a sequence of distinct sequential integers from 1 to n; in other words, S = {1, 2, 3,..., n}. We want to know the 
maximum bitwise AND value of any two integers, a and b (where a < b), in sequence S that is also less than a given integer, k.

Complete the function in the editor so that given n and k, it returns the maximum a & b < k.
*/

/*
Numbers as we use them use a base-10 numeral system (10 digits comprised of 0 through 9), but we can also represent them using a base-2 
numeral system (2 digits comprised of 0 and 1). For example, the first five numbers in base-2 are 0, 1, 10 (i.e. 2), 11 (i.e. 3), and 100 
(i.e. 4).

We can find the base-2 version of a base-10 number by dividing it by 2 until we get 1/2 or 0/2, then lining up all of the remainders from
most recent to least recent. For example, 75/2 = 37 R1 (stands for remainder of 1), 37/2 = 18 R1, 18/2 = 9 R0, 9/2 = 4 R1, 4/2 = 2 R0, 2/2
= 0 R0, and 0/2 = 0 R1 (note that if you have 0/2, the remainder is 1 for the sake of the base-2 numeral system). So 75 in base-2 is
1001011.
*/
function getMaxLessThanK(n, k) {
    let max = 0;

    // Created a nested for loop to represent a and b, although standard convention would use i and j.
    for (let a = 1; a <= n; a++) {
        for (let b = a + 1; b <= n; b++) {

            /*
            The AND bitwise operator (&) takes the base-2 of both numbers, compares the digits in each place, and returns a number. It will 
            return 1 if both digits are 1, or 0 for any other combination. For example, if a = 1 = 01 and b = 2 = 10, then temp = 00 = 0.
            */
            let temp = a & b;

            // Changes max to be the greatest possible temp that is less than k.
            if (temp > max & temp < k) {
                max = temp;
            }
        }
    }
    return max;
}

console.log(getMaxLessThanK(5, 2));
// 1

console.log(getMaxLessThanK(8, 5));
// 4

console.log(getMaxLessThanK(2, 2));
// 0

/*
Note there are other bitwise operators, such as:

The OR bitwise operator (|) returns 0 if both digits are 0, 1 for any other combination.

The XOR bitwise operator (^) returns 0 if both digits are the same (i.e. both 0 or both 1), or 1 if both digits are different.

The NOT bitwise operator (~) returns 0 if the digit is 1, or 1 if the digit is 0.
*/