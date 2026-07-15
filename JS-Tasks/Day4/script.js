// solve Part1
var car={brand:"Toyota",model:"Corolla",year:"2026",color:"blue"};
for (const key in car) {
    console.log(`${key}:${car[key]}`);
    
}
console.log(` Brand of car object using dot notation is: ${car.brand}`);
console.log(`Year of car object using bracket notation is: ${car["year"]}`);
car.color="black";
car.price=800000;
for (const key in car) {
    console.log(`${key}:${car[key]}`);
    
}
delete car.year 
console.log(car.year) // print undefined because delete removes both tthe value and the property
var data={"student-name":"Sara",age:20};
console.log(data["student-name"])
var book={title:"To Kill a Mockingbird",author:{
    firstName:"Harper",
    lastName:"Lee"
}}
console.log(book.author.lastName)

var std={name:"Ali",age:"25",city:"Cairo"}
console.log(`Keys of Object std are :${Object.keys(std)}`);
console.log(`Values of object std are : ${Object.values(std)}`)
if(std.hasOwnProperty("job")){
    console.log("std object have job as a property" );
}
else{
    console.log("std object does’t have job as a property" );
}
var settings={theme:"dark",lang:"en"};
Object.freeze(settings);
settings.theme="light";settings.fontSize="16";
console.log(settings) // object don’t change because freeze convert object to immutable
//-----------------------------------------------------------
//Solve Part2
var cities=["Cairo","Giza","Alex","Aswan","Qana"];
console.log(`The Length of Cities Array are: ${cities.length}`)
for (const city of cities) {
    console.log(city);
    
}
console.log(`The first city in array is : ${cities[0]}`)
console.log(`The second city in array is : ${cities[1]}`)
console.log(`The last city in array is : ${cities[cities.length-1]}`)
cities.push("London")
console.log(`The last city after add city using push is :  ${cities[cities.length-1]}`)
cities.unshift("New York")
console.log(`The first city after add city using unshift is  : ${cities[0]}`)
cities.pop();
console.log(`The last city  after using pop  is : ${cities[cities.length-1]}`)
cities.shift();
console.log(`The first city after using shift is : ${cities[0]}`)

var lang=["HTML","CSS","JS","React"];
console.log(`The Index of JS is ${lang.indexOf("JS")}`)
if(lang.includes("Python")){
    console.log(` Python is found and the index of Python is ${lang.indexOf("Python")}`)
}
else{
    console.log(` Python not found in lang `)

}
var supplies = ["Pen", "Book", "Bag"];

supplies.forEach((supply, index) => {
    console.log(`${index}: ${supply}`);
});
var colors=["red","green","blue","yellow"];
for (const color of colors) {
    if(color=="blue")
        continue;
    else
        console.log(color);
    
}
var alpha=["A","B","C"];
alpha.push("D","E");
alpha.shift();
console.log(`The final array is :${alpha} and the length is ${alpha.length}`)
for (const x of alpha) {
    console.log(x)
}
//------------------------------------
//Solve Part 3
var fruits = ["apple", "banana", "cherry"];

var newFruits = fruits.map((fruit) => {
    return fruit.toUpperCase();
});
console.log(`the new array is: ${newFruits}`);
console.log(`the original array is: ${fruits}`);
var nums=[10,55,30,80,45,90]
var newArray=nums.filter((num)=>{
    return num>50;
})
console.log(` The Numbers Greater Than 50 are:${newArray}`);
console.log(cities.find(city => city.startsWith("A")));
console.log(cities.findIndex(city => city.startsWith("A")));

var arr=["a","b","c","d","e"];
var sliceArray=arr.slice(1,4);
console.log(`the original Array is :${arr}`);

console.log(`array after Slicing is :${sliceArray}`);

var counts = ["one", "two", "three", "four", "five"];

var removedItems = counts.splice(1, 2);

console.log(`Removed items: ${removedItems}`);
console.log(`Array after splice is: ${counts}`);

var numbers = [40, 100, 1, 5, 25];

numbers.sort((a, b) => a - b);

console.log(`numbers After sorting are :${numbers}`);

var ages = [16, 21, 17, 19];

var Adult = ages.some(age => age >= 18);
var Adults = ages.every(age => age >= 18);

console.log("Some printing is:", Adult);
console.log("Every printing is:", Adults);

var nums2 = [5, 10, 15, 20];

var total = nums2.reduce((sum, num) => {
    return sum + num;
}, 0);

console.log("Total:", total);
//-------------------------------------------------------
//Solve Part4
var students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];

for (const student of students) {
    console.log(`Name: ${student.name}, Grade: ${student.grade}`);
}

var passedStudents = students
    .filter(student => student.grade >= 80)
    .map(student => student.name);

console.log(passedStudents);

var products = [
    { name: "Pen", price: 10 },
    { name: "Book", price: 50 },
    { name: "Bag", price: 100 }
];

var totalPrice = products.reduce((sum, product) => {
    return sum + product.price;
}, 0);

console.log("Total Price:", totalPrice);

var skills = ["js", "html", "css", "js", "react", "js"];

var count = 0;

for (const skill of skills) {
    if (skill === "js") {
        count++;
    }
}

console.log("JS appears:", count, "times");

var classroom = {
    teacher: "Mr. Ahmed",
    students: ["Ali", "Sara", "Omar", "Mona"]
};

console.log("Teacher:", classroom.teacher);
console.log("Number of Students:", classroom.students.length);
console.log("Last Student:", classroom.students[classroom.students.length - 1]);

var products = [
    { id: 1, title: "Pen", price: 10 },
    { id: 2, title: "Book", price: 50 },
    { id: 3, title: "Bag", price: 25 }
];


var upperTitles = products.map(product => product.title.toUpperCase());

console.log(upperTitles);


var cheapProducts = products.filter(product => product.price < 30);

console.log(cheapProducts);


var total = products.reduce((sum, product) => {
    return sum + product.price;
}, 0);

console.log("Total Price:", total);