const obje = {
    firstName:"akif",
    lastName:"kiraz",
    array:[1,2,3,4,],
    hesapla:function(){
       return `${console.log(this.firstName[0].toUpperCase())}.${console.log(this.lastName)}`
    }

}
console.log(obje.hesapla())