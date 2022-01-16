/*
We have an array of objects representing different people in our contacts lists.

1. The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
If both are true, then return the "value" of that property.

2. If name does not correspond to any contacts then return the string No such contact.

3. If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
*/

const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    for(let i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)) return contacts[i][prop]; // 1.
        else if(contacts[i].firstName === name && !contacts[i].hasOwnProperty(prop)) return 'No such property'; // 3.
    }
    return 'No such contact'; // 2.
}

console.log(lookUpProfile("Akira", "likes"));
// ["Pizza", "Coding", "Brownie Points"]
console.log(lookUpProfile("Kristian", "lastName"));
// 'Vos'
console.log(lookUpProfile("Sherlock", "likes"));
// ["Intriguing Cases", "Violin"]
console.log(lookUpProfile("Harry", "likes"));
// ["Hogwarts", "Magic", "Hagrid"]
console.log(lookUpProfile("Bob", "number"));
// 'No such contact'
console.log(lookUpProfile("Bob", "potato"));
// 'No such contact'
console.log(lookUpProfile("Akira", "address"));
// 'No such property'