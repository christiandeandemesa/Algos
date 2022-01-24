/*
Given an array, a, of size n distinct elements, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, 
print the following 3 lines:

1. Array is sorted in numSwaps swaps where numSwaps is the number of swaps that took place.
2. First Element: where firstElement is the first element in the sorted array.
3. Last Element: where lastElement is the last element in the sorted array.
*/

public static void main(String[] args) throws IOException {
    Scanner in = new Scanner(System.in);
    int n = in.nextInt();
    int[] a = new int[n];
    for (int i = 0; i < n; i++) {
        a[i] = in.nextInt();
    }
    int numSwaps = bubbleSort(a);
    System.out.println("Array is sorted in " + numSwaps + " swaps.");
    System.out.println("First Element: " + a[0]);
    System.out.println("Last Element: " + a[n - 1]);
    in.close();
}
public static int bubbleSort(int[] arr) {

    // Initializes the number of swaps needed to bubble sort the array.
    int numSwaps = 0;

    // The first for loop is in charge of forcing the nested for loop to go through the array multiple times.
    for(int i = 0; i < arr.length; i++) {

        // The second for loop is in charge of comparing the current index to the next index, and swapping them if necessary.
        for(int j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                numSwaps++;
            }
        }
    }
    return numSwaps;
}