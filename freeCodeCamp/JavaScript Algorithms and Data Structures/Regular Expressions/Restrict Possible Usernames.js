/*
You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

1. Usernames can only use alpha-numeric characters.
2. The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the 
number.
3. Username letters can be lowercase and uppercase.
4. Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/

/*
^[a-z] states the first character has to be a letter.
([0-9]{2, 0}|[a-z]+\d*)$ states the last character has to end with either two or more numbers [0-9]{2,0}, or | one or more letters [a-z]+ 
followed by zero or more numbers \d*.
The i flag is used to ignore case-sensitive letters in the string.
*/
let userCheck = /^[a-z]([0-9]{2,0}|[a-z]+\d*)$/i;

console.log(userCheck.test("JACK"));
// true
console.log(userCheck.test("J"));
// false
console.log(userCheck.test("Jo"));
// true
console.log(userCheck.test("Oceans11"));
// true
console.log(userCheck.test("RegexGuru"));
// true
console.log(userCheck.test("007"));
// false
console.log(userCheck.test("9"));
// false
console.log(userCheck.test("A1"));
// false
console.log(userCheck.test("BadUs3rnam3"));
// false
console.log(userCheck.test("Z97"));
// true
console.log(userCheck.test("c57bT3"));
// false
console.log(userCheck.test("AB1"));
// true
console.log(userCheck.test("J%4"));
// false