/* 
Q ) What is Array ?
=> An array stores multiple values in one variable.
*/

let cricketers = ["Sachin Tendulaker", " Rohit Sharma ", "Shreays Iyer ", "Jaspreet Bhumrah"]
console.log(cricketers);


//Arrays use index numbers.

console.log(cricketers[0]);
console.log(cricketers[2]);

//update the arrays

cricketers[2] = "Rohit Shrama"
cricketers[1] = "Dhawan"

console.log(cricketers);

//We can find the lenghth of Array
console.log(cricketers.length);

// push() to add the element at the end

cricketers.push("Virat Kohali")
console.log(cricketers);

// Pop() - removes the last elements
cricketers.pop()
console.log(cricketers);


// unshift() - Add the elements at the start 

cricketers.unshift("Sushant Desai")
console.log(cricketers);
cricketers.unshift("Shubham Wable")
console.log(cricketers);


// shift() - Remove first element 

cricketers.shift()
console.log(cricketers);

// Looping in the Arrays 

// Traditional for loop 
for (let i = 0; i < cricketers.length; i++) {
    console.log("My Favourite Crickters player is - " + cricketers[i]);
}

// for of loop - it gives values in arrays 
for (let c of cricketers) {
    console.log("By using for of for loop "+c);
}
// for in loop - it gives indexes and best for Objects
for (let c in cricketers){
    console.log("By using for in loop " +c)
}

// for each loop - it gives values and it is modern array iteration
console.log("For each elements");
cricketers.forEach(c => {
    console.log(c);   
});



// Arrys of Objects
let users =[
    {name:"Sushant", age :22},
    {name:"Aman", age :23},
    {name:"Shubham", age :24},
]
console.log("name of user is " +users[0].name ,"Age is "+users[0].age);
console.log("name of user is "+users[1].name,"Age is "+users[1].age);
console.log("name of user is " +users[2].name ,"Age is " +users[2].age);









