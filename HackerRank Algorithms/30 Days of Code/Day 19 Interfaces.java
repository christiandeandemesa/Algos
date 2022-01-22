/*
The AdvancedArithmetic interface and the method declaration for the abstract divisorSum(n) method are provided for you in HackerRank.

Complete the implementation of Calculator class, which implements the AdvancedArithmetic interface. The implementation for the 
divisorSum(n) method must return the sum of all divisors of n.
*/

class Calculator implements AdvancedArithmetic {
    public int divisorSum(int n) {

        // The only divisor of 1 is 1.
        if(n == 1) return n;
        int half = n / 2;

        // Sum is set to n because any number is always divisible by itself.
        int sum = n;

        /*
        do will always run the code even if the while condition fails, then as long as the while conditon is met, the code within the do loop 
        runs again.
        */
        do {

            // The second largest number any number is divisible by is half that number. (e.g. 20 is divisible by 10).
            if(n % half == 0) {
                sum += half;
            }
        }

        // Decrements half first then does the comparison.
        while(half-- > 1);
        return sum;
    }
}