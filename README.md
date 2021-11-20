# Code Wars JS Cheat Sheet
## Hello everyone, here is an explanation of some built-in functions, and fundamentals used in JavaScript (JS)
______________________________________________________________

### Fundamentals
______________________________________________________________
- The typeof operator returns a string stating the data type of what was given after it.
```js
console.log(typeof 'Hello World');
// 'string'

console.log(typeof 42);
// 'number'

console.log(typeof true);
// 'boolean'

console.log(typeof Goodbye World);
// 'undefined'
```

- The ternary operator takes three operands: a condition ? what will execute if it passes the condition : what will execute if it does not pass the condition.
```js
// Traditional if/else statement.
function grade1(num) {
    if(num >= 70) {
        return 'Pass';
    }
    else {
        return 'Fail';
    }
}

console.log(grade1(50));
// 'Pass'

console.log(grade1(100));
// 'Fail'

// Use of ternary operator.
function grade2(num) {
    return(num >= 70 ? 'Pass' : 'Fail');
}

console.log(grade1(50));
// 'Pass'

console.log(grade1(100));
// 'Fail'
```

- The arrow function is a compact version of a traditional function.
```js
// Traditional function.
function square1(num) {
    return num * num;
}

console.log(square1(3));
// 9

// Use of arrow function.
const square2 = num => num * num;

console.log(square2(3));
// 9
```

- Regular expressions (i.e. REGEX) are a pattern used to find exact matches in a string.
```js
// Add REGEX examples.
```
______________________________________________________________
### Built-in Array Functions
______________________________________________________________
- Array() converts the given value in the parentheses () into an array.
```js
console.log(Array('101', 101, true));
// ['101', 101, true]
```

- Array.protoype.filter() returns a new array with all the elements from Array that pass the given test within the parentheses ().
```js
const arr = ['This', 'array', 'will', 'be', 'filtered'];
const filteredArr = arr.filter(word => word.length === 8);
console.log(filteredArr);
// ['filtered']
```

- Array.prototype.forEach() executes the given function within the parentheses () on every element in Array.
```js
const arr = [1, 2, 3];
arr.forEach(num => num * 2);
console.log(arr);
// [2, 4, 6]
```

- Array.prototype.indexOf() returns the first index of where the given element within the parentheses () is in Array.
    - If the given element is not in Array, it will return -1.
    - You can pass a number as a second parameter within the parentheses () that will start looking for the given element from that index.
        - The default parameter is 0.
```js
const arr = ['Zero', 'One', 'One'];
console.log(arr.indexOf('Zero'));
// 0

console.log(arr.indexOf('One', 2));
// 2

console.log(arr.indexOf('Three'));
// -1
```

- Array.protoype.join() returns a new string by combining all the elements in Array.
    - If you pass empty parentheses (), you will create a string with commas.
    - If you pass quotations without a space (''), you will create a string without commas.
    - If you pass something between the quotations ('-'), you will create a string with what you passed between each element.
```js
const arr = ['Join', 'Words'];
console.log(arr.join());
// 'Join,Words'

console.log(arr.join(''));
// 'JoinWords'

console.log(arr.join('-'));
// 'Join-Words'

console.log(arr.join(' '));
// 'Join Words'
```

- Array.protoype.map() returns a new array by performing the given function within the parentheses () on every element in Array.
```js
const arr = [1, 2, 3];
mappedArr = arr.map(num => num * 2);
console.log(mappedArr);
// [2, 4, 6]
```

- Array.prototype.pop() removes and returns the last element from Array.
```js
const arr = ['This', 'array', 'will', 'be', 'popped'];
console.log(arr.pop());
// 'popped'

console.log(arr);
// ['This', 'array', 'will', 'be']
```

- Array.prototype.push() adds the given value within the parentheses () to the end of Array.
    - If you want to push multiple values, place them in the parentheses () with commas between them.
```js
const arr = ['This', 'array', 'will', 'be'];
console.log(arr.push('pushed'));
// ['This', 'array', 'will', 'be', 'pushed'];

console.log(arr.push(false, 'or', 1));
// ['This', 'array', 'will', 'be', false, 'or', 1]
```

- Array.prototype.reduce() executes the given function within the parentheses () on every element in Array until only a single element remains, and then returns that value.
```js
const arr = [1, 2, 3];
console.log(arr.reduce((firstNum, secondNum) => firstNum + secondNum));
// 6
```

- Array.prototype.reverse() reverses the element order of Array.
```js
arr = ['This', 'array', 'will', 'be', 'reversed'];
console.log(arr.reverse());
// ['reversed', 'be', 'will', 'array', 'This']
```

- Array.prototype.shift() removes and returns the first element from Array.
```js
const arr = ['This', 'array', 'will', 'be', 'shifted'];
console.log(arr.shift());
// 'This'

console.log(arr);
// ['array', 'will', 'be', 'shifted']
```

- Array.prototype.slice(x, y) returns a new array with all the elements from Array from the number x to the number y - 1.
    - If only a single number (x) is given, it will return a new array from number x to the last element in Array.
    - If a negative number is given, it will start with -1 as the last element in Array.
    - If the parentheses () are empty, the default is 0.
```js
const arr = ['This', 'array', 'will', 'be', 'sliced'];
console.log(arr.slice(0, 1));
// ['This']

console.log(arr.slice(1, 4));
// ['array', 'will', 'be']

console.log(arr.slice());
// ['This', 'array', 'will', 'be', 'sliced']

console.log(arr.slice(3));
// ['be', 'sliced']

console.log(arr.slice(-1));
// ['sliced']

console.log(arr.slice(0, -2));
// ['This', 'array', 'will']
```

- Array.prototype.sort() sorts the elements in Array.
    - If it's strings of words or booleans, it sorts it alphabetically by uppercase first and lowercase second.
    - If it's numbers or strings of numbers, it sorts it by the first digit numerically.
    - If it's a mixture of the above, it sorts the string of numbers and numbers, then the strings of words, and then the booleans.
        - You can sort them numerically from lowest to highest by passing (a, b) => a - b in the parentheses ().
    - If you pass a given function within the parentheses (), it will sort the elements by that function.
```js
const wordArr = ['This', 'array', 'will' 'be', 'sorted'];
console.log(wordArr.sort());
// ['This', 'array', 'be', 'sorted', 'will']

const numArr = [1, 2, 10];
console.log(numArr.sort());
// [1, 10, 2]

console.log(numArr.sort((a, b) => a - b));
// [1, 2, 10]

const arr = ['Sorted', 'sorted', '1', '2', '10', 1, 2, 10, true, false];
console.log(arr.sort());
// ['1', 1, '10', 10, '2', 2, 'Sorted', false, 'sorted', true]
```

- Array.prototype.splice(x, y) removes or replaces elements in Array.
    - x is a number that indicates at what index in Array, and y is a number that indicates how many elements to remove.
    - You can include a third parameter after y which will be what is replacing the elements that were removed.
```js
const arr = ['This', 'array', 'will', 'be', 'replaced'];
console.log(arr.splice(1, 1));
// ['This', 'will', 'be', 'replaced']

console.log(arr.splice(0, 4));
// ['replaced']

console.log(arr.splice(0, 1, 'The'));
// ['The', 'array', 'will', 'be', 'replaced']

console.log(arr.splice(2, 2, 'was'));
// ['This', 'array', 'was', 'replaced']
```

- Array.prototype.unshift() adds an element to the beginning of Array.
```js
const arr = ['array', 'will', 'be', 'unshifted'];
console.log(arr.unshift('This'));
// ['This', 'array', 'will', 'be', 'unshifted']
```
______________________________________________________________
### Built-in Math Functions
______________________________________________________________
- Math.ceil() rounds up the number in the () to the closest integer.
    - If null is given, it returns 0.
```js
console.log(Math.ceil(1));
// 1

console.log(Math.ceil(0.9));
// 1

console.log(Math.ceil(0.1));
// 1

console.log(Math.ceil(-1.5));
// -1
```

- Math.pow(x, y) takes two numbers and returns the first number (x) to the power of the second number (y).
```js
console.log(Math.pow(3, 2));
// 9
```

- Math.sqrt() returns the square root of the number passed in the parentheses ().
```js
console.log(Math.sqrt(-1));
// NaN

console.log(Math.sqrt(0));
// 0

console.log(Math.sqrt(1));
// 1

console.log(Math.sqrt(2));
// 1.4142135623730951
```
______________________________________________________________
### Built-in Number Functions
______________________________________________________________
- Number() converts the given value within the parentheses () into a number.
```js
console.log(Number('101'));
// 101

console.log(Number('Not a number'));
// NaN

console.log(Number('1 0 1'));
// NaN

console.log(Number(true));
// 1

console.log(Number(false));
// 0
```
- Number.isInteger() checks if the number in the parentheses () is an integer.
```js
console.log(Number.isInteger(1));
// true

console.log(Number.isInteger(1/2));
// false

console.log(Number.isInteger(1/1));
// true

console.log(Number.isInteger(0));
// true
```

- Number.prototype.toFixed() converts a number to have decimals equal to the number passed in the parentheses().
```js
const num = 0;
console.log(num.toFixed(1));
// 0.0

const num2 = 1.111;
console.log(num.toFixed(2));
// 1.11
```
______________________________________________________________
### Built-in Object Functions
______________________________________________________________
- Object.keys() returns an array with the keys in the object within the parentheses().
```js
const obj = {These: 0, are: 1, the: 2, keys: 3};
console.log(Obj.keys(obj));
// ['These', 'are', 'the', 'keys']
```
______________________________________________________________
### Built-in String Functions
______________________________________________________________
- String() converts the given value within the parentheses () into a string.
```js
console.log(String('101'));
// '101'

console.log(String(101));
// '101'

console.log(String(true));
// 'true'
```

- String.prototype.charAt() returns a new string from String at the given index within the parentheses ().
```js
str = 'I will return C';
console.log(str.charAt(14));
// 'C'
```

- String.prototype.repeat() returns a new string which is copies of String concatenated together, and the number of copies is determined by what number you pass within the parentheses ().
```js
const str = 'This string will be repeated. "
console.log(str.repeat(3));
// 'This string will be repeated. This string will be repeated. This string will be repeated. '
```

- String.prototype.replace(x, y) returns a new string where all of the given patterns (x), a string or a regex, are to be replaced by the given input (y), a string or a function.
```js
const str = 'This string will be replaced, and this string will be replaced';
console.log(str.replace('replaced', 'logged'));
// 'This string will be logged, and this string will be logged'

console.log(str.replace('string', ''));
// 'This will be replaced, and this will be replaced'

console.log(str.replace(/replaced/, 'shown'));
// 'This string will be shown, and this string will be shown'

function upperCase(str) {
    return str.toUpperCase();
}
console.log(str.replace('replaced', upperCase));
// 'This string will be REPLACED, and this string will be REPLACED'
```

- String.prototype.split() returns a new array of substrings divided from String using the given pattern within the parentheses().
```js
const str = 'This string will be split';
const words = str.split(' ');
console.log(words);
// ['This', 'string', 'will', 'be', 'split']

const character = str.split('');
console.log(character[0]);
// ['T']

const arr = str.split();
console.log(arr);
// ['This string will be split']
```

- String.prototype.substr(x, y) returns a new string starting from the index at number x in String, and y being the number of indexes.
    - If only a single number (x) is given, it will return a new string from number x to the last index in String.
```js
const str = 'Substring';
console.log(str.substr(0, 1));
// 'S'

console.log(str.substr(3, 3));
// 'str'

console.log(str.substr(5));
// 'ring'
```

- String.prototype.toLowercase() returns a new string that makess every letter in String lowercase.
```js
const str = 'THIS IS LOWERCASE'
console.log(str.toLowercase());
// 'this is lowercase'
```

- String.prototype.toUppercase() returns a new string that makess every letter in String uppercase.
```js
const str = 'this is uppercase'
console.log(str.toUppercase());
// 'THIS IS UPPERCASE'
```

- String.prototype.trim() removes extra spaces from the beginning and end of String.
```js
const str = '   This has no spaces   ';
console.log(str.trim());
// 'This has no spaces'
```