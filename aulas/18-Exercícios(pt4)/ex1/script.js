function contar(){
    let start = document.getElementById('start').value
    let end = document.getElementById('end').value
    let step = document.getElementById('step').value
    let res = document.getElementById('res')

    if(start.length == 0 || end.lenght == 0|| step.length == 0){
        res.innerHTML = '[Erro] Preencha os dados e tente novamente!'
    }else{
        res.innerHTML = 'Contando <br>'
        var i = Number(start) // início
        var f = Number(end) // fim
        var p = Number(step) // passo
    }

    if(p <= 0){
        alert('Impossível contar. Considerando passo 1')
        p = 1
    }

    if(i < f){
        for(let c = i; c < f; c += p){
            res.innerHTML += ` ${c} ➡️ `
        }
    }else{
        for(let c = i; c > f; c -= p){
            res.innerHTML += ` ${c} ➡️ `
        }
    }
    res.innerHTML += `🏴`
}





//tecla windows' +  '.'