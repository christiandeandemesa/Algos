/*
Your company needs a function that meets the following requirements:

For a given array of n integers, the function returns the index of the element with the minimum value in the array. If there is more than 
one element with the minimum value, it returns the smallest one.
If an empty array is passed to the function, it raises an exception. A colleague has written this method. The implementation is listed 
below as the minimum_index method.

Complete the following methods.

In the class TestDataEmptyArray:
    get_array() returns an empty array
In the class TestDataUniqueValues:
    get_array() returns an array of size at least 2 with all unique elements
    get_expected_result() returns the expected minimum value index for this array
In the class TestDataExactlyTwoDifferentMinimums:
    get_array() returns an array where the minimum value occurs at exactly 2 indices
    get_expected_result() returns the expected index
*/

public static int minimum_index(int[] seq) {
    if (seq.length == 0) {
        throw new IllegalArgumentException("Cannot get the minimum value index from an empty sequence");
    }
    int min_idx = 0;
    for (int i = 1; i < seq.length; ++i) {
        if (seq[i] < seq[min_idx]) {
            min_idx = i;
        }
    }
    return min_idx;
}

// All of the below are nested classes and optionally made them static classes.
static class TestDataEmptyArray {

    // Method returns an empty array.
    public static int[] get_array() {
        int arr[] = {};
        return arr;
    }
}

static class TestDataUniqueValues {

    // Method returns an array with two unique elements.
    public static int[] get_array() {
        int arr[] = {0, 1};
        return arr;
    }

    // Hard-coded return 0 since this class can only generates one array.
    public static int get_expected_result() {
        return 0;
    }
}

static class TestDataExactlyTwoDifferentMinimums {

    // Method returns an array where two elements are the minimum indices.
    public static int[] get_array() {
        int arr[] = {0, 0};
        return arr;
    }

    // Hard-coded return 0 since this class only generates one array. Could have also put return 1 instead.
    public static int get_expected_result() {
        return 0;
    }
}