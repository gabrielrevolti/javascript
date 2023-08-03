const select = document.getElementById('select')
const res = document.getElementById('res')
const array = []

function add(){
    let num = document.getElementById('num').value
    
    if(num.length == 0 || num <= 0 || num > 100 || array.includes(Number(num))){
        alert('[Erro] Número inválido')
    }else if(array.length < 100){
        array.push(Number(num))
        let item = document.createElement('option')
        item.text = `O valor ${num} foi adicionado!`
        select.append(item)
        res.innerHTML = ''
        document.getElementById('num').value = ''
    }else{
        end()
    }
}



function end(){
    if(array.length == 0){
        alert('[Erro] Adicione algum número!')
    }else{
        array.sort((a, b) => a - b)

        let tam = array.length
        let soma = 0

        for(let i in array){
            soma += array[i]
        }

        let media = soma / tam

        res.innerHTML = ''
        res.innerHTML += `<br><p>No total temos ${tam} números </p> <br>`
        res.innerHTML += `<p>O menor número é ${array[0]}</p> <br>`
        res.innerHTML += `<p>O maior número é ${array[tam-1]}</p> <br>`
        res.innerHTML += `<p>Somando todos os números, temos ${soma}</p><br>`
        res.innerHTML += `<p>A média entre os valores é ${media.toFixed(2)}</p>`
        console.log(array)
    }
}