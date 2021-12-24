/*
Complete the function in the editor. It has two parameters: a and b. It must return an object modeling a rectangle that has the following 
properties:

length: This value is equal to a.
width: This value is equal to b.
perimeter: This value is equal to 2 * (a + b).
area: This value is equal to a * b.
*/

function Rectangle(a, b) {
    // An object is a variable that holds many values.
    const rectangle = {
        // Objects have key-value pairs where the key (i.e. whatever is before the colon) has a value (i.e. whatever is after the colon).
        length: a,
        width: b, 
        perimeter: 2 * (a + b),
        area: a * b
    }
return rectangle;
}

console.log(Rectangle(4, 5));
// {length: 4, width: 5, perimeter: 18, area: 20}

// To create an instance of the object, we create a variable to save the object in.
let rectangle1 = Rectangle(4, 5);
// Notice how we get a specific value by calling on its respective key in the object instance.
console.log(rectangle1.length);
// 4
console.log(rectangle1.width);
// 5
console.log(rectangle1.perimeter);
// 18
console.log(rectangle1.area);
// 20