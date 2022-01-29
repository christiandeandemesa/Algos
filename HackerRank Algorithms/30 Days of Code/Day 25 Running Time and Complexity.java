/*
A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself. Given a number, n, determine and print 
whether it is Prime or Not prime.
*/

// The first method is used to print if each of the HackerRank inputs are prime or not.
public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int n = in.nextInt();
    for(int i = 0; i < n; i++) {

        /*
        Calls on the second method for each HackerRank input.
        If isPrime() returns true, that integer is prime.
        */
        if(isPrime(in.nextInt())) System.out.println("Prime");

        // If isPrime() returns false, that integer is not prime.
        else System.out.println("Not prime");
    }
    in.close();
}

// The second method checks if the given input is a prime number.
private static boolean isPrime(int num) {

    // If the integer is a 0, 1, or a negative integer, it cannot be prime.
    if(num <= 1) return false;

    // To check if a large integer is prime, see if the square root of that integer is divisible by any prime number less than it.
    for(int i = 2; i <= Math.sqrt(num); i++) {

        // If the integer is evenly divisible by any number other than itself, it cannot be prime.
        if(num % i == 0) return false;
    }

    // If the integer is only divisible by itself, it is prime.
    return true;
}