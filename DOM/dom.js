function changeText() {
    document.getElementById("heading").textContent = "Text Changed "
}


// const btn= document.getElementById("btn");

// btn.addEventListener("click",()=>{
//     document.body.style.backgroundColor ="green"
// });

const btn = document.getElementById("btn");

let isGreen = false;

btn.addEventListener("click", () => {
    if (isGreen) {
        document.body.style.backgroundColor = "";
    } else {
        document.body.style.backgroundColor = "green";
    }

    isGreen = !isGreen;
})