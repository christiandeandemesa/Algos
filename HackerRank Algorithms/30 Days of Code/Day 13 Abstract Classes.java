/*
Given a Book class and a Solution class, write a MyBook class that does the following:

    Inherits from Book
    Has a parameterized constructor taking these 3 parameters:
        1. string title
        2. string author
        3. int price
    Implements the Book class' abstract display() method so it prints these 3 lines:
        1. Title:, a space, and then the current instance's title.
        2. Author:, a space, and then the current instance's author.
        3. Price, a space, and then the current instance's price.
*/

// The MyBook subclass extends from the Book abstract superclass.
class MyBook extends Book{
    int price;

    // This is the constructor.
    MyBook(String title, String author, int price){
        super(title, author);
        this.price = price;
    }
    
    // This is the method inherited from the Book abstract superclass.
    public void display(){
        System.out.println(
            "Title: " + this.title + "\n" +
            "Author: " + this.author + "\n" +
            "Price: " + this.price
        );
    }
}