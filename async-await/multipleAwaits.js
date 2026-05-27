function task1(){
    return new Promise((resolve,reject)=>{
        let success=true;
        if (success)
        setTimeout(() => {
            resolve("Task done")
        }, 5000);
        else{
            setTimeout(() => {
               reject("Task 1 not work") 
            }, 5000);
        }
    })
}

function task2(){
    return new Promise((resolve,reject)=>{
        let age=20;
        if(age>=18){
            setTimeout(() => {
            resolve("user can ride a bike")
        }, 5000);
        }
        else{
            reject("user not able to ride a bike becaused under 18 is not allowed")
        }
    })
}
// multiple awaits used here
async function runTask(){
    try {
        const r1= await task1();
        console.log(r1);

        const r2= await task2();
        console.log(r2);
        
    } catch (error) {
        console.log(error);
        
    }

}

runTask();