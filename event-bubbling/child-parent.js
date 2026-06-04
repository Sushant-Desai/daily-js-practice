const grandfather = document.getElementById("Grand Father")
const father = document.getElementById("father")
const child = document.getElementById("child")

grandfather.addEventListener("click", () => {
    console.log("Grand Father's ID click");
});
father.addEventListener("click", () => {
    console.log("Father's ID click");
});

child.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Son's Id C;ick");

});