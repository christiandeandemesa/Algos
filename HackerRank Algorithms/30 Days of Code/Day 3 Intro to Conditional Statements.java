/*
Given an integer, n, perform the following conditional actions:

If N is odd, print Weird.
If N is even and in the inclusive range of 2 to 5, print Not Weird.
If N is even and in the inclusive range of 6 to 20, print Weird.
If N is even and greater than 20, print Not Weird.
*/

public static void main(String[] args) throws IOException {
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    int N = Integer.parseInt(bufferedReader.readLine().trim());

    // Declares an empty string.
    String result = "";

    // Modulus operator (%) returns the remainder between two numbers, so if N is odd run the code beneath it.
    if(N % 2 == 1) {
        result = "Weird";
    }

    // If N is even (i.e. not odd)...
    else {

        // and N is 2 - 5, run the code beneath it.
        if(N > 1 && N < 6) {
            result = "Not Weird";
        }

        // and N is 6 - 20, run the code beneath it.
        else if(N > 5 && N < 21) {
            result = "Weird";
        }

        // and N is greater than 20, run the code beneath it.
        else if(N > 20) {
            result = "Not Weird";
        }
    }
    System.out.println(result);
    
    bufferedReader.close();
}