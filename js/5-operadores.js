//operadores lógicos y valores booleanos
    // && = AND
    // || = OR
    // '!' = NOT
        
    //asignaciones
let isHoliday = true;
let isMember = true;
let hasDiscount = isHoliday || isMember;

    //if...else
let currentMoney= 800;
let laptopPrice = 1000;
let laptopDiscountPrice = laptopPrice - (laptopPrice * .20) //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
    //Condition was true. Code in this block will run.
    console.log("Getting a new laptop!");
}
else {
    //Condition was true. Code in this block will run.
    console.log("Can't afford a new laptop, yet!");
}

//operador de negación
if (!condition) {
    // runs if condition is false
  } else {
    // runs if condition is true
  }

//expresiones ternarias
// let variable = condition ? <return this if true> : <return this if false>
let firstNumber = 20;
let secondNumber = 10
let biggestNumber = firstNumber > secondNumber ? firstNumber: secondNumber;
//es una forma compacta de escribir lo siguiente:
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}