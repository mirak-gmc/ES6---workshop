let user = {
  name :"John" ,
  age : "27"
}

//let name = user.name 
// let age = user.age 
const { name , age } = user 

const sayHello= (userObj )=>{
  const { name , age }= user
 return `
   Hello my name is ${name} my age
   is ${age}
  `
}
console.log(sayHello(user))




/**array */

let arr = ["one" ,"two" ,"three"]


// let first = arr[0]
const [first , second , third] = arr

console.log(second)