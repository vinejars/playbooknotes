//Add Note

let notes ={
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
    11: null,
    12: null,
    13: null,
    14: null,
    15: null,
    16: null,
    17: null,
    18: null,
    19: null,
    20: null,
    21: null,
    22: null,
    23: null,    
    24: null,
    25: null,
    26: null,
    27: null,
    28: null,
    29: null,
    30: null,
    31: null,    
    32: null, 
}

let currentNote;
let noteArray =[]

const chooseNote = function(element){
    currentNote = element
if(noteArray.length < 2 && !noteArray.includes(currentNote)){
    currentNote.style.borderStyle='solid'
    currentNote.style.borderColor= "chartreuse"
    noteArray.push(currentNote);
} else if(noteArray.includes(currentNote)){
    currentNote.style.borderStyle='none' 
    index = noteArray.indexOf(currentNote)
    noteArray.splice(index,1)
    console.log('spliced array: ', noteArray)
} else if(noteArray.length === 2){
    noteArray = [];
    alert('You cannot select more than 2 notes at a time!')
}
currentNote = null;
}

const addNote = function(){
    if(noteArray.length === 2){
    noteArray[1].innerText = document.querySelector("input").value
    document.querySelector("input").value = ''
    } else {
    noteArray[0].innerText = document.querySelector("input").value
    document.querySelector("input").value = ''

    }
}



