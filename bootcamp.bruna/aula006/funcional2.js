// cria uma funçao que filtra os elementos pares, mapeia cada elemento para o seu quadrado e por fim reduz o array para calcular o somatorio dos elementos resultantes

function filtrarPares (array) {
	return array
	.filter(i => i % 2 === 0)
	.map(i => i **2)
	.reduce((acc, n) => acc + n, 0)
}

const numeros = [1 , 2, 4, 5, 6, 7, 8];
console.log(filtrarPares(numeros));