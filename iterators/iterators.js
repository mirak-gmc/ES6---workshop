//ForEach

const names = ["Hamdi ", "ghazi", "eya", "yassine"];
let newNames = [];
// for(let i=0 ; i<names.length ; i++){
//   newNames.push(names[i].toUpperCase())
// }

let x = names.forEach((name, i) => {
  newNames.push(name.toUpperCase());
});

console.log(x); // return undefiend

console.log(names);
console.log(newNames);

//create contact lisr  { name , id }
const contact = names.map((name, i) => {
  return {
    name: name,
    id: i,
  };
});

console.log(contact)

// create a new contact list name.length > 3

const longestThanThree = contact.filter((contact) => {
  //contact is an object {name , id }
  //filter takes a condition
  return contact.name.length > 3;
});

console.log(longestThanThree);
