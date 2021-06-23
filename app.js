

let currentNote;
let noteArray =[]

//function to select up to 2 notes

const chooseNote = function(element){
    currentNote = element
if(noteArray.length < 2 && !noteArray.includes(currentNote)){
    currentNote.style.borderStyle='double'
     currentNote.style.borderColor= "gray"
    noteArray.push(currentNote);
} else if(noteArray.includes(currentNote)){
    currentNote.style.borderStyle='none' 
    index = noteArray.indexOf(currentNote)
    noteArray.splice(index,1)
    console.log('spliced array: ', noteArray)
} else if(noteArray.length === 2){
    noteArray = [];
    alert(`You can't select more than 2 notes at a time!`)
}
currentNote = null;
}

//function to add text to selected note

const addNote = function(){
    if(noteArray.length === 2 && !noteArray[1].innerText){
    noteArray[1].innerText = document.querySelector("input").value
    document.querySelector("input").value = ''
    } else if (!noteArray[0].innerText && noteArray.length !== 2){
    noteArray[0].innerText = document.querySelector("input").value
    document.querySelector("input").value = ''
    }
    else{
        alert(`You can't add a note to a pre-existing note!`)
    }
}

//function to switch inner text of 2 selected notes

const switchNotes = function(){
    if(noteArray.length === 2){
        let text1;
        let text2;
        text1 = noteArray[0].innerText;
        text2 = noteArray[1].innerText;
        noteArray[1].innerText = text1;
        noteArray[0].innerText = text2;

    } else {
        alert(`You've gotta click 2 notes to switch 'em!`)
    }
}

//function to delete note
const deleteNote = function(){
    if(noteArray.length === 2){
    noteArray[1].innerText = null;
    } else{
    noteArray[0].innerText = null;
    }
}

//function to edit note

const editNote = function(){
    if(noteArray.length === 2 && noteArray[1].innerText){
       let newText = prompt('Please edit note below:', `${noteArray[1].innerText}`);
       console.log(newText)
       noteArray[1].innerText = newText;
        } else if (noteArray.length !== 2 && noteArray[0].innerText){
         let newText = prompt('Please edit note below:', `${noteArray[0].innerText}`)
         console.log(newText)
          noteArray[0].innerText = newText;
        } else {
            alert(`There needs to be text to edit!`)
        }
    }



