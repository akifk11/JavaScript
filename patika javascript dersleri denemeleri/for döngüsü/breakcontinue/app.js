



// let counter = 0;

// for(;counter<10;counter++){
//     if(counter === 5){break}
//     console.log(counter)
// }
const userList=['lorem','ipsum','dolor','akif','kiraz']


let UL_DOM = document.getElementsByClassName('lorem')

let index = 0;
for(;index<userList.length;index++){

    if(userList[index]==="dolor"){break}
    let li_dom= document.createElement('li')
    li_dom.innerHTML=userList[index];
    UL_DOM.append(li_dom);
}