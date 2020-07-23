var list = document.getElementById("list");


function addTodo() {
  var todo_Item = document.getElementById("todo-item");

  // list ////////////////////////////////////
  var li = document.createElement("li");
  var liText = document.createTextNode(todo_Item.value);
  li.appendChild(liText);

  // delete button////////////////////////////////
  var delBtn = document.createElement("button");
  var DelText = document.createTextNode("DELETE");
  delBtn.setAttribute("onclick", "deleteItem(this)");
  delBtn.setAttribute("class", "liBtn");
  delBtn.appendChild(DelText);

  // edit Button/////////////////////////////////////////?
  var editBtn = document.createElement("button");
  var editBtnTxt = document.createTextNode("Edit");
  editBtn.setAttribute("class", "liBtn")
  editBtn.appendChild(editBtnTxt);
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
  console.log(newEditVal.value)

// var editValue = document.createElement("input")
// editValue.setAttribute("type","text")
// li.appendChild(editValue)

// console.log(editValue)

  s.parentNode.firstChild.nodeValue = editVal;
  console.log(s.parentNode.firstChild.NodesValue);
}

function deleteItem(a) {
  a.parentNode.remove();
}

function deleteAll() {
  list.innerHTML = "";
}