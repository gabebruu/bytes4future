// ex 01 - controle de fluxos if...else
// Implementa a função garanteComprimentoDaString que recebe uma string e um number n. Se a string for maior que o n, retorna apenas os primeiros n caracteres; Caso contrário adiciona espaços no final da string para ficar com o tamanho ceeto.


function garanteComprimentoDaString(str, n){
	if (str.length > n) {
		return str.substring (0,n);
	} else {
		return str.padEnd(n, "*");
	}
}
console.log(garanteComprimentoDaString("abc", 6));
console.log(garanteComprimentoDaString("abcdefg", 6));

// ex 02 
// Implementa uma função com o nome calculaClassificacaoEtaria que recebe o número de anos completos de uma criança e retorna a classificação etária:

function calculaClassificacaoEtaria(anos){
	if (anos >= 0 && anos <= 1){
		return "Lactente"
	} else if (anos >= 2 && anos <= 4){
		return "Pré Escolar"
	} else if (anos >= 5 && anos <= 10){
		return "Escolar"
	} else if (anos >=11 && anos <= 17){
		return "Adolescente"
	} else {
		return "Idade sem classificação"
	}
}
console.log(calculaClassificacaoEtaria(1));
console.log(calculaClassificacaoEtaria(3));
console.log(calculaClassificacaoEtaria(6));
console.log(calculaClassificacaoEtaria(13));
console.log(calculaClassificacaoEtaria(55));