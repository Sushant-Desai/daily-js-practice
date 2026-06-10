let obj1 = {
    name: "Aman",
    city: {
        a: "Pune"
    }
};

// Deep copy
let obj2 = structuredClone(obj1);

obj2.name = "Amit";      // Changes only obj2 because it's a completely separate copy
obj2.city.a = "Mumbai";  // Changes only obj2 because nested objects are also copied

console.log("Obj1: " + obj1.name);
console.log("Obj1: " + obj1.city.a);

console.log("--------------------------------");

console.log("Obj2: " + obj2.name);
console.log("Obj2: " + obj2.city.a);