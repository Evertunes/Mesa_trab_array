/*let numbers = [22,33,51,66,72];
console.log(numbers[numbers.lenght-1]);*/

/*let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[2][2])
*/

/*let str = "una string qualquer"
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]);*/

//Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).


/*let numeros = [1,2,5];

function imprimirInverso(numeros) {
    console.log(numeros[2],numeros[1],numeros[0]);
};

imprimirInverso(numeros);*/

//Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.


/*let numeros = ["Texto", 10];

function inverter (numeros){
    console.log(numeros.reverse());

}
inverter(numeros.reverse());
*/

//Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().

/*let array = ["o","l","a"];

function join(array){
    console.log(array[0] + array[1 + array[2]]);
}
join(array);
;*/

/*Criar a estrutura apropriada para armazenar os seguintes filmes e séries:
"star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela". 
Importante: verifique se tudo funciona corretamente acessando qualquer um dos filmes uma vez que a estrutura correspondente tenha sido criada.
*/

let filmes = [];

function adicionar(){filmes.push("star wars", "matrix", "mr.robot","o proço do amanhã","a vida é bela");

};

adicionar();

console.log(filmes);
