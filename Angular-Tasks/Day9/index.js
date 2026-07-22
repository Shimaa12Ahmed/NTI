export default class Calculator{
constructor(...number) {
    this.number = number; 
    
  }
  
  sum(){
    let total=0;
   for (const num of this.number) {
      total=Number(total+num);
   }
   console.log(`Result of Summation : ${total}`)
  }
  subtraction(){
   let sub = this.number[0];

for (let i = 1; i < this.number.length; i++) {
    sub -= this.number[i];
}
 console.log(`Result of Subtraction : ${sub}`)
  }
  multiply(){
    let mult = 1;

for (const num of this.number) {
    mult *= num;
}

console.log(`Result of Multiply : ${mult}`)
    
  }
}