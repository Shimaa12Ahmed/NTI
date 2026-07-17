//Solve Task1
function multiply(num1,num2){
    return num1*num2;
}
console.log(multiply(6,6));

function calculate(num1,num2,multiply){
   return multiply(num1,num2);
}
 var mult=calculate(4,44,multiply)
function displayResult(mult){
    console.log(`4*44=${mult}`)

}
displayResult(mult)
var result=calculate(15,15,multiply)
displayResult(result)
//----------------------------------------------------
// solve Task2



var timeOutId1=setTimeout(function greetUser (){

console.log("Hello,User");
},3000);


var count1=10;
var intervalId=setInterval(function count1Down(){
    console.log(` result of Q2: ${count1}`);
    count1--;
    
    if(count1==0){
        clearInterval(intervalId);
        console.log("Time's up!")
    }
},1000)

var count2=10;
var intervalId2=setInterval(()=>{
    console.log(` result of Q3: ${count2}`);
    count2--;

},1000)
var timeOutedId2=setTimeout(()=>{
clearInterval(intervalId2);
},5000)

var timeOutId3=setTimeout(() => {
  
   console.log("This will be cleared!");
   
}, 5000);
 clearTimeout(timeOutId3);  