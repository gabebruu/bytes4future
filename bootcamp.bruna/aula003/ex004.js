// ex Set 
// Recorre a um set para implementar uma função que recebe um array e retorna um array sem elementos repetidos.

function removeDuplicados(array) {
	let arrayNovo = new Set (array);
	return [...arrayNovo];
}
console.log(removeDuplicados([1, 1, 3, 4, 2, 3, 3]));


// sem usar o Set

function removeDuplicados(arr) {
    const resultado = [];

    for (let i = 0; i < arr.length; i++) {
        if (resultado.indexOf(arr[i]) === -1) {
            resultado.push(arr[i]);
        }
    }
    return resultado;
}

console.log(removeDuplicados([1, 1, 3, 4, 2, 3, 3]));

/* const resultado = []

Cria um novo array vazio onde vamos guardar os elementos únicos, ou seja, sem repetições.

Laço for (let i = 0; i < arr.length; i++)

Percorre todos os elementos do array original arr.

if (resultado.indexOf(arr[i]) === -1)

Verifica se o elemento atual não existe ainda no array resultado.

indexOf() retorna o índice do elemento no array, ou -1 se não encontrar.

Ou seja, essa linha está dizendo:
"Se esse número ainda não está no array resultado, então adicione."

resultado.push(arr[i])

Adiciona o número ao array resultado somente se ele ainda não está lá.

return resultado

Retorna o novo array sem elementos repetidos. */

