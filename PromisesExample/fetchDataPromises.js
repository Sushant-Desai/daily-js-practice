function fetchData() {
    return new Promise((resolve, reject) => {
        let a = 10;
        if (a == 10) {
            setTimeout(() => {
                resolve("User Data fetch")
            }, 2000);

        } else { reject("data not fetch") }
    })
}

fetchData().then((data) => {
    console.log(data);

})
    .catch((e) => {
        console.log(e);

    })

    .finally(() => {
        console.log("Finally Runs Data fetch or not ");

    })



// Rejection Error Example


const promise = new Promise((resolve, reject) => {

    reject("Server error");
});

promise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

/*
The Output of code is -
Server error
User Data fetch
Finally Runs Data fetch or not 
*/


/*
Promises Methods 
1) .all();
*/
// Promises.all methods example
Promise.all([
    Promise.resolve("Sushant Desai"),
    Promise.resolve(12),
    Promise.resolve("Kalepadal , Hadapsar Pune 28")
])

    .then((r) => {
        console.log(r);
    })



// console.log("*****************----------- Promise.race() it gives first complte resolve  ----------********************");
Promise.race([
    Promise.resolve("Sushant Desai"),
    Promise.resolve(12),
    Promise.resolve("Kalepadal , Hadapsar Pune 28")
])

    .then((r) => {
        console.log(r);
    })