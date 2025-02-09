// *************** Conversions ******************
 let score=33
let score1=""
let score3=null
console.log(typeof score);
console.log(typeof(score1));
console.log(typeof(score2));



let valueInNumber=Number(score1);
let valueInString=String(score);
let valueFromNull=Number(score3);

console.log(typeof valueInNumber);
console.log(typeof valueInString);
console.log(typeof valueFromNull);

console.log(valueFromNull);
console.log(valueInNumber);
console.log(valueInString);

//"33"=>33
//"33abc"=>NaN
//true=>1,false=>0

let isloggedin=1;
let booleanloggedin=Boolean(isloggedin);
console.log(booleanloggedin);

let isloggedin1="";
let booleanloggedin1=Boolean(isloggedin1);
console.log(booleanloggedin1);

//1=> true 0=>false
//""=>false
//"Arpan"=>true



// ***************** Operations ******************

let value=3
let negval=-value
console.log(negval);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1="Hello"
let str2=" World!"
let str3=str1+str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2+ "2");
console.log("1" + 2 + "2");

console.log(3+4*5%3);
console.log(true);
console.log(+true);
// console.log(true+); Error
console.log(+""); // output will be 0

let num1,num2,num3
num1=num2=num3=2+2;
console.log(num1);

let gamecounter= 100
gamecounter++;
console.log(gamecounter);


























