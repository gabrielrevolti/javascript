function gerar(){
    let num = document.getElementById('number').value
    let div = document.getElementById('divtab')
    

    if(number.length == 0){
        alert('[Erro] Preencha os dados')
    }else{
        num = Number(num)
        div.innerHTML = ''
        let select = document.createElement('select')
        select.setAttribute('size', 10)
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            select.appendChild(item)
            div.appendChild(select)
        }
    }
}