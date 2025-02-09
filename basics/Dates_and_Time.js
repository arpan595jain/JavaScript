//Date is object in js
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);
let D=new Date(2025,0,25)
console.log(D.toDateString());
//Months start from 0 in js
let D1=new Date("2025-01-26")
console.log(D1.toString());

let D2=new Date("08-25-2025")
console.log(D2.toString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(D2.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate=  new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday:"long",
})


















