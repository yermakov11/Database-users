let inputUser = document.getElementById('input_user');
let sortById = document.getElementById('sortById');
let sortByAlph = document.getElementById('sortByAlph');
let addUser = document.getElementById('add_user');
let users = [];

function addList() {
    let username = inputUser.value.trim();
    if (username !== '') {
        let userId = generateUserId();
        let user = {
            id: userId,
            name: username,
        };
        users.push(user);
    }
    showUsers();
    inputUser.value = '';
}

function showUsers() {
    let userList = document.getElementById('user_list');
    userList.innerHTML = '';
    users.forEach(function (user) {
        let listItem = document.createElement('li');
        let listId = document.createElement('p');
        listItem.textContent = ` ${user.id} ${user.name} `;
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'delete';
        deleteButton.classList.add('delete_button');
        deleteButton.addEventListener('click', function () {
            var index = users.findIndex(item => item.id === user.id);
            users.splice(index, 1);
            showUsers();
        });

        listItem.appendChild(deleteButton);
        listItem.appendChild(listId);
        userList.appendChild(listItem);
    });
}
function sortUsersById(){
   let arrId=users.sort((a,b)=>a.id-b.id);
   showUsers();
   return arrId;
}
function sortUsersByAlph(){
    let arrAlph=users.sort((a,b)=>a.name.localeCompare(b.name));
    showUsers();
    return arrAlph;
}
function generateUserId() {
    var randomId = Math.ceil(Math.random() * 100);
    return randomId;
}

addUser.addEventListener('click', addList);
sortById.addEventListener('click',sortUsersById);
sortByAlph.addEventListener('click',sortUsersByAlph);
