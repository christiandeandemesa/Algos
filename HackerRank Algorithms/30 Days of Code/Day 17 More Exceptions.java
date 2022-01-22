/*
Write a Calculator class with a single method: int power(int,int). The power method takes two integers, n and p, as parameters and returns 
the integer result of n ** p. If either n or p is negative, then the method must throw an exception with the message: n and p should be 
non-negative.
*/

// This is our class.
class Calculator {

    // This method returns an int, is named power, and can throw an exception.
    public int power(int n, int p) throws Exception {
        if(n < 0 || p < 0) {

            // Throws a new exception with the string given in parentheses.
            throw new Exception("n and p should be non-negative");
        }

        // Since Math.pow() returns a double, we have to recast it as an int.
        return (int)Math.pow(n, p);
    }
}