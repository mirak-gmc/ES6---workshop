/*
with export default , we export only one thing , so in the import we can rename it  
*/

import myFunction from "./myFunction.js";
// import x from "./myFunction.js"  // x or myFunction are the same with different name
myFunction();

import { url as lien, password as mdp } from "./myFunction";
/*
with export we export an object with all the variables 
export const url = ""
expot const password =" "
*/

/******************ANOTHER Example ********************/

// // imports
// // ex. importing a single named export
// import { MyComponent } from "./MyComponent";
// // ex. importing multiple named exports
// import { MyComponent, MyComponent2 } from "./MyComponent";
// // ex. giving a named import a different name by using "as":
// import { MyComponent2 as MyNewComponent } from "./MyComponent";
// // exports from ./MyComponent.js file
// export const MyComponent = () => {}
// export const MyComponent2 = () => {}
