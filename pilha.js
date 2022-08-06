function adicionar (arr) {

    for (let j = 0; j < 5; j ++) {
        arr[j] = arr.push(1)
    }

    console.log(arr)
    cont = arr.length
    
    for (let i = 0; i < arr.length ; i++){
        
        console.log(`${i + 1} elemento removido:`) 
        console.log(cont)
        arr[i] = ""
        cont = cont - 1
    }

    return arr
}

console.log(adicionar([]))