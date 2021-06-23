

let currentNote;
let noteArray =[]

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

const deleteNote = function(){
    if(noteArray.length === 2){
    noteArray[1].innerText = null;
    } else{
    noteArray[0].innerText = null;
    }
}

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



