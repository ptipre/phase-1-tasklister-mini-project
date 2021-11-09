document.addEventListener("DOMContentLoaded", () => {

  let form = document.querySelector('form');
  form.addEventListener('submit', buildTask);
});

function buildTask(e) {
  e.preventDefault();
  let form = document.querySelector('form')
  let userInput = document.getElementById('new-task-description').value
  let taskList = document.getElementById('tasks')
  let li = document.createElement('li');
  let btn = document.createElement('button')

  btn.addEventListener('click',  e => {
    let parent = e.target.parentNode;
    parent.remove();
  })

  li.textContent = `${userInput}   `;
  btn.textContent = 'x'

  li.append(btn)
  taskList.appendChild(li);
  form.reset();
}


