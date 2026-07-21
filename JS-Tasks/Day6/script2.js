let users = JSON.parse(localStorage.getItem("users")) || [];

const birthInput = document.getElementById("edit-birth");
birthInput.addEventListener("change", () => {

    const birthDate = new Date(birthInput.value);

    const age =
        new Date().getFullYear() -
        birthDate.getFullYear();

    document.getElementById("edit-age").value = age;

});
const displayUsers=(users)=>{
    var rows="";

    users.forEach((user,index) => {
        rows+=
        `
         <tr>
            <td >${user.firstName}</td>
            <td >${user.lastName}</td>
            <td >${(new Intl.DateTimeFormat('en-US').format (new Date(user.birthDate)))}</td>
            <td >${user.age}</td>
           <td >${user.gender}</td>
            <td >${user.grade}</td>
            <td class="actions">
            <button class="icon-button" onClick="deleteUser(${index})">
            <i class='fas fa-trash'></i> 
            </button>
            <button class="icon-button" onClick="editUser(${index})">
            <i class='fas fa-edit '></i>
            </button>
            </td>
            </tr>
        `
    });
   document.getElementById("user").innerHTML=rows;
}
displayUsers(users);
var currentIndex=-1;
const editUser=(index)=>{
currentIndex=index;
document.getElementById("edit-fname").value=users[index].firstName;
document.getElementById("edit-lname").value=users[index].lastName;
document.getElementById("edit-birth").value =
users[index].birthDate.substring(0,10);
document.getElementById("edit-age").value=users[index].age;
document.getElementById("edit-gender").value=users[index].gender;
document.querySelector(
    `input[name="edit-grade"][value="${users[index].grade}"]`
).checked = true;
document.getElementById("editModal").style.display =
    "block";
}
function closeModal(){

    document.getElementById("editModal").style.display =
    "none";

}
const updateUser=()=>{
users[currentIndex].firstName=document.getElementById("edit-fname").value;
users[currentIndex].lastName=document.getElementById("edit-lname").value;
users[currentIndex].birthDate =
document.getElementById("edit-birth").value;
users[currentIndex].age=document.getElementById("edit-age").value;
users[currentIndex].gender=document.getElementById("edit-gender").value;
  users[currentIndex].grade =
    document.querySelector(
        'input[name="edit-grade"]:checked'
    ).value;

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    displayUsers(users);
closeModal();


 
currentIndex = -1;

}
const deleteUser=(index)=>{
users.splice(index,1);
    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );
displayUsers(users)

}

 const searchInput=document.getElementById("search-input");

const search=()=>{ 
const isGraduated=document.getElementById("graduated").checked;

const selected = document.getElementById("search").value;

const results=users.filter((user)=>
    {
    const values=[user.firstName,user.lastName,user.age,user.gender,user.grade];
    let matchSearch;
if(selected=="all"){
   matchSearch= values.some((value)=>{
    return String(value).toLowerCase().includes((searchInput.value).toLowerCase()); 
   }
   
    )
}
else{
  matchSearch=String(user[selected]).toLowerCase().includes((searchInput.value).toLowerCase());

}
if (isGraduated) {
            return matchSearch && user.grade === "Graduate";

      

    }  return matchSearch;});
console.log(results);
displayUsers(results);
};

searchInput.addEventListener("keyup", search);
document.getElementById("graduated").addEventListener("change", search);
document.getElementById("search").addEventListener("change", search);
