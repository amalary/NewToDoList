# NewToDoList

HTML Code Overview
The HTML code for this todo list app contains a header and main section. The header includes the app title and a form for adding new tasks. The main section includes a section for displaying tasks.

Form Element
The form element with an ID of "new-task-form" allows users to add new tasks to the list. It contains two input elements:

The first input element is a text input with an ID of "new-task-input" and a placeholder that prompts users to enter a task.
The second input element is a submit button with an ID of "new-task-submit" and a value of "Add task".
Task List Section
The main section of the HTML code includes a section with a class of "task-list" and an ID of "tasks". This section will be populated with the list of tasks.

Task Element
Each task in the list will be displayed using a task element with a class of "task". Each task element will contain two child elements:

The first child element is a div with a class of "content". This div contains a text input element with a class of "text". The text input will display the name of the task.
The second child element is a div with a class of "actions". This div contains two button elements. One button has a class of "edit" and will allow users to edit the task. The other button has a class of "delete" and will allow users to delete the task.


JavaScript Code Overview
The JavaScript code for this todo list app is responsible for adding and removing tasks from the list. It listens for events on the form and buttons, and dynamically creates HTML elements to display the tasks.

Event Listeners
The window.addEventListener('load', ...) method is used to ensure that the JavaScript code is executed after the HTML page has loaded. It contains the following event listeners:

The form.addEventListener('submit', ...) method listens for the submission of the form. It creates a new task element and appends it to the list if the input field is not empty.
The task_edit_element.addEventListener('click', ...) method listens for a click on the "Edit" button. It allows users to edit the task name by removing the "readonly" attribute from the input field, changing the button text to "Save", and focusing the cursor on the input field. If the button text is "Save", the task name is updated, and the input field is made read-only again.
The task_delete_element.addEventListener('click', ...) method listens for a click on the "Delete" button. It removes the task element from the list.
Task Element
The const task_element = document.createElement("div") method creates a new task element with a class of "task". It contains two child elements:

The const task_content_element = document.createElement("div") method creates a div with a class of "content". It contains an input field with a class of "text" that displays the name of the task. The input field is set to read-only by default.
The const task_actions_element = document.createElement("div") method creates a div with a class of "actions". It contains two button elements. One button has a class of "edit" and will allow users to edit the task. The other button has a class of "delete" and will allow users to delete the task.
Integration with HTML
The JavaScript code is integrated with the HTML code through the use of query selectors. The const form = document.querySelector('#new-task-form') method selects the form element with an ID of "new-task-form". The const input = document.querySelector("#new-task-input") method selects the input element with an ID of "new-task-input". The const list_element = document.querySelector("#tasks") method selects the div element with an ID of "tasks". The task element is appended to this div element.