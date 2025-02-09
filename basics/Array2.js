const a1=["Arpan","Jain"]
const a2=["Mukul","Garg"]
// a1.push(a2)
// console.log(a1);
// const a3=a1.concat(a2)
// console.log(a3);

const a4=[...a1,...a2]
// console.log(a4);


const a5=[1,2,3,[3,5,6,7,[8,9,[32,5]]]]
const a6=a5.flat(Infinity)
// console.log(a6);

console.log(Array.isArray("Arpan"));
console.log(Array.from("Arpan"));
console.log(Array.from({name:"Arpan"}));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));













