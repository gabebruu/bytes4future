// crie uma funçao que retorna true se pelo menos um dos elementos do array for par

function arrayPar (array) {
	return array.some(n => n % 2 === 0)
}
console.log(arrayPar([1, 5, 6, 3]));