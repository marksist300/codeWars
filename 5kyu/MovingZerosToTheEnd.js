// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// function moveZeros(arr) {
//     const resultArr=arr;
//     for(let i = 0; i<resultArr.length; i++) {
//         if(arr[i]===0) {
//             resultArr.push(0);
//             resultArr.splice(resultArr.indexOf(arr[i]),1);
//         }
//     }
//     return resultArr;
// }

// would be better solved using filter() method.

function moveZeros(arr) {
    return arr.filter(elem=> elem !==0).concat(arr.filter(elem=> elem===0));
}

console.log(moveZeros([1,0,1,1,2,0,3,0,4]))