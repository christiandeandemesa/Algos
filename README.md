# Code Wars JS Cheat Sheet #
## Hello everyone, here is an explanation of some built-in functions, and fundamentals used in JavaScript (JS). ##
______________________________________________________________

### Fundamentals ###
______________________________________________________________


### Built-in Functions ###
______________________________________________________________
- Array.protoype.join() returns a new string by combining all the elements in the array.
    - If you pass empty parentheses (), you will create a string with commas.
        - const arr = ['Hello', 'World']
        - arr.join() returns 'Hello,World'
    - If you pass quotations without a space (''), you will create a string without commas.
        - arr.join('') returns 'HelloWorld'
    - If you pass something between the quotations ('-'), you will create a string with what you passed between each element.
        - arr.join('-') returns 'Hello-World'
        - arr.join(' ') returns 'Hello World'

- Array.prototype.slice(x, y) returns a new array with all the elements from Array from the number x to the number y - 1.
    - If only a single number (x) is given, it will return a new array from number x to the last value in Array.