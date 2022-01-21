/*
Complete the Difference class by writing the following:

A class constructor that takes an array of integers as a parameter and saves it to the elements instance variable.
A computeDifference method that finds the maximum absolute difference between any 2 numbers in elements and stores it in the 
maximumDifference instance variable.
*/

// Class constructor where int[] nums is an array of integers.
public Difference(int[] nums) {

    // Saves the parameter in elements.
    elements = nums;
}

// computeDifference method.
public void computeDifference() {

    // Sorts the elements from lowest to highest.
    Arrays.sort(elements);

    // The maximum difference is the highest number (last index) minus the lowest number (first index).
    maximumDifference = elements[elements.length - 1] - elements[0];
}