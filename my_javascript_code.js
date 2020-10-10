// creating a task list in JavaScript

document.addEventListener('DOMContentLoaded', function(){

  document.querySelector("#new_task").onsubmit = function(){

    const li = document.createElement('li');
    li.innerHtml = document.querySelector('#task').value;
    document.querySelector('#tasks_list').append(li);
    document.querySelector('#task').value = '';
    return false;

  }

});
