/*
Given a 6 x 6 2D Array, A:

[
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
]

We define an hourglass in A to be a subset of values with indices falling in this pattern in A's graphical representation:

a b c
  d
e f g

Calculate the hourglass sum for every hourglass in A, then print the maximum hourglass sum.
*/

public static void main(String[] args) {
    Scanner in = new Scanner(System.in);

    // Creates a two dimensional array where the first array can hold 6 sub-arrays, and each sub-array can hold 6 elements.
    int arr[][] = new int[6][6];

    // The nested for loops add the values into each sub-array from HackerRank's input.
    for(int i = 0; i < 6; i++){
        for(int j = 0; j < 6; j++){
            arr[i][j] = in.nextInt();
        }
    }

    // The maximum value from any given sub-array is 6 single-digit integers that are all -9.
    int max_val = -9 * 6;

    /*
    We have i < 4 because this will count down the sub-arrays vertically, and the top values (a b c) cannot exist in the sub-arrays at the 
    fourth or fifth index due to causing the middle (d) and/or bottom values (e f g) to be undefined.
    */
    for(int i = 0; i < 4; i++) {

        /*
        We have j < 4 because this will count across the elements in the sub-array horizontaly, and the left-most values (a e) cannot exist 
        at the fourth or fifth index due to causing the middle (b d f) and/or right-most elements (c g) to be undefined.
        */
        for(int j = 0; j < 4; j++) {

            // Adds the top values of the hourglass (a b c) to sum.
            int sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];

            // Adds the middle value of the hourglass (d) to sum.
            sum += arr[i + 1][j + 1];

            // Adds the bottom values of the hourglass (e f g) to sum.
            sum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

            // Changes max_val to reflect sum if sum is higher.
            if(sum > max_val) {
                max_val = sum;
            }
        }
    }
    System.out.println(max_val);
    in.close();
}