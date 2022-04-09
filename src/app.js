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

function addNoteArea() {
  const noteTakingArea = document.createElement('section');

  const textarea = document.createElement('textarea');
  const cancel = document.createElement('button');
  const save = document.createElement('button');

  cancel.innerHTML = 'cancel';
  cancel.addEventListener('click', (e) => {removeArea(e.target)});
