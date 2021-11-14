# Code Wars JS Cheat Sheet #
## Hello everyone, here is an explanation of some built-in functions, and fundamentals used in JavaScript (JS). ##
______________________________________________________________

### Fundamentals ###
______________________________________________________________
```js
// This is an in-line comment in JS.

/*
This is a 
multi-line
comment 
in JS.
*/
```

### Built-in Functions ###
______________________________________________________________
- Array.protoype.filter() returns a new array with all the elements from Array that pass the given test within the parentheses ().
```js
const arr = ['This', 'array', 'will', 'be', 'filtered'];
const filteredArr = arr.filter(word => word.length === 8);
console.log(filteredArr);
// ['filtered']
```

- Array.prototype.forEach() performs the given function within the parentheses () on every element in Array.
```js
const arr = [1, 2, 3];
arr.forEach(el => console.log(el))
// 1
// 2
// 3
```

- Array.prototype.indexOf() returns the first index of where the given element within the parentheses () in Array.
    - If the given element is not in Array, it will return -1.
    - You can pass a number as a second parameter in the parentheses () that will start looking for the given element from that index.
        - The default parameter is 0.
```js
const arr = ['Zero', 'One', 'Two', 'One'];
console.log(arr.indexOf('Zero'));
// 0
console.log(arr.indexOf('One'));
// 1
console.log(arr.indexOf('Two'));
// 2
console.log(arr.indexOf('One', 2));
// 3
console.log(arr.indexOf('Four'));
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

- Array.prototype.slice(x, y) returns a new array with all the elements from Array from the number x to the number y - 1.
    - If only a single number (x) is given, it will return a new array from number x to the last value in Array.
    - If a negative number is given, it will start with -1 as the last element in Array.
```js
const arr = ['This', 'array', 'will', 'be', 'sliced'];
console.log(arr.slice(0, 1));
// ['This']
console.log(arr.slice(1, 4));
// ['array', 'will', 'be']
console.log(arr.slice(0));
// ['This', 'array', 'will', 'be', 'sliced']
console.log(arr.slice(3));
// ['be']
console.log(arr.slice(-1));
// ['sliced']
console.log(arr.slice(0, -2));
// ['This', 'array', 'will']
```