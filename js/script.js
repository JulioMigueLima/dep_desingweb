var nome = "Julio";

let nasc = 2008;

const viva = confirm("Clique ok, se estiver viva");

let altura;

function calcIdade (ano = 2026) {
  let idade=ano - nasc;
  console.log (`Idade dentro da funcao: ${idade}`);
  let menor;
  if(idade < 18 ){
    menor= true
  }

  else{
    menor=false
  }

  return {idade, menor};
}

let retorno= calcIdade()

if(retorno[1]){
    alert(`Idade: ${retorno[0]}. Voce é menor de idade` )
}
else{
    alert(`Idade: ${retorno[0]}. Voce é maior de idade` )
}

alert (`Idade fora da função: ${calcIdade()}`);

/* console.log(`Idade fora da funcao: ${idade}`); 
             vai da erro
*/

if (viva){

    altura=prompt("Digite sua altura beta: ")
}