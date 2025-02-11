//sayMyname is function name 
function sayMyname(){
    // console.log("A");
    // console.log("R");    //Function Defination
    // console.log("P");
    // console.log("A");
    // console.log("N"); 
}
//reference and execution
sayMyname()

//Function of add two numbers

function addtwoNumber(number1,number2){
    // console.log(number1+number2); 
    // let result=number1+number2;
    // return result
    return number1+number2

}
const result=addtwoNumber(3,4);
// console.log("Result ", result);

function loginUserMessage(username){
    if(username===undefined)  {
        console.log("Please Enter a Username")
        return

    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Arpan"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

function calculateCarPrice(...num1){
    return num1;

}
console.log(calculateCarPrice(200,300,400));

user={
    username:"Arpan Jain",
    id:"ABC"
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} whose id is ${anyobject.id}`);

    
}
handleObject(user)







