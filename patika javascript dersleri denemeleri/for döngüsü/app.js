const users = ["mehmet","akif","kiraz"];
 

const usersList = document.querySelector('#userListDOM');
for(i=0;i<users.length;i++){

    const liDOM = document.createElement('li');
    liDOM.innerHTML= users[i];
    usersList.appendChild(liDOM);

}