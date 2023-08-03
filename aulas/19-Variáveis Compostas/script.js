let num = [4, 6 ,8, 5,]
num.push(7)
num.sort()
/*
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro vetor é ${num[0]}`)

for(let i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let n = num.indexOf(10)

if(n == -1){
    console.log('Valor não encontrado')
}else{
    console.log(`O index desse valor é ${n}`)
}


