let rootNode = document.getElementById('root');

// Your code goes here
const maxItems = 10;
let counter = 0;
let el;
function addElement(){
    let li = document.createElement('li');
    let inputValue = document.getElementById('addForm').value;
    let text = document.createTextNode(inputValue);
    li.appendChild(text);
    li.setAttribute('draggable', true);
    li.setAttribute('class', 'list-item');
    if (inputValue === '') {
        document.getElementById('addButton').disabled;
      } else {
        document.getElementById('listItems').appendChild(li);
        document.getElementById('addForm').value = '';
      }
    let delSpan = document.createElement('span');
    let deleteIcon = document.createElement('i');
    let deleteIconText = document.createTextNode('delete');
    deleteIcon.className = 'material-icons';
    delSpan.className = 'delete';
    deleteIcon.appendChild(deleteIconText);    
    delSpan.appendChild(deleteIcon);
    li.appendChild(delSpan);
    deleteIcon.setAttribute('onclick', 'deleteList()');
    //check
    let checkBox = document.createElement('span');
    let checkBoxIcon = document.createElement('i');
    let checkBoxIconText = document.createTextNode('check_box_outline_blank');
    checkBoxIcon.className = 'material-icons';
    checkBoxIcon.setAttribute('onclick', 'checkList()');
    checkBox.className = 'not-check';
    checkBoxIcon.appendChild(checkBoxIconText);
    checkBox.appendChild(checkBoxIcon);
    li.insertBefore(checkBox, text);
    counter++;
    count();
}
function count() {
    if (counter === maxItems) {
        document.querySelector('input').disabled = true;
        document.getElementsByClassName('addBtn').disabled = true;
        document.getElementById('alert').innerHTML = `Maximum item per list are created`;
    } else {
        document.querySelector('input').disabled = false;
        document.getElementById('alert').innerHTML = ``;
    }
  }
function deleteList() {
    let close = document.getElementsByClassName('delete');
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = 'none';
        }
    counter--;
    count();
    }
}
function checkList(){
    let unchecked = document.getElementsByClassName('not-check');
  for (let i = 0; i < unchecked.length; i++) {
    unchecked[i].onclick = function() {
      let unchecked = this;
      unchecked.style.display = 'none';
      let li = document.querySelectorAll('li');
      let text = li.text;
      let checkBox = document.createElement('span');
      let checkIcon = document.createElement('i');
      let checkTxt = document.createTextNode('check_box');
      checkBox.className = 'checked';
      checkIcon.className = 'material-icons';
      checkIcon.appendChild(checkTxt);
      checkBox.appendChild(checkIcon);
      li[i].insertBefore(checkBox, unchecked);
    };
  }
}