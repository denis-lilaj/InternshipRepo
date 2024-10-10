var ul = document.getElementById('items');
var buttonAdd = document.getElementById('add');
var buttonDelete = document.getElementById('delete');
var buttonUpdate = document.getElementById('update');

document.addEventListener('DOMContentLoaded', loadItems);

buttonAdd.addEventListener('click', function() {
    var input = document.querySelector('input[type="text"]');
    if (input.value === "") {
        alert('Please fill out the input field');
    } else {
        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        li.textContent = input.value;
        var div = document.createElement('div');
        div.className="itemRow"
        div.appendChild(checkbox);
        div.appendChild(li);
        input.value = "";
        ul.appendChild(div);
        storeItem(li.textContent);
    }
})

buttonDelete.addEventListener('click', function() {
    var checkedItems = document.querySelectorAll('input[type="checkbox"]:checked');
    for (var i = 0; i < checkedItems.length; i++) {
        var parentDiv = checkedItems[i].parentNode;
        var itemText = parentDiv.lastChild.textContent;

        removeItem(itemText);
        parentDiv.parentNode.removeChild(parentDiv);
    }
})

buttonUpdate.addEventListener('click', function() {
    var checkedItems = document.querySelectorAll('input[type="checkbox"]:checked');
    for (var i = 0; i < checkedItems.length; i++) {
        var input = document.querySelector('input[type="text"]'); 
        var parentDiv = checkedItems[i].parentNode;
        var oldText = parentDiv.lastChild.textContent;

        parentDiv.lastChild.textContent = input.value;

        removeItem(oldText);
        storeItem(input.value);
    }
});

function storeItem(item) {
    var items = JSON.parse(localStorage.getItem('items')) || [];
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
}

function removeItem(item) {
    var items = JSON.parse(localStorage.getItem('items')) || [];
    items = items.filter(function(i) {
        return i !== item;
    });
    localStorage.setItem('items', JSON.stringify(items));
}

function loadItems() {
    var items = JSON.parse(localStorage.getItem('items')) || [];
    items.forEach(function(item) {
        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        li.textContent = item;
        var div = document.createElement('div');
        div.className="itemRow";
        div.appendChild(checkbox);
        div.appendChild(li);
        ul.appendChild(div);
    });
}
