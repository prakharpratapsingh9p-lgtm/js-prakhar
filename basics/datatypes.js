/*
primitive (call by value)
 7 types
  1) string
  2)number
  3) Boolean
  4)null
  5) undefined
  6) symbol - uniquess
  7) big int




  Non primitive / Reference type

  1) arrays
  2) objects
  3) Functions



const isLoggedIn = null
let p ;
console.log(typeof p);

const id = Symbol('123')

console.log(id);
console.log(i1d)




const names= ["prakhar" , " parsoon",  "Annaya"
]

console.log(names)


let myPy= {
    q : "prakhar",
    age : 22,
}

console.log(myPy)




 const m = function(){
    console.log( "prakhar");
    
 }
const i1d =Symbol(123)
console.log(typeof i1d);




*/



//HOW MEOMERY WORKS

// Stacks(Primitive) , Heap(Non- Primitive)

/*(let myYoutubeName = "Rex77r"
let anotherName = myYoutubeName
console.log(anotherName);




 anotherName = "Name"
console.log(myYoutubeName);

console.log(anotherName);


*/

let userOne = {
    email : "user@123",
    upi : 121212,
}

let  userTwo = userOne

userTwo.email ="prqakhar@121"

console.log(userOne);
console.log(userTwo);

