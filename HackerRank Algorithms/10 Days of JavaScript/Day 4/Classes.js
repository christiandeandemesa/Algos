/*
Create a Polygon class that has the following properties:

A constructor that takes an array of integer values describing the lengths of the polygon's sides.
A perimeter() method that returns the polygon's perimeter.
Locked code in the editor tests the Polygon constructor and the perimeter method.
*/

// Classes are special functions that create objects.
class Polygon {

    /*
    The constructor method creates a new object.
    Methods are actions, similar to functions, performed on objects created in that specific class.
    */
    constructor(sides) {

        /*
        The this keyword refers to the object it belongs to.
        When we create a new object (shown below) the object's sides (this.sides) will be what we passed in the constructor's argument 
        (sides).
        */
        this.sides = sides;
    }

    // This is the perimeter method.
    perimeter() {
        let result = 0;
        for(let side of this.sides) result += side;
        return result;
    }
}

// You create a new object by using the new keyword to call on the class' (Polygon) constructor method.
const pentagon = new Polygon([5, 5, 5, 5, 5]);

// You call on the object's method by calling the object (pentagon) then the method (perimeter()).
console.log(pentagon.perimeter());