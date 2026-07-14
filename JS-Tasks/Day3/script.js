const prompt = require("prompt-sync")();
// Solve Part 1
var fullName="Shimaa Ahmed";
console.log("Number of characters in  name : "+fullName + " is " + fullName.length);
var sentence=prompt("Enter any Sentence: ");
console.log("sentence in UpperCase: " + sentence.toUpperCase());
console.log("sentence in LowerCase: " + sentence.toLowerCase());
var email=prompt("Enter your email: ");

if(email.includes("@")){
  console.log("Email is valid "+  email);
}
else{
  console.log("Email should contain @ ex: user@example.com");
}
var word=prompt("Enter any word: ");
console.log("First character of the word: " + word.charAt(0) + " and Last character of the word: " + word.charAt(word.length-1));
var str="This is a bad day";
console.log("The word  after replace 'bad'with 'good': " + str.replace("bad", "good"));
var str2=prompt("Enter any Sentence: ");
var arrayOfStr2=str2.split(" ");
console.log("The sentence after replacing spaces with hyphens: " + arrayOfStr2.join("-"));
var str3=" nti egypt training  ";
console.log("The string after updating: " + str3.trim().toUpperCase().replace("EGYPT", "CAIRO"));
//----------------------------------------------------------------
//Solve Part 2
var num1="45.8";
console.log("The number after converting to Float: " + parseFloat(num1));
console.log("round of number 7.6 is " + Math.round(7.6));
console.log("floor of number 7.6 is " + Math.floor(7.6));
console.log("ceil of number 7.6 is " + Math.ceil(7.6));
var arrayOfNumbers=[12,5,28,9];
console.log("The smallest number in  "+arrayOfNumbers+"  is: " + Math.min(...arrayOfNumbers));
console.log("The largest number in  " + arrayOfNumbers + "  is: " + Math.max(...arrayOfNumbers));
var randomNum=Math.floor(Math.random() * 20) + 1;
console.log("Random number between 1 and 20 is: " + randomNum);
var price=prompt("Enter the price: ");
console.log("The price rounded to two decimal places is: " + parseFloat(price).toFixed(2));
var arrayOfRandoms=[];
var sum=0;
for(let i=0; i<5; i++){
    arrayOfRandoms.push(Math.floor(Math.random() * 50) + 1);
}
for(let i=0; i<arrayOfRandoms.length; i++){
    sum+=arrayOfRandoms[i];
}
console.log("Array of 5 random numbers between 1 and 50: " + arrayOfRandoms);
console.log("The largest number in the array is: " + Math.max(...arrayOfRandoms));
console.log("The smallest number in the array is: " + Math.min(...arrayOfRandoms));
console.log("The average of the numbers in the array is: " + (sum/arrayOfRandoms.length).toFixed(2));
//----------------------------------------------------------------
//Solve Part3
for(let i=1; i<=20; i++){
    console.log(i);
}
for(let i=1;i<=15;i++){
    if(i%2!=0)
        console.log(i)
}
var j=10;
while(j>0){
    console.log(j);
    j--;
}

var names=["Sara","Omar","Mona","Youssef"];
for (const name of names) {
    console.log(name)
    
}
for(let i=1;i<=10;i++){
    if(i==7){
        break;
    }
    else{
        console.log(i)
    }
}
for(let i=1;i<=3;i++){
    for(let j=1;j<=12;j++){
        console.log(`${i}*${j}=${i*j}`)
    }
}
for(let i=1;i<=30;i++){
    if(i%3==0){
        continue;
    }
    else if(i==25){
        break;
    }
    else{
        console.log(i);
    }
}
//----------------------------------------------------
//Solve Part 4
var str4="HELLO"
for (const letter of str4.split("")) {
    console.log(letter)
    
}
var arr=[10,20,30,40]
var result=0;
for(let i=0;i<arr.length;i++){
result+=arr[i];

}
console.log(`The Sum of ${arr} is :${result}`)

var str5="JavaScript is amazing and awesome";
var count=0;
for (const c of str5.split("")) {
    if(c=="a"||c=="A"){
        count++;
    }
    
}
console.log(`The count of occurrence character "A","a" is:${count} `)

var grades=[70,85,77,92,60,88];
for(let grade of grades){
    if(grade%2==0){
        console.log(grade);
    }
}

for(let i=1;i<=4;i++){
    for(let j=1;j<=i;j++){
       process.stdout.write('*');
    }
    console.log("");
}

var students=["ahmed","sara","omar","laila","hassan"];
var count2=0;
for (const std of students) {

    var student=std.toUpperCase();
    if(student[0]=="A"||student[0]=="S"){
        count2++;
    }

    
}
console.log("Number Names Matches are:"+count2)

