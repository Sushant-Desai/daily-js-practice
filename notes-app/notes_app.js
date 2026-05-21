

// here we are selecting HTML elements by thire id and storing them in variables for later use in our JavaScript code.
const notesInput = document.getElementById('note-input');
const addNoteBtn = document.getElementById('add-note-btn');
const notesContainer = document.getElementById('notes-container');
const modal = document.getElementById('message-modal');
const modalText = document.getElementById('modal-text');
const modalCloseBtn = document.getElementById('modal-close-btn');

// create array to store notes - because we want to keep all notes 
let notes = [];

// Add button event 
// runs code when we click the button -  addEventListener("click")

addNoteBtn.addEventListener("click", function () {
    const noteText = notesInput.value; // value get text from input

    if (noteText.trim() === "") { // here we are checking if the input is empty or contains only whitespace characters. If it does, we display a custom message box and return from the function.
        showMessage("Please enter a note before adding.");
        return;
    }
    notes.push(noteText);
    console.log(notes); // here we are printing values on console now we need to show on screen so add function for that
    // for display on screen
    displayNotes();
    notesInput.value = ""; // after adding note we want to clear the input field so we set value to empty string
});

// function to display notes on screen
function displayNotes() {
    notesContainer.innerHTML = "";

    // for (let n of notes) {

    //     // template literal - to create html structure for each note and add it to the notes container
    //     notesContainer.innerHTML += `
    //     <div class ="note">
    //         <p>${n}</p>
            
    //     </div>
    //     `;


    // now we add delete button for each note
    for (let i = 0; i < notes.length; i++) {
        const n = notes[i];
        notesContainer.innerHTML += `
        <div class ="note">
            <p>${n}</p>
            <button onclick="deleteNote(${i})">Delete</button>
        </div>
        `;
    }
    
    deleteNote = function (index) {
        notes.splice(index, 1); // here we are removing the note at the specified index from the notes array using the splice method.
        displayNotes(); // after deleting the note we need to update the display by calling the displayNotes function again to reflect the changes on the screen.
    
        // localstorage - to save notes in browser even after refreshing the page
        localStorage.setItem("notes", JSON.stringify(notes)); // here we are saving the notes array to the browser's local storage. We use JSON.stringify to convert the notes array into a string format that can be stored in local storage.
    }

}

function showMessage(message) {
    modalText.textContent = message;
    modal.classList.remove('hidden');
}

modalCloseBtn.addEventListener('click', function () {
    modal.classList.add('hidden');
});

modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
});

