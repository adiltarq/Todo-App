
var list = document.getElementById("list");


function addTodo() {
  var todo_Item = document.getElementById("todo-item");

  // list ////////////////////////////////////
  var li = document.createElement("li");
  var liText = document.createTextNode(todo_Item.value);
  li.appendChild(liText);

  // delete button////////////////////////////////
  var delBtn = document.createElement("button");
  var delIcon = document.createElement("i")
  delIcon.setAttribute("class","fa fa-trash")
  delBtn.setAttribute("onclick", "deleteItem(this)");
  delBtn.setAttribute("class", "liBtn");
  delBtn.appendChild(delIcon);

  // edit Button/////////////////////////////////////////?
  var editBtn = document.createElement("button");
  var editicon = document.createElement("i")
  editicon.setAttribute("class","fa fa-pencil-square-o")
  editBtn.setAttribute("class", "liBtn")
  editBtn.appendChild(editicon);
  editBtn.setAttribute("onclick", "Edit(this)");



  li.appendChild(delBtn);
  li.appendChild(editBtn);

  list.appendChild(li);
  todo_Item.value = "";
}




// input ka function created by me in working

function Edit(s) {
  var editVal = prompt("Enter New Value",s.parentNode.firstChild.nodeValue);
  
  var newEditVal = document.createElement("input")
  newEditVal.setAttribute("type","text")
  newEditVal.setAttribute("value","text")

// var editValue = document.createElement("input")
// editValue.setAttribute("type","text")
// li.appendChild(editValue)

// console.log(editValue)

  s.parentNode.firstChild.nodeValue = editVal;
}

function deleteItem(a) {
  a.parentNode.remove();
}

function deleteAll() {
  list.innerHTML = "";
}