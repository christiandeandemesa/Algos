/*
Complete the code in the editor below. The variables i, d, and s are already declared and initialized for you. You must:

1. Declare 3 variables: one of type int, one of type double, and one of type String.
2. Read 3 lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your 3 variables.
3. Use the + operator to perform the following operations:

    1. Print the sum of i plus your int variable on a new line.
    2. Print the sum of d plus your double variable to a scale of one decimal place on a new line.
    3. Concatenate s with the string you read as input and print the result on a new line.
*/

// 1. Declares the 3 variables as an integer, a double (i.e. decimal number), and a string.
int i2;
double d2;
String s2;

// 2. Saves the values given by HackerRank to each of the variables.
i2 = scan.nextInt();
d2 = scan.nextDouble();

// The below code is necessary for System.out.println(s + s2) to work correctly.
scan.nextLine();
s2 = scan.nextLine();

// 3-1. Prints the sum of both integers.
System.out.println(i + i2);

// 3-2. Prints the sum of both doubles.
System.out.println(d + d2);

// 3-3. Concatenates and prints both strings. Notice s must come before s2.
System.out.println(s + s2);