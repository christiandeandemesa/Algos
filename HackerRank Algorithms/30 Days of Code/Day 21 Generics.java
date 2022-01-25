// Write a single generic function named printArray; this function must take an array of generic elements as a parameter.

// <G> is a generic type parameter (e.g. int or String).
public <G> void printArray(G[] arr) {

    // Use a for-each loop where it will apply the following code for each element in the array.
    for (G elem : arr) {
        System.out.println(elem);
    }
}
