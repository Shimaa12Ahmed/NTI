function evaluateEmployees() {
const experience = parseInt(document.getElementById("experience").value);
var salary=parseInt(document.getElementById("salary").value);

var bonus=0; 
   var rate=parseInt(prompt("Please enter your performance rate (1-10):"));
   document.getElementById("rate").value=rate;
  const shift=new Date().getHours();
    if(experience<2){
        alert("You are a Junior ");
        console.log("You are a Junior ");
        document.getElementById("jobCategory").textContent = "Junior ";


    }
    else if(experience>=2 && experience<5){
        alert("You are a Mid-level ");
        console.log("You are a Mid-level ");
        document.getElementById("jobCategory").textContent = "Mid-level ";
    }
    else if(experience>=5 && experience<10){
        alert("You are a Senior ");
        console.log("You are a Senior ");
        document.getElementById("jobCategory").textContent = "Senior ";
    }
    else{
        alert("You are a Expert ");
        console.log("You are a Expert ");
        document.getElementById("jobCategory").textContent = "Expert ";
    }

    
    if(experience<=2){
        bonus=salary*0.1;
        salary=salary+bonus;
        console.log("Salary after bonus: "+salary);
        document.getElementById("salaryResult").textContent =  salary;
    }
    else if(experience>2 && experience<=5){
        bonus=salary*0.15;
        salary=salary+bonus;
        console.log("Salary after bonus: "+salary);
        document.getElementById("salaryResult").textContent =  salary;
    }
    else{
        bonus=salary*0.2;
        salary=salary+bonus;
        console.log("Salary after bonus: "+salary);
        document.getElementById("salaryResult").textContent =  salary;
    }

  
   switch(true){
    case (rate>=9):
        alert("Excellent ");
        console.log("Excellent ");
        document.getElementById("level").textContent = "Excellent ";
        break;
    case (rate>=7 && rate<9):
        alert("Good ");
        console.log("Good ");
        document.getElementById("level").textContent = "Good ";
        break;
        case (rate>=5 && rate<7):
        alert("Average ");
        console.log("Average ");
        document.getElementById("level").textContent = "Average ";
        break;
        case (rate<5):
        alert("Needs Improvement ");
        console.log("Needs Improvement ");
        document.getElementById("level").textContent = "Needs Improvement ";
    default:
        alert("Invalid performance rate. Please enter a value between 1 and 10.");
   }
   if(shift>=9 && shift<18){
    console.log("Day Shift");
    document.getElementById("shift").textContent = "Day Shift";
   }
   else{
    console.log("Night Shift");
    document.getElementById("shift").textContent = "Night Shift";
   }
}
