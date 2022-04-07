
// fetch("./data/settings.json").then(response=>{
//     return  response.json()
// }).then(responseJSON => {
//     console.log(responseJSON)
//     console.log(responseJSON.userName)
// }
// )
const secme = document.querySelector("#secme")
fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
{ 
 return response.json()
}
).then(respon=>
    respon.forEach(item=>{
        let LIDOM = document.createElement('li');
        LIDOM.innerHTML= item.title;
        secme.appendChild(LIDOM)
    })
    )

