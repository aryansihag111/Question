// JavaScript Tutorial: Count Occurrences of a Value in an Array
// [1, 3, 9, 3, 7, 0, 3, -4, -3, 3, 3, 3] target 3\

// const array = [1, 3, 9, 3, 7, 0, 3, -4, -3, 3, 3];
// const target = 3;

// let count = 0;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//         count++;
//     }
// }

// console.log(count);


let array = [1,3,4,6,8,3,7,,3,9,3,7,3,3]

let target = 3;

let count = 0;

for(let i = 0; i<=array.length; i++){
    if(array[i] === target ){
        count++
    }

}

console.log(count);





