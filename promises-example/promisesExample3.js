
const p = new Promise((resolve, reject) => {
    try {
        console.log(username);
        resolve("username is correct")
    } catch (e) {
        reject(e);
    }
})

p.then((m) => {
    console.log("Then methods works");

})
.catch((e) => {
    console.log(e);

})

.finally(() => {
    console.log("Username Program Runs");

})


