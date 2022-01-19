/*
Given a string, S, of length N that is indexed from 0 to N - 1, print its even-indexed and odd-indexed characters as 2 space-separated 
strings on a single line.
*/

public static void main(String[] args) {

    // Creates a new variable from the Scanner class to get the input from System.in in HackerRank;
    Scanner scan = new Scanner(System.in);

    // Creates an new variable to hold the integer given by the input.
    int N = scan.nextInt();

    // Moves to the next line in the input.
    scan.nextLine();
    for(int i = 0; i < N; i++) {
        String S = scan.nextLine();

        // This for loop prints every even character in the string (S).
        for(int j = 0; j < S.length(); j++) {
            if(j % 2 == 0) {

                // .charAt() returns the character from the string before it (S) at the index given (j).
                System.out.print(S.charAt(j));
            }
        }

        // Prints a space between the string of even characters, and string of odd characters.
        System.out.print(" ");

        // This for loop prints every odd character in string.
        for(int j = 0; j < S.length(); j++) {
            if(j % 2 == 1) {
                System.out.print(S.charAt(j));
            }
        }
        System.out.println();
    }
}