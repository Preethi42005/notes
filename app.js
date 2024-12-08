function createnote(){
  const notes =document.querySelector(".notes");
  const notecontainer = document.createElement("div");
  notecontainer.classList.add("notes-container");
  const notecontent = document.createElement("div");
  notecontent.classList.add("notes-content");
  notecontent.contentEditable=true;
  notecontent.textContent="new note";
  const noteactions = document.createElement("note-action");
  noteactions.classList.add("note-action");
  const deletebutton =document.createElement("button");
  deletebutton.classList.add("delete-note");
  deletebutton.textContent="delete";
  deletebutton.onclick= function(){
    notecontainer.remove();
}
noteactions.appendChild(deletebutton);
notecontainer.appendChild(notecontent);
notecontainer.appendChild(noteactions);
notes.appendChild(notecontainer);
}
function deletenote(button){
const notecontainer = button.closest(".notes-container");
    notecontainer.remove();
  //alert("fhfh");
  
}