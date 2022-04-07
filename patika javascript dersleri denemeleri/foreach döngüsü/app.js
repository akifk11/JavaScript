console.log('merhaba')

const products = ['appple','hp','DELL','huawei','monster','MSI']


products.forEach((product,index,arr) => console.log(product,index,arr))

products.forEach((product,index,arr)=> console.log(arr[index]=product+"akif"))

products.forEach((product,index,arr)=> console.log(arr[index]= product.toUpperCase()))
