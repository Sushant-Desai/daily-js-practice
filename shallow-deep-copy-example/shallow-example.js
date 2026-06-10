let obj1 = {
    name: "Aman",
    city:{
        a: "Pune"
    }
}


let obj2 = { ...obj1 }; // Shallow copy

obj2.name = "Amit";      // Only changes obj2 because it's a top-level primitive property
obj2.city.a = "Mumbai";  // Changes both obj1 and obj2 because city is a shared nested object


console.log("Obj1: "+ obj1.name)
console.log("Obj1: "+ obj1.city.a);

console.log("-------------------------------------------------")
console.log("Obj2: "+ obj2.name)
console.log("Obj2: "+ obj2.city.a)