const name="Arpan"
const repoCount=16
// console.log(name+repoCount)
//using BackTicks String Interpolation
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const newName=new String('Arpan') //
console.log(newName[0])
console.log(newName.__proto__) 
console.log(newName[2]) 
console.log(newName[4]) 

console.log(newName.length) 
console.log(newName.toUpperCase());
console.log(newName.charAt(2));
console.log(newName.indexOf('a'));

const newString = newName.substring(0,2);// no negetive value
console.log(newString);

const newString1 = newName.slice(-3,2); // we can use negative value

const newString2 = "       Arpan     "
console.log(newString2);
console.log(newString2.trim());


const url="https://Arpan.com/Arpan%20"
console.log(url.replace('%20','-'));
console.log(url.includes('Arpan'));

// split method is used to split the string based on seperator 














