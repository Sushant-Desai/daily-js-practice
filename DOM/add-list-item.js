const input = document.getElementById("itemInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("list");

    
button.addEventListener("click",()=>{
    // create new elements
    const li=document.createElement("li");
   // Set the text of the <li> to the user's input
    li.textContent=input.value;
    //Add the <li> element to the list
    list.appendChild(li);
    // clear input once again after adding
    input.value= "";
})