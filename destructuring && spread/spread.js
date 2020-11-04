const user = {
  name : "John",
  age : 25
}


const user2 = {...user , id : 0 }


console.log(user) 
console.log(user2)



/*array */
const arr1= [1 , 2 , 3]
const arr2 = [4 , 5 , 6 ]

// const concat = arr1.concat(arr2)
const concat = [...arr1 , ...arr2]
console.log(concat)
console.log(arr1)
console.log(arr2)