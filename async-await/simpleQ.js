/* Create promise that resolves after 2 seconds and print: Completed */

const myPromise = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Completed");
    }, 2000);

});

myPromise.then((message) => {
    console.log(message);
});

// Create async function returning: 100

async function getNumber() {
    return 100;
}

getNumber().then(console.log);

// Q - Handle rejected promise using try/catch.


function myPromise() {

    return new Promise((resolve, reject) => {

        reject("Something went wrong");

    });

}

async function handlePromise() {

    try {

        const result = await myPromise();
        console.log(result);

    } catch (error) {

        console.log(error);

    }

}

handlePromise();