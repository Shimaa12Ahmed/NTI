function validation(){
    const userName=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    if(userName==""){
        alert("UserName is required");
    }
  if(password==""){
        alert("Password is required");
    }
    else{
     if(password.length<8){
        alert("Password must be at least 8 characters ");
    }    
    }
   
    console.log("UserName: "+userName+" Password: "+password);
}

function printMessage() {
    const currentYear = new Date().getFullYear();
    const userName = prompt("Enter your name");
    const birthDate = document.getElementById("birth").value;
    const student = document.getElementById("student").checked;
if(userName === null || userName === "") {
        alert("Name is required");
        return;
    }
    const age = currentYear - new Date(birthDate).getFullYear();

    let category;

    if (age < 13) {
        category = "Kid";
    } else if (age <= 17) {
        category = "Teen";
    } else if (age <= 59) {
        category = "Adult";
    } else {
        category = "Senior";
    }

    let message = `Hello ${userName}, you are ${age} years old
Category: ${category}`;

    if (student) {
        message += "\nDon't forget to study hard!";
    }

    console.log(message);
    alert(message);
    document.getElementById("result").innerText = message;
}

