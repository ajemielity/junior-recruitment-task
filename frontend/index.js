/* ADD TEXT AREA WHEN USER CLICK PLUS-BUTTON */
addTextArea = () => {
  document.getElementById('add-text-area').style.display = "block"
}

/* DELETE ITEM FROM LIST */
deleteItem = (e) => {   /* e it's clicked button */
  e.parentElement.remove()    /* remove parent of the button (li) */
}


/*MARK ITEM AS DONE/UNDONE*/
clickCheckbox = (e) => {    /* e it's clicked checkbox */
  const parent = e.parentElement    /* parent of the checkbox = li */
  if (e.checked) {    /*change li styles if checkbox is checked */
    parent.style.color = "#9eb2c0"
    parent.style.textDecoration = "line-through"
  } else {
    parent.style.color = "#2e3641"
    parent.style.textDecoration = "none"
  }
}


/*GET TO-DO ITEMS FROM API*/
const url = "https://todo-simple-api.herokuapp.com/todos?page=1&page_size=10"
const xhr  = new XMLHttpRequest()
let toDoItems
xhr.open('GET', url, true)  // true for asynchronous
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    toDoItems = toDoItems = JSON.parse(xhr.responseText); //change responses from text to objects
    return toDoItems
  }
}
xhr.send(null);