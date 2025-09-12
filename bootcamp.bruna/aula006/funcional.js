// funçao que mapeia cada elemento de um array de strings para o seu comprimento

function mapearComprimento (array) {
	return array.map(str => str.length);
}

const palavras = ["bruna", "vick", "bytes"];
const cores = ["rosa", "preto", "verde"];
const soma = palavras.concat(cores)
console.log(mapearComprimento(soma));