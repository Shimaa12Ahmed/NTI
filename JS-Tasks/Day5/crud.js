var items=[];
var id=0;
const createItems=()=>{

var name=document.getElementById("name").value;
var price=parseFloat(document.getElementById("price").value);
var quantity=parseInt(document.getElementById("quantity").value);
if(name==""||isNaN(price)||isNaN(quantity)){
    alert("please enter details of product");
}
else{
items.push({"id":id,"name":name,"price":price,"quantity":quantity});
id++;
document.getElementById("name").value="";
document.getElementById("price").value="";
document.getElementById("quantity").value="";
console.log(items);
displayProducts(items);  
}

return items;
}
const displayProducts=(items)=>{
    var rows="";
    items.forEach((item,index) => {

        rows+=
        `
         <tr>
            <td class="product-name">${item.name}</td>
            <td class="product-price">${item.price}</td>
            <td class="amount">${item.quantity}</td>
            <td class="actions">
            <button class="icon-button" onClick="deleteProduct(${index},items)">
            <i class='fas fa-trash'></i> 
            </button>
            <button class="icon-button" onClick="editProduct(${index},items)">
            <i class='fas fa-edit '></i>
            </button>
            </td>
            </tr>
        `
    });
   document.getElementById("product").innerHTML=rows;
}
var currentIndex=-1;
const editProduct=(index,products)=>{
currentIndex=index;
document.getElementById("name").value=products[index].name;
document.getElementById("price").value=products[index].price;
document.getElementById("quantity").value=products[index].quantity;
document.getElementById("submit-btn").innerText="Update Product";
}
const updateProduct=()=>{
var name=document.getElementById("name").value;
var price=parseFloat(document.getElementById("price").value);
var quantity=parseInt(document.getElementById("quantity").value);
if(name==""||isNaN(price)||isNaN(quantity)){
    alert("please enter details of product");
}
items[currentIndex].name=name;
items[currentIndex].price=price;
items[currentIndex].quantity=quantity;
document.getElementById("name").value="";
document.getElementById("price").value="";
document.getElementById("quantity").value="";
console.log(items);
displayProducts(items);  
document.getElementById("submit-btn").innerText="Add Product";
currentIndex = -1;

}
const handleSubmitProduct=()=>{
    var btn=document.getElementById("submit-btn").innerText;
if(currentIndex==-1){
    createItems();
}
else{
   
updateProduct();
}
}


const deleteProduct=(index,products)=>{
products.splice(index,1);
console.log(products);
displayProducts(products)

}