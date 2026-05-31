// An object stores data in key-value pairs.

const person = {
    name: "Sushant",
    age: 24,
    address: "Pune"
}

console.log(person.name);
console.log(person);
console.log(person.age);
console.log(person.address);

// adding property

person.phoneNumber = 8329534143

console.log(person);

// Object Methods-- Functions inside objects are called methods.
console.log("Object Methods");

const friend = {
    name:"Shubham",
    age :24,

    greet(){
        console.log(`Hii , I am ${this.name} ,Friend of Sushant `);
        
    }

};

friend.greet()


