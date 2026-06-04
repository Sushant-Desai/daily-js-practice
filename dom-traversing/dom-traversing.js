console.log("script loaded");

const para = document.querySelector("p");
const parent = document.getElementById("parent");

// Parent
console.log("parentElement:", para.parentElement);
console.log("parentNode:", para.parentNode);

// Children of p
console.log("children:", para.children); // Empty HTMLCollection

// Children of parent div
console.log("parent children:", parent.children);

// First and Last Child
console.log("firstElementChild:", parent.firstElementChild);
console.log("lastElementChild:", parent.lastElementChild);

// Siblings
console.log("nextElementSibling:", para.nextElementSibling);
console.log("previousElementSibling:", para.previousElementSibling);

// All child nodes (includes text nodes)
console.log("childNodes:", parent.childNodes);

// Closest ancestor
console.log("closest div:", para.closest("#parent"));