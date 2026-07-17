const prompt = require("prompt-sync")();
var items=[];
var id=0;
const createItems=()=>{

var name=prompt("Enter name of product:")
var price=parseFloat(prompt("Enter price of product:"));
var quantity=parseInt(prompt("Enter amount of product:"));
if(name==""||isNaN(price)||isNaN(quantity)){
    console.log("please enter details of product");
}
else{
items.push({"name":name,"price":price,"quantity":quantity});
  displayProducts();
}

return items;
}
const displayProducts=()=>{
   
    console.log(`=============Product Details===========`)
    items.forEach((item,index) => {

console.log(`Name:${item.name}||Price:${item.price}||Quantity:${item.quantity}`);
   })}

const updateProduct=()=>{
var index = parseInt(prompt("Enter index"));
var name = prompt("Enter new name");
var price = parseFloat(prompt("Enter new price"));
var quantity = parseInt(prompt("Enter new quantity"));
if(index>=0&&index<items.length){
items[index].name=name;
items[index].price=price;
items[index].quantity=quantity;
console.log(`Product details after Update:`)
  displayProducts();   
}
 else{
        console.log(`Invalid index Index is (0:${items.length-1})`)
    }

 
}

const deleteProduct=()=>{
var index = parseInt(prompt("Enter index"));
if(index>=0&&index<items.length){
items.splice(index,1);
console.log(`Product details after Delete:`);

displayProducts()
    }
    else{
        console.log(`Invalid index Index is (0:${items.length-1})`)
    }


}

createItems();
updateProduct();
deleteProduct();