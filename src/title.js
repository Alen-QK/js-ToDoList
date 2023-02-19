import todotask from "./tasks";
import "./static/css/title.css"
export default function create() {
    let titleBox = document.createElement('div');
    titleBox.classList.add('titleBox')
    let toDoTitle = document.createElement('h1');
    toDoTitle.innerText = 'To Do List';
    titleBox.appendChild(toDoTitle);
    document.body.appendChild(titleBox);
    todotask();
}