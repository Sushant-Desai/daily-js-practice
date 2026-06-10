const arr1 = [1, 2, 3, 4, 5]
const arr2 = [0,...arr1,6,7,8,9];

console.log("this is array 1 ", arr1);
console.log("this is the array elemnts by using spread operator ", arr2);


console.log("merge the above 2 arrays ");

const result= [...arr1,...arr2];
console.log("after merging the array is ",result);


// spread with objects
const person = {
  name: "John",
  age: 25
};

const copy = { ...person };

console.log(person,"this is the object which i write");

console.log(copy, "this is the object which i access from spread operator");

const addDetailsToPerson={
    ... copy,
    city:"Pune"
};

console.log("After adding city to the copy object",addDetailsToPerson);

console.log("Person object ",person);
console.log("copy object ",copy);
console.log(" last Updated details ",addDetailsToPerson);



