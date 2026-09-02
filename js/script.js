var nome = "Julio";

let nasc = 2008;

const viva = confirm("Clique ok, se estiver viva");

let altura;

function calcIdade (ano = 2026) {
  let idade=ano - nasc;
  console.log (`Idade dentro da funcao: ${idade}`);
  return idade;

;}

alert (`Idadde fora da função: ${calcIdade()}`);

/* console.log(`Idade fora da funcao: ${idade}`); 
             vai da erro
*/

if (viva){

    altura=prompt("Digite sua altura beta: ")
}