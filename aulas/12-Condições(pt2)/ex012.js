let agora = new Date()
let hora = agora.getHours()

if(hora < 5){
  console.log('Boa madrugada')
}else if(hora < 12){
  console.log('Bom dia')
}else if(hora < 18){
  console.log('Boa tarde')
}else if(hora < 23){
  console.log('Boa noite')
}else('Horário não existe')