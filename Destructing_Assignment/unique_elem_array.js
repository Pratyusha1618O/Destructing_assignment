// Only unique items are allowed.
// You are building a program that takes an array of numbers as input and you need to remove all the duplicates
// from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
// contains only the unique elements.

function filter(array){
    let newSet = new Set(array);
    return newSet;
}

let array = [1,3,4,2,4,7,3,1];
console.log(filter(array));
