let idade = 19 
console.log(`Você têm ${idade} anos`)
if(idade < 16){
  console.log('não pode votar')
}else if(idade < 18 || idade >= 65){
  console.log('Voto opcional')
}else{
  console.log('Voto obrigatório')
}