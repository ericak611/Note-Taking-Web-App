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
  save.innerHTML = 'save'; 
  
  textarea.innerHTML ="Write title \nWrite something here...";

  save.addEventListener('click', (e) => {addNote(e.target)});
  
  noteTakingArea.appendChild(textarea);
  noteTakingArea.appendChild(save);
  noteTakingArea.appendChild(cancel);

  createNoteArea.appendChild(noteTakingArea);
}

function readNote(el) {
  const readNoteArea = document.querySelector('.read-note-area');
  const note = notes.find(obj => {
    return obj.title === el.textContent;
  });
  
  const section = document.createElement('section');
  const closeBtn = document.createElement('button');

  section.innerHTML = '<pre>' + note.title + '\n' + note.noteBody + '</pre>';
  
  closeBtn.innerHTML = 'close';
  closeBtn.addEventListener('click', (e) => {removeArea(e.target)});

  section.appendChild(closeBtn);
  readNoteArea.appendChild(section);
}