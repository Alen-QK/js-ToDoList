import Task from "./Task";
import getCount from "./getcount";
import './static/css/inputform.css'
import './static/css/tasks.css'

export default function todotask() {
    // box of input elements
    let inputBox = document.createElement('div');
    inputBox.classList.add('inputBox');
    // input element of task
    let inputTask = document.createElement("input");
    inputTask.classList.add('inputTask');
    inputTask.setAttribute('id', 'inputTask');
    inputTask.placeholder = 'Type your task!';
    // submit button
    let submitButton = document.createElement('input');
    submitButton.classList.add('submitButton');
    submitButton.setAttribute('type', 'button');
    submitButton.value = '+';
    // tasksBox
    let tasksBox = document.createElement('div');
    tasksBox.classList.add('tasksBox');
    tasksBox.setAttribute('id', 'tasksBox');
    // count pending tasks
    let count = 0;
    document.cookie = "count=0; ";
    let countEle = document.createElement('div');
    countEle.setAttribute('id', 'countEle');
    countEle.innerHTML = `You still have ${count} task is pending! Fight on!`;

    submitButton.addEventListener('click', function () {
        let currentInput = document.getElementById('inputTask').value;

        if (currentInput === '') {
            alert('You have to write something!');
        } else {
            let cur_count = getCount();
            cur_count++
            document.cookie = `count=${cur_count}; `;
            tasks(currentInput);
            inputTask.value = '';
        }
    })

    tasksBox.appendChild(countEle);
    inputBox.appendChild(inputTask);
    inputBox.appendChild(submitButton);
    document.body.appendChild(inputBox);
    document.body.appendChild(tasksBox);
}



function tasks(curTask) {
    let tasksBox = document.getElementById('tasksBox');
    let countEle = document.getElementById('countEle');
    let count = getCount();
    countEle.innerHTML = `You still have ${count} task is pending! Fight on!`;
    // single line of per task
    let singleTaskBox = document.createElement('div');
    singleTaskBox.classList.add('singleTaskBox');
    let task = new Task(singleTaskBox, curTask, tasksBox);
    task.creatTask();
    task.appendTask();
}