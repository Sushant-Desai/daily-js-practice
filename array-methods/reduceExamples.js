// reduce examples
const numbers = [1, 2, 3, 4, 5];    
const sum = numbers.reduce((a, c) => {
    return a + c; // 
},0);
console.log(sum); //

const product = numbers.reduce((a, c) => {
    return a * c;
}, 2);
console.log(product);

// Q - Calculate total cart value
const cart = [
    { name: "Laptop", price: 50000, qty: 1 },
    { name: "Phone", price: 20000, qty: 2 },
    { name: "Tablet", price: 15000, qty: 3 },
    { name: "Mouse", price: 1000, qty: 4 }
];

const totalValues= cart.reduce((a,c)=>{
    let total= c.price * c.qty;
    if( c.price > 40000)
    {
        const discount = c.price * 0.1;
        console.log("Discount for " + c.name + " is " + discount);

        total = total - discount;
    }
    return a + total;
},0);
console.log(totalValues);       

