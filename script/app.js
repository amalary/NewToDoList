window.addEventListener('load', ()=>{
  const form = document.querySelector('#new-task-form')
  const input = document.querySelector("#new-task-input");
  const list_element = document.querySelector("#tasks")

  form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const task = input.value;

    if(!task) {
      alert('Please fill out the task !')
      return
    }

    const task_element = document.createElement("div");
    task_element.classList.add("task");

    const task_content_element = document.createElement("div");
    task_content_element.classList.add("content");
    task_content_element.innerText = task;

    task_element.appendChild(task_content_element)

    const task_input_element = document.createElement("input")

    task_input_element.classList.add("text")
    task_input_element.type = "text";

    list_element.appendChild(task_element)
  })
})

