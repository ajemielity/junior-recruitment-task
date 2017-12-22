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