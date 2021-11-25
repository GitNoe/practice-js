//instrucciones if/else y operadores booleanos

//los booleanos se pueden aplicar a datos y operadores de comparación
let myTrueBool = true;
let myFalseBool = false;

//aquí se usa un operador como parte de una asignación
let timeOfDay = 8;
let timeToWakeUp = timeOfDay >= 8; // `timeToWakeUp` holds the value `true`

//instrucciones if/else:

if (condition){
    //Condition was true. Code in this block will run.
}

    //comparación de un valor
let isTrue = true;
if (isTrue) {
  // run code if true
}
if (true) {
  // run code if true
}

    //uso de un operador lógico
let currentMoney = 1000;
let laptopPrice = 1500;
if (currentMoney >= laptopPrice){
    //Condition was true. Code in this block will run.
    console.log("Getting a new laptop!");
}

    //instrucción completa
let currentMoney = 1000;
let laptopPrice = 1500;

if (currentMoney >= laptopPrice) {
    //Condition was true. Code in this block will run.
    console.log("Getting a new laptop!");
} else{
    //Condition was true. Code in this block will run.
    console.log("Can't afford a new laptop, yet!");
}