//Primitive DataType(call by value)
// 7 types : string, Number, Boolean, null, undefined, Symbol, BigInt
const score=100
const scoreValve=100.3
const isloggedIn=false
const outside=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123');

console.log(id===anotherId);

const bigIntNumber=344353456876746753n;
console.log(typeof bigIntNumber);



//Referenced Datatypes (Non-primitive)
// Array, Objects, Functions


//Array
const heros=["Arpan","Jain"];

//Object
let myobj={
    name:"Arpan",
    age:22,
}
console.log(myobj)

//Functions  return type function object
const myFunction=function(){
    console.log("hello World");
    
}

//***************************************************************

// Stack(Primitive), Heap(Non-Primitive)
 let myname="Arpan Jain"
 let anotherName=myname
 console.log(anotherName);
 
 let userOne={
    user:"Arpan Jain",
    upi:"12423@gbl"
 }
 let userTwo=userOne
 userTwo.user="Mukul"
 console.log(userOne.user);
 console.log(userTwo.user);
 
 
