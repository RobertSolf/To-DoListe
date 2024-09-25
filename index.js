var i = 0;
const dayjs = require('dayjs');

document.getElementById('create').addEventListener('click', function(){
    i = i + 1;

    let newDiv = document.createElement('div');
    let newElement = document.createElement('input');
    let newIcon = document.createElement('i');

    document.getElementById('tasks').appendChild(newDiv);
    newDiv.classList.add('container');
    newDiv.id = 'newDiv' + i;

    document.getElementById('newDiv' + i).appendChild(newElement);
    newElement.classList.add('new-element');
    newElement.id = 'new-element' + i;
    document.getElementById('new-element' + i).placeholder = 'Add your task...';

    document.getElementById('newDiv' + i).appendChild(newIcon);
    newIcon.classList.add('bi' , 'bi-check2');
    newIcon.id = 'newIcon' + i;

    // Array of IDs for the elements
    var ids = ['newIcon1', 'newIcon2', 'newIcon3', 'newIcon4', 'newIcon5'];

    ids.forEach(function(id) {
        document.getElementById(id).addEventListener('click', function(event) {
            document.getElementById(id).style.display = "none";
            document.getElementById('newDiv' + id.slice(-1)).style.display = "none";
            document.getElementById('new-element' + id.slice(-1)).style.display = "none";
        });
    });

});

