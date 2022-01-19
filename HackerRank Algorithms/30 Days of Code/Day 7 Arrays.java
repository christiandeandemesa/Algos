// Given an array, A, of N integers, print N's elements in reverse order as a single line of space-separated numbers.

public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);

    // N is the number given by HackerRank.
    int N = scan.nextInt();

    // Creates a new array ([]) to hold integers (int) with the name arr, and the array's size is given by N.
    int[] arr = new int[N];

    // This for loop adds integers from HackerRank to the array.
    for(int i = 0; i < N; i++) {

        /*
        arr[i] is the index, and scan.nextInt() is the element at that index.
        So, if 1 2 3 is given by HackerRank, then arr = [1, 2, 3].
        */
        arr[i] = scan.nextInt();
    }

    // Closes the Scanner.
    scan.close();

    // This for loop prints all of the elements in the array in reverse order.
    for(int i = N - 1; i >= 0; i--) {
        System.out.print(arr[i] + " ");
    }
}