document.getElementById("parent")
    .addEventListener("click", (event) => {

        // console.log(event.stopPropagation());

        console.log("Parent clicked");
        console.log(event.target);
        console.log(event.currentTarget);

        

    },true);

document.getElementById("child")
    .addEventListener("click", (event) => {
        console.log(event.target);
        console.log(event.currentTarget);
        console.log("Button clicked");
    });