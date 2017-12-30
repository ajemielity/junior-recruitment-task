let toDoItems = JSON.parse(localStorage.getItem('toDoItems')),
  textArea = document.getElementById('add-text-area')


window.onload = function() {

  let dataFromAPI

  /* GET TO-DO ITEMS FROM API */
  function get(url) {
    return new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      request.open('GET', url);
      request.onload = function() {
        if (request.status === 200) {
          resolve(request.response);
        }
        else {
          reject(Error(request.statusText));
        }
      };
      request.onerror = function() {
        reject(Error("Network Error"));
      };
      request.send();
    });
  }

  get('https://todo-simple-api.herokuapp.com/todos?page=1&page_size=10').then(function(response) {
    if (localStorage.hasOwnProperty('toDoItems')) {
      console.log('data in storage')
    } else {    //save data from API in localStprage
      dataFromAPI = JSON.parse(response).data
      localStorage.setItem('toDoItems', JSON.stringify(dataFromAPI));
    }
/*    return toDoItems*/
  }, function(error) {
    console.error("Failed!", error);
  })
}

/*ADD TO-DO ITEMS FROM API TO TABLE*/
function updateToDoTable()  {
  toDoItems = JSON.parse(localStorage.getItem('toDoItems'))
  toDoItems.map(function (toDoItem) {
    let tasksList = document.getElementById('tasksList'),
      taskRow = document.createElement('tr')

    tasksList.appendChild(taskRow)
    taskRow.innerHTML = `<td><input type="checkbox" onchange="clickCheckbox(this)"></td><td>${toDoItem.description}</td><td><button class="delete-btn" onclick="deleteItem(this)"><img class="trash-img" src="img/trash-active.png" alt="delete"/></button></td>`
  })
}
updateToDoTable()

/* ADD TEXT AREA WHEN USER CLICK PLUS-BUTTON */
addTextArea = () => {
  textArea.style.display = "block"
}

/* ADD NEW TASK TO TABLE */
textArea.addEventListener('keypress', function (e) {
  let key = e.which || e.keyCode;
  if (key === 13) { // 13 is enter
    console.log('enter')
    addNewTask()
  }
});

addNewTask = () => {
  let toDoItems = JSON.parse(localStorage.getItem('toDoItems'))
  toDoItems.push({description: textArea.value, isComplete: false})
  console.log(toDoItems)
  localStorage.setItem('toDoItems', JSON.stringify(toDoItems));
  hideTextArea = () => {
    textArea.style.display = "none"
    textArea.value = ''
    console.log('none')
  }
  hideTextArea()
  let tasksList = document.getElementById('tasksList')
  tasksList.innerHTML = ''
  updateToDoTable()
}

toDoItems = JSON.parse(localStorage.getItem('toDoItems'))

/* DELETE ITEM FROM LIST */
deleteItem = (e) => {   /* e it's clicked button */
  e.parentElement.parentElement.remove()    /* remove taks = remove table row */
}

/* MARK ITEM AS DONE/UNDONE */
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