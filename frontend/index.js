/*GET TO-DO ITEMS FROM API*/
const url = "https://todo-simple-api.herokuapp.com/todos?page=1&page_size=10"   //Path /todos?page=1&page_size=10 - Fetch all todos
const xhr  = new XMLHttpRequest()
let toDoItems
xhr.open('GET', url, true)  // true for asynchronous
xhr.onreadystatechange = function () {    //function to be executed when the readyState changes
  if (xhr.readyState === 4 && xhr.status === 200) {   //readyState === 4 means DONE, operation is complete, status === 200 means "OK"
    toDoItems = toDoItems = JSON.parse(xhr.responseText)    //change responses from text to objects
    return toDoItems
  } else {
    return false
  }
}
xhr.send(null);


/* ADD TEXT AREA WHEN USER CLICK PLUS-BUTTON */
addTextArea = () => {
  document.getElementById('add-text-area').style.display = "block"
}

/* DELETE ITEM FROM LIST */
deleteItem = (e) => {   /* e it's clicked button */
  e.parentElement.parentElement.remove()    /* remove taks = remove table row */
}


/*MARK ITEM AS DONE/UNDONE*/
clickCheckbox = (e) => {    /* e it's clicked checkbox */
  const taskRow = e.parentElement.parentElement    /* find table row */
  if (e.checked) {    /*change task row styles if checkbox is checked */
    taskRow.style.color = "#9eb2c0"
    taskRow.style.textDecoration = "line-through"
  } else {
    taskRow.style.color = "#2e3641"
    taskRow.style.textDecoration = "none"
  }
}

