var list= document.getElementById("list");
 

function addTodo(){
    var todo_item=document.getElementById("todo-item");

    // create li
    var li = document.createElement('ol')
    li.setAttribute("class"," shadow-lg  border border-dark  bg-light mt-1 pt-1 mb-1 pb-1")
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText) 

    // create delete button
    var delBtn = document.createElement("button")
    var delText= document.createTextNode("Delete")
    delBtn.setAttribute("class","gul btn btn-secondary btn-sm")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)

    //create edit button
    var editBtn = document.createElement("button")
    var editText= document.createTextNode("Edit")
    editBtn.setAttribute("class","gul btn btn-secondary btn-sm")
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.appendChild(editText)


    li.appendChild(delBtn)
    li.appendChild(editBtn)


    list.appendChild(li)
    todo_item.value=""
}

function deleteItem(e){
    e.parentNode.remove()

}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value",val)
    e.parentNode.firstChild.nodeValue = editValue

}

function deleteAll(){
    list.innerHTML = ""
}
