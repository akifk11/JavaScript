const numbers=[1,2,3,5,7]

// let toplam=0
// numbers.forEach(number=>toplam+=number)
// console.log(toplam)

let toplam1=numbers.reduce(function(acc,number){
    return acc+number
},5)
console.log(toplam1)

const basket=[
    {
        name:"iphone 8",
        price:7000
    },
    {
        name:"macbook air",
        price:14500
    },
    {
        name:"airpods",
        price:3000
    },
    {
        name:"apple tablet",
        price:9000
    }
]
let sum=basket.reduce((acc,item)=>(
    acc+item.price)
    ,0)
console.log(sum)

const names = ["akif","tuba","akif","esra","mercan","esra","akif"]

const sayim= names.reduce((allNames,name)=>{
if(name in allNames){
    allNames[name]++
} else{
    allNames[name]=1
}
return allNames
},{})
console.log(sayim)

const product=[
    {
        name:"bilgisayar hp",
        marka:"hp"
    },
    {
        name:"mouse eski",
        marka:"logi"
    },
    {
        name:"mouse yeni",
        marka:"logi"
    },
    {
        name:"bilgisayar apple",
        marka :"apple"
    }
]


const group='marka'
const gruplandirma=product.reduce((grup,product)=>{
    const key=product[group];
    if(!grup[key]){
        grup[key]=[]
        grup[key].push(product)
    }else{
        grup[key].push(product)
    }
    return grup

},{})

const groupby = (array,properyty)=>{
    return array.reduce((grup,product)=>{
    if(!grup[properyty]){
        grup[properyty]=[]
        grup[properyty].push(product)
    }else{
        grup[properyty].push(product)
    }return grup
},{})
    
}
// console.log(groupby(product,'marka'))
const posts=[
    {
        title:"post 1",
        tags:["php","html5"]
    },
    {
        title:"post 2",
        tags:["javascript","python"]
    },
    {
        title:"posts 3", 
        tags:["html5","css"]
    }
]

const birlestirme = posts.reduce((acc,post)=>[...acc,...post.tags],[])

const result=birlestirme.reduce((acc,item)=>{
    if(!acc.includes(item))
    {
        acc.push(item)     //işlemi bu methodda yapıyor
    }
    return acc
},[])
console.log(birlestirme)
console.log(result)
console.log([...new Set(birlestirme)])

const dizi =[-5,6,3,0]

console.log(dizi.filter(number=>number>0).map(number=>number*2))

const sonuc=dizi.reduce((acc,number)=>{
    if(number>0){
        acc.push(number)
    }
    return acc
},[])
console.log(sonuc)