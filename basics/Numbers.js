// *********************** Numbers ******************************
const score=400
console.log(score);
const balance= new Number(100);
console.log(balance);
console.log(typeof balance);

console.log(typeof balance.toString());
console.log(balance.toFixed(2));


const otherNumber=2344.4364
console.log(otherNumber.toPrecision(4));

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));




// *********** Maths ***********************
// Default Library in js
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.9));
console.log(Math.min(2,3,4,5));
console.log(Math.max(57,89,5,43));

console.log(Math.random());
console.log((Math.random()*10)+1);


const min=10
const max=20
console.log(Math.floor((Math.random()*(max-min + 1)) +min));
//Math.random give the value between 0 and 1 














