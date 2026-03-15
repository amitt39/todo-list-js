const taskInput = document.getElementById('task-input')
const addTask = document.getElementById('add_task')
const listContainer = document.querySelector('.list-container')
const errMsgEl = document.querySelector(".errMsg")
const delAllEl = document.querySelector(".delAll")
const NoTaskMsgEl = document.querySelector(".NoTaskMsg")

function displayTaks() {

  let taskText = taskInput.value.trim()

  if (taskText === '') {
    errMsgEl.textContent = "Enter task!"
    return
  }

  errMsgEl.textContent = ''

  let li = document.createElement('li')
  li.textContent = taskText

  let delBtn = document.createElement('button')
  delBtn.innerText = 'Delete'

  delBtn.addEventListener('click', () => {
    li.remove()

    if (listContainer.children.length === 0) {
      NoTaskMsgEl.style.display = 'block'
    }
  })

  li.append(delBtn)
  listContainer.append(li)

  NoTaskMsgEl.style.display = 'none'

  taskInput.value = ''
}

addTask.addEventListener('click', displayTaks)

delAllEl.addEventListener('click', () => {
  listContainer.innerHTML = ''
  NoTaskMsgEl.style.display = 'block'
})
