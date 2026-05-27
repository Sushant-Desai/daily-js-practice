const myPromises = new Promise((resolve, reject) => {
    const success = false;

    if (success) {
        resolve("Operation successfully");
    }
    else {
      // another method ->  generate real JS error
      throw new Error()
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