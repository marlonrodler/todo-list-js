var objText = {};
var count = 0;

function addTodoList() {
    let todoElement = document.getElementById('todo');
    let todo = todoElement.value;

    if(todo !== ''){
        this.objText['todo' + (count += 1)] = todo;
        var str = '';

        for (const key in this.objText) {
            str += `<div id=${key} style='width: 100%; display: flex; flex-direction: row; justify-content: space-between; padding: 32px; margin: 12px 0; background-color: rgb(50 50 93 / 8%); box-shadow: rgb(50 50 93 / 25%) 0px 6px 12px -2px, rgb(0 0 0 / 30%) 0px 3px 7px -3px; border-radius: 10px;'>`;
            str += `<p>${this.objText[key]}</p>`;
            str += `<button style="margin: auto 12px;" onclick="removeTodoList(${key})">remove</button>`;
            str += '</div>';
        }
    
        var todoList = document.getElementById('todoList');
        todoList.innerHTML = str;
    
        todoElement.value = '';

        console.log('objText:',objText);
    }
}

function removeTodoList(item) {
    delete this.objText[item.id];
    item.remove();
}