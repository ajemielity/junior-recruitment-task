/*ADD TEXT AREA WHEN USER CLICK PLUS-BUTTON*/
addTextArea = () => {
  document.getElementById('add-text-area').style.display = "block"
}

/*DELETE ITEM FROM LIST*/
deleteItem = (e) => {   /*e it's clicked button*/
  e.parentElement.remove()   /*remove parent of the button*/
}