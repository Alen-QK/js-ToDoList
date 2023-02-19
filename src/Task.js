import getCount from "./getcount";
export default class Task {
    constructor(taskDom, taskInfo, tasksBox) {
        this.taskDom = taskDom;
        this.taskInfo = taskInfo;
        this.parent = tasksBox;
    }

    creatTask() {
        // task's text
        let curDom = this.taskDom;
        let taskText = document.createElement('div');
        taskText.setAttribute('id', 'taskText');
        taskText.innerHTML = this.taskInfo;
        // checkbox of single task
        let checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('id', 'checkBox');
        checkBox.addEventListener('click', function () {
            if (checkBox.checked) {
                taskText.style.textDecoration = 'line-through';
                taskText.style.fontStyle = 'italic';
                taskText.style.opacity = '0.5';
            } else {
                taskText.style.textDecoration = 'none';
                taskText.style.fontStyle = 'normal';
                taskText.style.opacity = '1.0';
            }
        });
        // del button of single task
        let deleteButton = document.createElement('input');
        deleteButton.setAttribute('type', 'button');
        deleteButton.setAttribute('id', 'deleteButton');
        deleteButton.addEventListener('click', function () {
            curDom.style.display = 'none';
            let countEle = document.getElementById('countEle');
            let count = getCount();
            count--;
            document.cookie = `count=${count}; `;
            countEle.innerHTML = `You still have ${count} task is pending! Fight on!`;
        })

        this.taskDom.appendChild(checkBox);
        this.taskDom.appendChild(deleteButton);
        this.taskDom.appendChild(taskText);
    }

    appendTask() {
        this.parent.appendChild(this.taskDom);
    }
}