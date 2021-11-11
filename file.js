const obj1 = {
    name: "Pizza",
    calories: 9001,
};
const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
];

const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
};
const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
];

obj1.__proto__ = obj2;

function entries(obj) {
    let Arr1 = [];
    let Arr2 = [];
    for (const item in obj) {
        Arr2.push(item, obj[item]);
        if(obj.hasOwnProperty(item)) {
            Arr1.push(Arr2);
            Arr2 = [];
        }
    }
    return Arr1;
}

console.log(entries(obj1));
console.log(entries(obj2));


const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expectedA =
    "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
};
const expectedB =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

function insert(tableName, columnValuePairs) {
    const keys = Object.keys(columnValuePairs);
    const values = Object.values(columnValuePairs);
    return `INSERT INTO ${tableName} (${keys}) VALUES (${values});`
}

console.log(insert(table, insertData1));
console.log(insert(table, insertData2));