
function calculate(){
const num1=parseFloat(document.getElementById("num1").value);
const num2=parseFloat(document.getElementById("num2").value);
if(isNaN(num1) || isNaN(num2)){
    alert("Please enter valid numbers");
    return;
}
else{
    const sum=num1+num2;
    const diff=num1-num2;
    const multi=num1*num2;
    const division=num1/num2;
    document.getElementById("result").innerHTML=`<h4>Result Of Addition: <span id="addition-result">${sum}</span></h4>
    <h4>Result Of Subtraction: <span id="subtraction-result">${diff}</span></h4>
    <h4>Result Of Multiplication: <span id="multiplication-result">${multi}</span></h4>
    <h4>Result Of Division: <span id="division-result">${division}</span></h4>`
}
}
function print(){
    const fname=String(document.getElementById("fname").value);
    const lname=String(document.getElementById("lname").value);
    
  
    document.getElementById("result").innerHTML=`<h2> Welcome ${fname} ${lname} To My Website</h2>`
}
