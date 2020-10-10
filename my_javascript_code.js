// creating a task list in JavaScript

document.addEventListener('DOMContentLoaded', function(){

  document.querySelector("#new_task").onsubmit = function(){

    const li = document.createElement('li');
    
    let task_text = document.querySelector('#task').value;
    let new_task_html = ` <span> ${tast_text} </span>
                          <button class="remove"> Remove </button>`;

    li.innerHTML = new_task_html;
    
    li.innerHTML = document.querySelector('#task').value;
    document.querySelector('#tasks_list').append(li);
    document.querySelector('#task').value = '';
    return false;

  }

});
