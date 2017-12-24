window.onload = function() {


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
    console.log("Success!", response);
    const toDoItems = JSON.parse(response).data    //change response to objects and remove array
    console.log(toDoItems)
/*    return toDoItems*/
  }, function(error) {
    console.error("Failed!", error);
  })


  /*ADD TO-DO ITEMS FROM API TO TABLE*/
  function updateToDoTable(toDoItems)  {
    console.log(toDoItems)
    this.tasks = toDoItems
    console.log(this.tasks)
    this.tasks.map(function (task) {
      console.log(task)
      const tasksList = document.getElementById('tasksList')
      const taskRow = document.createElement('tr')
      tasksList.insertRow(taskRow, tasksList.firstChild)
    })
  }
  updateToDoTable()
}

/* ADD TEXT AREA WHEN USER CLICK PLUS-BUTTON */
addTextArea = () => {
  document.getElementById('add-text-area').style.display = "block"
}

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