
function fetchData(){
    return new Promise((resolve)=>{

        setTimeout(() => {
            resolve("Data Recieved after 2 seconds")
        }, 2000);
    })
}

 function getData(){
    const result=  fetchData();
    console.log(result);
}

getData();