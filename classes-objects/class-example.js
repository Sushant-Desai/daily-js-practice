// Class - A blueprint for creating objects.


/*
Interview Questions
Q1. What is a constructor?
Special method executed when object is created.

Q2. Why use classes?
To create multiple objects with same structure.

*/ 
class Student {
    constructor(name, age, roll_no) {
        this.name = name;
        this.age = age;
    }
    // class methods
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

const stud1 = new Student("Sushant", 24, 12);
const stud2 = new Student("Shubham", 24, 13);
const stud3 = new Student("Ganesh", 24, 14);

console.log(stud1, stud2, stud3);

stud1.greet()
stud2.greet()
stud3.greet()
l̥