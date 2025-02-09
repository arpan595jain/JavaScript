// Singleton by constructor


//object literals

const mysym=Symbol("Key1")

const jsuser={
    name:"Arpan",
    [mysym]:"mykey",
    age:21,
    location:"Meerut",
    email:"arpan@gmail.com",
    isloggedIn:false,
    lastlogindays:["Monday","Tuesday"]
}
console.log(jsuser.email);
console.log(jsuser["name"]);
console.log(jsuser[mysym]);
// console.log(jsuser);
// Object.freeze(jsuser)
jsuser.email="arpan@34111gmail.com"
// console.log(jsuser);
jsuser.greeting=function(){
    console.log("Hello Users");
    
}
jsuser.greeting2=function(){
    console.log(`Hello Users, ${this.name}`);
    
}
console.log(jsuser.greeting);
console.log(jsuser.greeting());
console.log(jsuser.greeting2());






