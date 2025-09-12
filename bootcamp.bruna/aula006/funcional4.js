// crie uma funçao que retorna true se todos os elementos do array forem pares

function ParesArray(array) {
	return array.every(elemento => elemento % 2 === 0)
}
console.log(ParesArray([6, 8, 10]));