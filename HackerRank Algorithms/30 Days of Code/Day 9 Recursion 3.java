// Use recursion to find the factorial of a given number (e.g. 3! = 3 * 2 * 1 = 6).

public static int factorial(int n) {

    // The break case exists to stop a function from being called recursively an infinite number of times.
    if(n == 1) {
        return 1;
    }

    // This return statement returns the result by calling on its own function within itself.
    return n * factorial(n - 1);
    /*
    To illustrate the above:

    factorial(3) returns 3 * factorial(2).
    factorial(2) returns 2 * factorial(1).
    factorial(1) hits the break case and returns 1.
    So, factorial(3) returns 3 * 2 * 1;
    */
}