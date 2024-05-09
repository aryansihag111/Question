// Object Clone Method

let original = {
   a: 1, 
   b: 2
};





// 1. Using the Spread Operator (...):

//  let copied = {...original};

// console.log(copied);






// 2. Using Object.assign():

// let copied = Object.assign({}, original);

// console.log(copied);







// 3. Using JSON.stringify() and JSON.parse():

// let copied = JSON.parse(JSON.stringify(original));

// console.log(copied);







// 4. Using a Loop:

// let copied = {};
// for (let key in original) {
//     copied[key] = original[key];
// }

// console.log(copied);








// 5. Using Object.fromEntries() with Object.entries():


let copied = Object.fromEntries(Object.entries(original));

console.log(copied);


