//hard coded
let losTodos = ['eat', 'workout', 'drink water', 'sleep', 'study'];

// let writeTodos = document.querySelectorAll('.todos');
// writeTodos[0].textContent = 'napp';
function writeAlgo() {
    let write = document.getElementsByClassName('todos');
    write[0].innerHTML = losTodos;

}