function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

//Exercise 1
let daysParent = document.querySelector("#days");

function createDays() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  for (let i = 0; i < dezDaysList.length; i += 1){
    let day = dezDaysList[i];
    let dayItemList = document.createElement('li');
    dayItemList.innerHTML = day;
    dayItemList.className = 'day'
    daysParent.appendChild(dayItemList);
  }
  
}
createDays();

let daysList = document.querySelectorAll('#days li');
for (let i = 0; i < daysList.length; i += 1) {
  if (
    (daysList[i].innerText === '4') ||
    (daysList[i].innerText === '11') ||
    (daysList[i].innerText === '18') ||
    (daysList[i].innerText === '25')) {
    daysList[i].classList += ' friday';
  }
  if ((daysList[i].innerText === "25") ||
    (daysList[i].innerText === '24') ||
    (daysList[i].innerText === '31')) {
     daysList[i].classList += " holiday";
  }
}


//Exercise 2
let buttonsParent = document.querySelector(".buttons-container");

function addHolidays(string) {
  let holidayButton = document.createElement("button");
  holidayButton.innerHTML = string;
  holidayButton.setAttribute("id", "btn-holiday");
  buttonsParent.appendChild(holidayButton);
}
addHolidays('Feriados');

//Exercise 3
let holidayButton = document.querySelector("#btn-holiday");
holidayButton.addEventListener("click", changeHolidayColor);

function changeHolidayColor() {
  let holidays = document.querySelectorAll('.holiday');
  for (let i = 0; i < holidays.length; i += 1) {
    if (holidays[i].style.backgroundColor !== 'green') {
      holidays[i].style.backgroundColor = 'green';
    } else if (holidays[i].style.backgroundColor === 'green') {
      holidays[i].style.backgroundColor = "rgb(238, 238, 238)";
    }
  }
}

//Exercise 4
function itsFriday(string) {
  let fridayButton = document.createElement('button');
  fridayButton.innerHTML = string;
  fridayButton.setAttribute('id', 'btn-friday');
  buttonsParent.appendChild(fridayButton);
}

itsFriday('Sexta-feira');

//Exercise 5
let fridayBtn = document.querySelector('#btn-friday');
fridayBtn.addEventListener("click", fridayDay);

function fridayDay() {
  let fridays = document.querySelectorAll('.friday');
  for (let i = 0; i < fridays.length; i += 1){
    if (fridays[i].innerHTML !== 'TGIF') {
      fridays[i].innerHTML = 'TGIF';
    } else if (fridays[i].innerHTML === 'TGIF') {
      if (i === 0) {
        fridays[i].innerHTML = '4';
      } else if (i === 1) {
        fridays[i].innerHTML = "11";
      } else if (i === 2) {
        fridays[i].innerHTML = "18";
      } else if (i === 3) {
        fridays[i].innerHTML = "25";
      }
    }
  }
}

//Exercise 6
for (let i = 0; i < daysList.length; i += 1) {
  daysList[i].addEventListener("mouseover", dayZoomIn);
  daysList[i].addEventListener("mouseleave", dayZoomOut);
}

function dayZoomIn(event) {
  event.target.style.fontSize = '40px';
}

function dayZoomOut(event) {
  event.target.style.fontSize = "20px";
}

//Exercise 7
let tasksParent = document.querySelector('.my-tasks');
function tasks(string) {
  let taskItem = document.createElement('span');
  taskItem.innerHTML = string;
  tasksParent.appendChild(taskItem);
  
}
tasks('Study');


//Exercise 8
function taskLabel(color) {
  let labelElement = document.createElement('div');
  labelElement.style.backgroundColor = color;
  labelElement.className = 'task';
  tasksParent.appendChild(labelElement);
}
taskLabel('blue');

//Exercise 9
let taskElement = document.querySelectorAll('.task');
for (let i = 0; i < taskElement.length; i += 1){
  taskElement[i].addEventListener("click", selectTask);
}

function selectTask(element) {
  if (element.target.className !== "task selected") {
    element.target.className = "task selected";
  } else if (element.target.className === "task selected") {
    element.target.className = "task";
  }
}

//Exercise 10
for (let i = 0; i < daysList.length; i += 1){
  daysList[i].addEventListener('click', atributeTask);
}

function atributeTask(event) {
  for (let i = 0; i < daysList.length; i += 1){
    let taskSelected = document.querySelector('.selected').style.backgroundColor;
    if (event.target.style.color !== taskSelected) {
      event.target.style.color = taskSelected;
    } else if (event.target.style.color === taskSelected) {
      event.target.style.color = 'rgb(119, 119, 119)';
    }
  }
}


//Bonus Exercise
let input = document.querySelector('#task-input');
let btnAdd = document.querySelector('#btn-add');
let tasksList = document.querySelector('.task-list');
input.addEventListener("keyup", newTask);
btnAdd.addEventListener("click", newTask2);

function newTask(event) {
  input.setAttribute('value', '');
  if (!input.value) {
    alert('Nenhum compromisso adicionado!')
  } else if (event.key === 'Enter') {
    addTaskToSessionStorage();
  } 
  
}

function newTask2(event) {
  input.setAttribute("value", '');
  console.log(event)
  if (!input.value) {
    alert("Nenhum compromisso adicionado!");
  } else {
    addTaskToSessionStorage();
  }
}
window.onload = firstInsertTaskInDOM();

function firstInsertTaskInDOM() {
  const myTaskList = JSON.parse(sessionStorage.getItem("tasks"));
  for (let i = 0; i < myTaskList.length; i += 1){
    const taskText = myTaskList[i];
    const myTask = document.createElement("li");
    myTask.innerText = taskText;
    tasksList.appendChild(myTask);
  }  
}

function addTaskToSessionStorage() {
  if (sessionStorage.getItem("tasks") === null) {
    sessionStorage.setItem("tasks", JSON.stringify([]));
  }
  const oldList = JSON.parse(sessionStorage.getItem("tasks"));
  console.log(oldList);
  const task = input.value;
  oldList.push(task);
  sessionStorage.setItem("tasks", JSON.stringify(oldList));
  insertTaskInDOM();
  input.value = '';
}

function insertTaskInDOM() {
  const myTaskList = JSON.parse(sessionStorage.getItem("tasks"));
  const listLength = myTaskList.length - 1;
  const taskText = myTaskList[listLength];
  const myTask = document.createElement("li");
  myTask.innerText = taskText;
  tasksList.appendChild(myTask);
  
}