// const isEven = (n) =>{
//   if( n%2=== 0){
//     return true 
//   }else {
//     return false 
//   }
// }

// condition ?  if true : else false 
// condition ? return : condition2 ? return : return 
const isEven = n => n%2===0 ? true : false 


console.log(isEven(4))



/**********************ANOTHER EXAMPLE **************************************************/

// const generation = (age)=> {
//   if(age < 18){
   
//     return "Ado"
//   }else if(age > 60){
//     return "senior"
//   }else{
//     return "Adulte"
//   }
// }


const generation = age => age < 18 ? "Ado" : age > 60 ? "Senior" : "Adulte"

console.log(generation(61))