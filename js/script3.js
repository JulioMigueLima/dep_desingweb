let nome = prompt("Digite seu nome: ");
let nasc = Number(prompt("Digite sua data de nascimento: "));
let altura = Number(prompt("Digite sua altura: "));
let vivo= confirm("Clique em OK se for vivo");
let sexo= prompt("Digite seu sexo");
let peso= prompt("Digite seu peso");
peso=Number(peso);
let imc= peso/altura;

console.log("nome", typeof(nome));
console.log("nasc", typeof(nasc));
console.log("altura", typeof(altura));
console.log("vivo", typeof(vivo));
console.log("sexo", typeof(sexo));
console.log("peso", typeof(peso));
console.log("imc", typeof(imc));

msg=`Nome: ${nome}\n Ano de nascimento: ${nasc}\nVivo: ${vivo}`;
msg=msg + `Altura: ${altura}\n Sexo: ${sexo}\nPeso: ${peso}`;
msg= msg + `\nIMC: ${imc.toFixed(2)}`;

alert(msg);