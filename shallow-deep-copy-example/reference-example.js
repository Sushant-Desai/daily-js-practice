let obj1 = {
    name: "Aman"
};

// Reference copy
let obj2 = obj1;


obj2.name = "Sushant"; // Changes both obj1 and obj2

console.log(obj1.name); // Amit
console.log(obj2.name); // Amit