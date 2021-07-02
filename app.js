// console.log('hello Everyone');
displayNotes();
//If user adds a notes add it to the Local Storage!!

let addBtn=document.getElementById('addBtn');
addBtn.addEventListener('click',function(e){
    let addTxt=document.getElementById('addTxt');
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
notesObj.push(addTxt.value);
localStorage.setItem('notes',JSON.stringify(notesObj));
addTxt.value='';
// console.log(notes);
displayNotes();
});


//Function to display Notes
function displayNotes(){
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html='';
    notesObj.forEach(function(element,index) {
        html+=`
        <div class="noteCard my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>
        `;
        
    });
    let notesElem=document.getElementById('notes');
    if(notesObj.length != 0){
        notesElem.innerHTML= html;
    }
    else{
        notesElem.innerHTML=`Nothing to Show! Use "Add  note" section to add notes.`;
    }

}


// function to delete a note

function deleteNote(index) {
    // console.log('I am deleting',index);

    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    displayNotes();
    
}

//Search button JS

let search=document.getElementById('searchTxt');
search.addEventListener("input",function () {
    let inputVal=search.value.toLowerCase();
//    console.log('Search Fired',inputVal); 

   let noteCard=document.getElementsByClassName('noteCard');
   Array.from(noteCard).forEach(function (element) {
       let cardTxt=element.getElementsByTagName("p")[0].innerText;
       if (cardTxt.includes(inputVal)) {
           element.style.display="block";
           
        }
        else{
           element.style.display="none";

       }
       
   })
})


