//Part A
//========================
///1--
const fruits = ["apple", "banana", "cherry"];

for (const index in fruits) {
    console.log(index, fruits[index]);
}
for (const fruit of fruits) {
    console.log(fruit);
}

for (const [index, value] of fruits.entries()) {
    console.log(`${index} -> ${value}`);
}
const str="NTI"
for (const index in str) {
    console.log(index, str[index]);
}
for (const char of str) {
    console.log(char);
}//for in print char with index but for of print char only
const user = {
    name: "Ali",
    age: 25
};

// for (const x of user) {
//     console.log(x);//TypeError: user is not iterable
// }

for (const [key, value] of Object.entries(user)) {
    console.log(key, value);
}
const nums = [1, 2, 3, 4, 5, 6];

for (const num of nums) {

    if (num === 3)
        continue;

    if (num === 5)
        break;

    console.log(num);
}
//======================
//Part B
// =============
const map = new Map();

map.set("name", "Ahmed");
map.set(100, "ID");

const objKey = { id: 1 };
map.set(objKey, "UserObject");

console.log(typeof map);
console.log(map.size);
console.log(map);


console.log(map.get("name"));

console.log(map.has("age"));

map.delete(100);

console.log(`Map Size After delete ID :${map.size}`);

const map2 = new Map();

map2.set("name", "Ahmed");
map2.set("age", 22);
map2.set("city", "Cairo");

for (const [key, value] of map2) {
    console.log(key, value);
}

for (const key of map2.keys()) {
    console.log(key);
}

for (const value of map2.values()) {
    console.log(value);
}
// Why use Map instead of Object?

// If your keys are not just strings (like objects, arrays, or functions).

// If you need reliable iteration order (Map keeps insertion order).

// If you need .size directly instead of Object.keys(obj).length.

//If you need built-in methods like .set(), .get(), .has(), .delete().
const map3= new Map();

map3.set("A", 1);
map3.set("B", 2);

console.log(map3.size);

map3.clear();

console.log(`Map Size After using Clear ${map3.size}`);

//=================
//Part C
// =============
const set = new Set();

set.add(10);
set.add(21);
set.add(2);
set.add(3);
set.add(2);
set.add(10);

console.log(set);
console.log(set.size);//5 Because set is unique ==> ignore the Second 2

console.log(set.has(2));

set.delete(3);

console.log(set.has(3));
for (const value of set.values()) {
    console.log(value);
}



for (const entry of set.entries()) {
    console.log(entry);
}
const setOfNums = [1, 2, 2, 3, 4, 4, 5];

const unique = [...new Set(setOfNums)];

console.log(unique);
// Why use Set instead of Arr?
// Store unique values only → no duplicates allowed.

// Order is preserved by insertion.

// No index access (set[0] doesn’t work).

// Provide useful methods: .add(), .delete(), .has(), .clear().

// Great for checking membership and removing duplicates.
//===============================================
//Part D
//=====================
const name = "Ahmed";
const age = 25;

const person1 = {
    name: name,
    age: age
};

console.log(person1);

const person2 = {
    name,
    age
};

console.log(person2);
const calculator = {

    add(a, b) {
        return a + b;
    },

    multiply(a, b) {
        return a * b;
    }

};

console.log(calculator.add(5, 3));
console.log(calculator.multiply(5, 3));
const key1 = "email";
const key2 = "phone";

const user2 = {

    [key1]: "ali@gmail.com",

    [key2]: "01223425465",

    ["user_" + 99]: "special user"

};

console.log(user2);
function buildPayload(type, value) {

    return {

        type,

        value,

        createdAt: new Date().toISOString(),

        [type + "_flag"]: true,

        print() {
            console.log(`${type}: ${value}`);
        }

    };

}

const payload = buildPayload("order", 12345);

console.log(payload);

payload.print();
//================================
// Part E
//=======================================
// 20. Predict the output and explain (stack / value copy):
// let a = 10;
// let b = a;
// b++;
// console.log(a, b); 10,11 ستاك بياخد نسخة من المتغير فقط 
// 21. Predict the output and explain (heap / reference):
// const person1 = { name: "SSS", child: { age: 5 } };
// const person2 = person1;
// person2.name = "AAA";
// console.log(person1.name);AAA heap save reference of object
const original2 = {
    x: 1,
    nested: {
        y: 2
    }
};

const copy2 = {
    ...original2
};

copy2.x = 100;
copy2.nested.y = 999;

console.log("Original:", original2);
console.log("Copy:", copy2);

const copy3 = Object.assign({}, original2);

copy3.nested.y = 500;

console.log(original2);
console.log(copy3);
const deepSrc = {

    n: 1,

    d: new Date(),

    arr: [
        1,
        {
            k: 2
        }
    ],

    set: new Set([1,2,3])

};

const deepClone = structuredClone(deepSrc);

deepClone.arr[1].k = 999;


console.log(deepSrc);



console.log(deepClone);
//Predict the output:
// const arr1 = [1, [2, 3]];
// const arr3 = [...arr1];
// arr1[1][0] = 99;
// console.log(arr3[1][0]);//99 Shallow Copy
const arr1 = [1, [2, 3]];

const arr3 = structuredClone(arr1);

arr1[1][0] = 99;

console.log(arr1);

console.log(arr3);
//===================
//Part F
//===============================
// 26. Predict and explain:
const m1 = new Map([["k", { v: 1 }]]);
const m2 = new Map(m1);
m2.get("k").v = 42;
console.log(m1.get("k").v);//42
// Is new Map(m1) a deep copy or a shallow copy? shallow

const m3 = structuredClone(m1);

m3.get("k").v = 7;

console.log(m1.get("k").v);//42
console.log(m3.get("k").v);//7

const ids = [101, 102, 101, 103, 102, 104];
const uniqueIds = [...new Set(ids)];

const products = new Map();

for (const id of uniqueIds) {
    products.set(id, "available");
}

console.log(products.size);

for (const [id, status] of products) {
    console.log(id, status);
}


const courseName = "JavaScript";
const duration = "2 Months";
const key = "level";

const course = {

    courseName,

    duration,

    [key]: "Beginner",

    info() {
        console.log(`${this.courseName} - ${this.duration}`);
    }

};

course.info();

for (const [k, v] of Object.entries(course)) {

    if (typeof v === "function")
        continue;

    console.log(k, v);
}


let personA = {
    name: "SSSSSSS",
    son: {
        age: 5
    }
};


let personB = personA;

personB.name = "Ahmed";


let personC = structuredClone(personA);

personC.son.age = 20;

console.log("Person A:",personA);//name: "Ahmed",
//     son: {
//         age: 5
//     }

console.log("Person B:",personB);//name: "Ahmed",
//     son: {
//         age: 5
//     }

console.log("Person C:",personC);//name: "Ahmed",
//     son: {
//         age: 20
//     }