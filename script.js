    
    document.getElementById('add-button').addEventListener('click', function() {
        var value = document.getElementById('item').value;
        if (value) {
            addItem(value);
            document.getElementById('item').value = '';
        }
    });

    function addItem(text) {
        var list = document.getElementById('todo-list');

        var item = document.createElement('li');
        item.classList.add('item');

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            item.style.textDecoration = this.checked ? 'line-through' : 'none';
        });

        var deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', function() {
            list.removeChild(item);
        });

        item.appendChild(checkbox);
        item.appendChild(document.createTextNode(text));
        item.appendChild(deleteBtn);
        list.appendChild(item);
    }
