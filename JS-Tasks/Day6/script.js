var users =
JSON.parse(localStorage.getItem("users"))||[];
var id=users.length;

const validation=(user)=>{

if(user.firstName.trim()===""||user.lastName.trim()===""||Number.isNaN(user.birthDate.getTime())||isNaN(user.age)||user.gender===""||user.grade===""){
    alert("please enter data of user");
    return false;

}
else{
    
    return true;
}
}
const addUser=(event)=>{
event.preventDefault();
const fname=document.getElementById("fname").value;
const lname=document.getElementById("lname").value
const date=new Date(document.getElementById("birth-date").value);
const age=new Date().getFullYear()-date.getFullYear();

const gender = document.getElementById("gender").value;
const selectedRadio =
document.querySelector('input[name="grade"]:checked');

const grade =
selectedRadio ? selectedRadio.value : "";
const user={"id":id,"firstName":fname,"lastName":lname,"birthDate":date,age,gender,grade}; 

if(!validation(user))return;
users.push(user);
id++;

clearInputs();  

localStorage.setItem("users",JSON.stringify(users));
window.location.href = "displayData.html";
}
document.getElementById("age").value=age;
const clearInputs=()=>{
document.getElementById("fname").value="";
document.getElementById("lname").value="";
document.getElementById("birth-date").value="";
document.getElementById("age").value="";
document.getElementById("gender").selectedIndex=0;
document.querySelectorAll('input[name="grade"]')
.forEach(radio=>{
    radio.checked=false;
});
}
const form = document.querySelector('form');

form.addEventListener('submit',addUser);