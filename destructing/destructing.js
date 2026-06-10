// Destructing - Destructuring allows you to extract values from arrays or objects into variables.


// without destructing
const colors = ["Red", "Black ", "white"]
const firstColor = colors[0];
const secondColor = colors[1];

console.log("without destructing first color is - ", firstColor);
console.log("without destructing second color is - ", secondColor);

//with destrcting
const [a, , c] = colors
console.log("with destrcuting ", a);
// console.log("with destrcuting ",b);
console.log("with destrcuting ", c);


// Object destructing

const user = {
    name: "Sushant",
    age: 24
}

const { name, age } = user;

console.log(name);
console.log(age);

const { name: userName } = user

console.log(userName, " - this is the change name to username", user);

const { city = "Pune" } = user
console.log(city);


