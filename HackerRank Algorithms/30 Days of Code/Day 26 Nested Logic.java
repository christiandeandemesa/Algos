/*
Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the 
fine (if any). The fee structure is as follows:

1. If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine = 0).
2. If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, 
   fine = 15 Hackos * (the number of days late).
3. If the book is returned after the expected return month but still within the same calendar year as the expected return date, the fine = 
   500 Hackos * (the number of months late).
4. If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10,000 Hackos.
*/

public static void main(String[] args) {
    Scanner in = new Scanner(System.in);

    // Grabs all the inputs from HackerRank.
    int returnDay = in.nextInt();
    int returnMonth = in.nextInt();
    int returnYear = in.nextInt();
    int dueDay = in.nextInt();
    int dueMonth = in.nextInt();
    int dueYear = in.nextInt();

    // Instantiates fine as 0.
    int fine = 0;

    // 4.
    if(returnYear > dueYear) fine = 10000;

    // 3.
    else if(returnMonth > dueMonth && returnYear == dueYear) fine = 500 * (returnMonth - dueMonth);

    // 2.
    else if(returnDay > dueDay && returnMonth == dueMonth && returnYear == dueYear) fine = 15 * (returnDay - dueDay);

    // If none of the above if-else statements are met, then fine being 0 fits the requirement of 1.
    System.out.print(fine);
    in.close();
}