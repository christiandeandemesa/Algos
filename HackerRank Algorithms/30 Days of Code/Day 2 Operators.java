/*
Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the 
percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. Round the result to the nearest integer.
*/

public static void solve(double meal_cost, int tip_percent, int tax_percent) {
    double tip = meal_cost * tip_percent / 100;
    double tax = meal_cost * tax_percent / 100;
    double total_cost = meal_cost + tip + tax;

    /*
    If the total_cost = 1.67, then Math.round(total_cost) = 2;
    Using Math.round() turns a number into a data type of long, so we use (int) to convert it into a data type of int.
    */
    int total = (int) Math.round(total_cost);
    System.out.println(total);
}