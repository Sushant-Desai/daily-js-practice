const myPromises = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
    resolve("Operation successfully");
    }
    else {
        reject("Operation Failed")
    }
})

myPromises
    .then((r) => {
        console.log(r);

    })
    .catch((e) => {
        console.log(e);

    })
    .finally(() => {
        console.log("Finally runs")
    })