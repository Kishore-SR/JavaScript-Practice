let taskList = [];
let taskDates = [];
let inputValue;

displayTask();

function addTask() {
  //For task value
  let inputEle = document.querySelector("#todo-input");
  inputValue = inputEle.value;

  //For Date
  let dateEle = document.querySelector("#date-input");
  let dateValue = dateEle.value;

  if (inputValue.length > 0) {
    taskList.push(inputValue); //Adding task into array
    taskDates.push(dateValue); //Adding due date into array
    inputEle.value = "";
    dateEle.value = "";
    displayTask();
  } else {
    alert("Enter Task First");
  }
}

function displayTask() {
  let tasksEle = document.querySelector(".task-container");
  let htmlDisplay = "";

  for (let i = 0; i < taskList.length; i++) {
    htmlDisplay += `
             <div>
                <span> ${taskList[i]}  ${taskDates[i]}</span>
                <button onclick="taskList.splice(${i}, 1);
                taskDates.splice(${i},1);
                displayTask();
                ">Delete</button>
            </div>
            `;
  }
  tasksEle.innerHTML = htmlDisplay; // To display the task in the todo container
}
