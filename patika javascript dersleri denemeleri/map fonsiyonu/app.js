
let users = ["AKIF","MehmEt","kiraz","YamAHA"]

const lower = users.map((item)=> item.toLowerCase())

console.log(lower)

const deneme = users.map((item)=>{
    return {username:`${item}`,ilkkarakter:`${item[0]}`}
})
console.log(deneme)