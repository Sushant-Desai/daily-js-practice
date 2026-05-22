/*
map() - is one of the most important arrays methods in JavaScript

It is used to:-
1) loop through an array
2)transform data
3) return a new array
*/

// example of map method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const doubleNumbers = numbers.map((num) => {
    return num * 2
})

console.log(doubleNumbers);


// convert names to upperString

const namesOfStudent = ["Sushant", "Mauli", "Shubham"]

const uppercaseName = namesOfStudent.map((n) => {
    return n.toUpperCase();
    //  let names=  n.toUpperCase();
    //  console.log("Name of Students is \n" +names)
})
console.log(uppercaseName);


// Map with Objects

const users = [
    { id: 1, name: "Sushant" },
    { id: 2, name: "Rahul" }
];

const userNames=users.map(users=>"Names of student is "+users.name + " And id is "+users.id)
console.log(userNames);

// numbers simple example 
/*
Make all numbers square
Convert numbers to strings
Add 5 to every number */
const numbers2 = [2, 4, 6, 8];

const squareNumbers= numbers2.map((n)=>{
    return `Square of ${n} is `+ n*n
})
console.log(squareNumbers);

const numberToString= numbers2.map((n)=>{
    return n.toString();
})
console.log(numberToString);

const addFive= numbers2.map((n)=>{
    return 'After add 5 number is '+ `${n+5}`;
})
console.log(addFive);






