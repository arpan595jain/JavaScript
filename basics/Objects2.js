const tinderUser = new Object()
//Singelton Objecct
// console.log(tinderUser);
tinderUser.id="3412"
tinderUser.name="Mukul"
// console.log(tinderUser);
 const regularuser={
    email:"some@gmail.com",
    fullname:{
        username:{
            firstname:"Arpan",
            lastname:"Jain"
        }
    }
 }

//  console.log(regularuser.fullname.username.lastname);
//optional chaining later

const obj1={
    1:"a",2:"b",3:"c"
}
const obj2={
    4:"a",5:"b",6:"c"
}
// const obj3={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3);
//keys,values,entries,hasOwnProperty

 