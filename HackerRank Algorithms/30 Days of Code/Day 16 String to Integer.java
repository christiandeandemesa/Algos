/*
Read a string, S, and print its integer value; if S cannot be converted to an integer, print Bad String.
*/

public static void main(String[] args) throws IOException {
    Scanner in = new Scanner(System.in);
    String S = in.nextLine();

    // Try keyword will attempt to run the code in it.
    try {
        int i = Integer.parseInt(S);
        System.out.println(i);
    }

    // If the code within the try keyword fails, then the code within the catch keyword runs instead.
    catch(Exception e) {
        System.out.println("Bad String");
    }
}