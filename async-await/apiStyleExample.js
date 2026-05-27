function getUSer() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve({
            //     id: 1,
            //     name: "Sushant",
            //     phoneNumber: 8329534143
            // });

            reject("User Not found ")
        }, 5000);


    });


}

async function showUser() {

    // we used try catch for error or for reject handle
    try {
        const user = await getUSer();
        console.log(user);
    } catch (error) {
        console.log(error);
        
    }

}

showUser();