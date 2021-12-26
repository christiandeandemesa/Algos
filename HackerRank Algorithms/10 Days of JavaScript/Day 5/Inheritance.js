/*
Perform the following tasks:

1. Add an area method to Rectangle's prototype.

2. Create a Square class that satisfies the following:
It is a subclass of Rectangle.
It contains a constructor and no other methods.
It can use the Rectangle class' area method to print the area of a Square object.
*/

class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
This is how to add an instance method in ES5.
Notice how you call the name of the class first, prototype second, and the name of the instance method (area) last.
*/
Rectangle.prototype.area = function () {
    return this.w * this.h;
}

const rectangle = new Rectangle(3, 4);
console.log(rectangle.area());
// 12

// The extends keyword is used to create a class (Square) that inherits, or is a child of, another class (Rectangle).
class Square extends Rectangle {
    constructor(side) {

        // The super method calls on the parent class' (Rectangle) constructor method (constructor(w, h)).
        super(side, side);
    }
}

const square = new Square(3, 3);

// Notice that the Square class also inherits all the instance methods (e.g. area()) from its parent class.
console.log(square.area());
// 9