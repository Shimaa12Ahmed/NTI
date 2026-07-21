//Part A
//========================
///1--

function test(){
   x=7;//xهتبقي glopal variable 
   console.log(`inside function: ${x}`)

}
test();
console.log(`outside function:${x} `);
// =========================================
//2--

function testUsingStrict(){
" use strict";  
  try {
   y = "Hi"; // ReferenceError
    } catch (error) {
        console.log("strict mode error:", error.message);
    }
}
testUsingStrict();
function deleteWithStrict() {
    "use strict";
    var localVar = "test";
    // try {
    //     delete localVar; 
    // } catch (error) {
    //     console.log("strict mode error:", error.message);
    // }
    // SyntaxError:
    // Delete of an unqualified identifier in strict mode.

   
    var obj = { name: "Shimaa" };
    delete obj.name;
    console.log("name after delete :", obj); // {}
}
deleteWithStrict();

//=====================================
//part2
// 4. Predict the output, then run the code:
console.log(x);//undefined
var x = 10;
console.log(x);//10
// 5. Predict what happens in each case, then explain the difference:
// Case 1
sayHi();//Hi
function sayHi() {
console.log("Hi");//Hi
}
// Case 2
// sayBye();// TypeError: sayBye is not a function
// var sayBye = function () {
// console.log("Bye");
// };
// 6. Predict the output of this code and explain using the TDZ idea:
// console.log(a);// ReferenceError
// let a = 5;
// 7. Predict the output:
var n = 1;
function demo() {
console.log(n);//undefined
var n = 2;
console.log(n);//2
}
demo();
console.log(n);//1

function testVarScope() {
    if (true) {
        var message = "Hi";
    }

    console.log(message); // Hi
}

testVarScope();

function testLetScope(){
    if (true) {
    let message= "Hi";
    }

   // console.log(message);  ReferenceError
}

testLetScope();



function testConstScope(){
    if (true) {
const message="Hi";
    }

   // console.log(message);  ReferenceError

}


testConstScope();
var v=10;
var v=20;
console.log(v);//20

let l = 10;

// let l = 20; // SyntaxError

console.log(l);//10

const PI=3.14;

// const PI=22/7         //SyntaxError

console.log(PI); //3.14
const student = {
    name: "Ali",
    age: 22,
    city: "Cairo"
};

console.log(`Original Object of Student ${student}`);

student.age = 23;
console.log(`Student after edit age${student}`);

student.grade = "A";
console.log(`Student after add grade${student}`);


delete student.city;
console.log(`Student after delete city${student}`);

try {
    student = {
        name: "Alaa"
    };
} catch (error) {
    console.log(error.message);
}

const nums = [1, 2, 3];

console.log(`original Array Of nums${nums}`);


nums.push(4);
console.log(`nums after push 4${nums}`);


nums[0] = 100;
console.log(`nums after change index 0${nums}`);

try {
    nums = [5, 6, 7];
} catch (error) {
    console.log(error.message);
}
var a;//undefined
let b;//undefined
// const c;//SyntaxError
var g1 = "var global";
let g2 = "let global";
const g3 = "const global";

console.log(window.g1);//var global
console.log(window.g2);//undefined don’t add to window
console.log(window.g3);//undefined don’t add to window
// const handlers = {};
// for (var i = 0; i < 3; i++) {
// handlers["fn" + i] = function () {
// return "index: " + i;
// };
// }
// console.log(handlers.fn0());//3
// console.log(handlers.fn2());//3 var function Scope
//===============
const handlers = {};
for (let i = 0; i < 3; i++) {
handlers["fn" + i] = function () {
return "index: " + i;
};
}
console.log(handlers.fn0());//0
console.log(handlers.fn2());//2   let block scope

//=====================================
//Part D
// ============
const welcome=(name)=>`Welcome,${name} !"`;
const fullInfo=(first, last, age)=>`${first} ${last} is ${age} years old`
console.log(fullInfo("Ali","Hassan",25))
const multiply=(a, b)=>a*b;
const sumOfMultiply=(a,b)=>{
    console.log(`a:${a},b:${b}`);
    
 console.log( `multiply: ${multiply(a,b)}`);
console.log(`summaion:${a+b}`);
}
sumOfMultiply(7,9);
//===================
//Part E
//===============
const product = {
    title: "Laptop",
    price: 15000,
    inStock: true,
    brand: "Dell"
};

const { title, price, inStock } = product;

console.log(title);
console.log(price);
console.log(inStock);

const skills = ["HTML", "CSS", "JS", "React"];

const [first, second] = skills;

console.log(first);
console.log(second);

function greet(name = "Guest", message = "Hello") {
    return `${message}, ${name}!`;
}

console.log(greet("Ahmed", "Welcome"));
console.log(greet("Ahmed"));
console.log(greet());

function sumAll(...numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));

const arr1 = [1, 2];
const arr2 = [3, 4, 5];

const merged = [...arr1, ...arr2];

console.log(merged);

const original = [10, 20, 30];

const copy = [...original];

copy.push(40);

console.log(original);
console.log(copy);
const user = {
    name: "Sara",
    age: 22
};

const contact = {
    email: "sara@nti.com",
    age: 23
};

const merged = {
    ...user,
    ...contact
};

console.log(merged);//{name:Sara,email:sara@nti.com,age:23}//because accept the last

const values = [2, 4, 6, 8];

function total(a, b, c, d) {
    return a + b + c + d;
}


const result = total(...values);

console.log(result);

//==================
//Part F
//==============
let person1 = {
    name: "Ali",
    child: {
        age: 5
    }
};

let person2 = person1;

person2.name = "Omar";

console.log(person1.name);//Omar because 2 objects have the same reference in heap
const original = {
    name: "Mona",
    details: {
        city: "Cairo"
    }
};

const copy = {
    ...original
};


copy.name = "Sara";


copy.details.city = "Alex";

console.log("Original:", original);//{name:"Mona",details:{city:"Alex"}}
console.log("Copy:", copy);//{name:"Sara",details:{city:"Alex"}} // because Shallow بيعمل نسخ سطحي 


const original = {
    name: "Mona",
    details: {
        city: "Cairo"
    }
};
// const deepCopy = JSON.parse(JSON.stringify(original));
const deepCopy = structuredClone(original);

deepCopy.details.city = "Alex";

console.log("Original:", original);//{name:"Mona",details:{city:"Cairo"}}
console.log("Deep Copy:", deepCopy);//{name:"Mona",details:{city:"Alex"}}

const user = {
    name: "Omar",
    age: 19,
    city: "Cairo"
};


localStorage.setItem("userdata", JSON.stringify(user));
const data = localStorage.getItem("userdata");
const parsedData = JSON.parse(data);
console.log(typeof parsedData);
console.log(parsedData);
localStorage.removeItem("userdata");
console.log(localStorage.getItem("userdata"));
//=========================
// Part G
//====================
const APP_CONFIG = {
    name: "Azkar",
    version: "1.0.0",
    api: {
        baseUrl: "https://api.example.com",
        timeout: 5000
    },
    features: []
};

console.log(APP_CONFIG);


APP_CONFIG.api.timeout = 10000;
console.log(APP_CONFIG);


APP_CONFIG.features.push("Dark Mode");
console.log(APP_CONFIG);


try {
    APP_CONFIG = {
        name: "Prayer"
    };
} catch (error) {
    console.log(error.message);
}

function createCard(title, price = 0, ...tags) {
    return {
        title,
        price,
        tags,
        label: `${title} - ${price} EGP`
    };
}

const card1 = createCard("Laptop", 15000, "Electronics", "Dell");
const card2 = createCard("Mouse");

console.log(card1);
console.log(card2);

const students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];

for (const { name, grade } of students) {
    console.log(`${name} scored ${grade}`);
}