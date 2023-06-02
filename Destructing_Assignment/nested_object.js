// Nested Objects.
// Write a function that takes an object representing a person as input, and extracts the name and street
// properties from a nested object using object destructuring. The function should return an object with these two
// properties. A sample object is given below.

function newobj(obj)
{
    const {
        name,
        address:{street},
    }=obj;
    return {name, street};
}

const person = {
    name: "Priya",
    age: 21,
    address: {
        street: "88, Block B, Industrial area",
        city: "sector 5, Salt lake",
        state: "West Bengal",
    },
};
console.log(newobj(person));