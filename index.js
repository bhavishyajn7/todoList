document.querySelector('form').addEventListener('submit',handleSubmitForm);
document.querySelector('ul').addEventListener('click',handleCheckorDelete);
function handleSubmitForm(e){
    e.preventDefault();
    let input=document.querySelector('input');
    if(input.value!='')
        addTodo(input.value);
    input.value='';
}

function handleCheckorDelete(e){
    if(e.target.name=='checkButton'){
        checkTodo(e);
    }
    if(e.target.name=='deleteButton'){
        deleteTodo(e);
    }
}
function checkTodo(e){
    let item=e.target.paraentNode;
    if(item.style.textDecoration=='line-through')
        item.style.textDecoration='none';
    else
        item.style.textDecoration='line-through';
}
function deleteTodo(e){
    let item=e.target.paraentNode;
    item.remove();
}
function addTodo(todo){
    let ul=document.querySelector('ul');
    let li =document.createElement('li');

    li.innerHTML=`
    <span class="todo-item">${todo}</span>
    <button name="checkbutton"><i class="fas fa-check"/>
    <button name="deleteButton"><i class="fas fa-trash"/>`;
    li.classList.add('todo-list-item');
    ul.appendChild(li);
}