/*
Given a base-10 integer, n, convert it to binary (base-2). Then find and print the base-10 integer denoting the maximum number of 
consecutive 1's in n's binary representation. When working with different bases, it is common to show the base as a subscript.
*/

public static void main(String[] args) {
    Scanner in = new Scanner(System.in);

    // n is the number given from HackerRank's input.
    int n = in.nextInt();

    /*
    remainder is going to be the remainder of every instance of n divided by 2 because the binary version of a number is just a string of 
    their remainders from dividing that number by 2 until 1 or 0 remains.

    For example:
    2 % 2 = 0
    If 0 is left then we give it a remainder of 1.
    So, 2 in binary is 10.

    3 % 2 = 1
    1 % 2 = 1
    So, 3 in binary is 11.

    4 % 2 = 0
    2 % 2 = 0
    0 % 2 = 1
    So, 4 in binary is 100.
    */
    int remainder = 0;

    // ones is going to be the current number of consecutive ones.
    int ones = 0;

    // max_ones is going to be the answer we are looking for.
    int max_ones = 0;
    while(n > 0) {
        remainder = n % 2;
        n /= 2;

        // If the remainder is 1, we increment ones and possibly change max_ones.
        if(remainder == 1) {
            ones++;
            if(ones >= max_ones) max_ones = ones; 
        }

        // If the remainder is 0, we set ones to 0.
        else ones = 0;
    }
    System.out.println(max_ones);
    in.close();
}
