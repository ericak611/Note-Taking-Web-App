const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

const createNoteArea = document.querySelector('.create-note-area');
const plusButton = document.querySelector('.icons');

plusButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (createNoteArea.children.length <= 1) {
      addNoteArea();
    }
});