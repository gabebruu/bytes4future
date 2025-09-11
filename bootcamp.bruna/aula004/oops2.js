// Programação Orientada a Objetos BackEnd

// Crie uma classe chamada SoInteiro que tem uma propriedade chamada inteiro que só pode ser definida para um numero inteiro.

//Se houver uma tentativa invalida de alterar o valor da propriedade, este deve manter-se inalterado. 

// Podes utilizar o metodo isInteger do objeto global number: Number.isInteger(2)

class SoInteiro {
	#inteiro = 0; // propriedade privada com #
	
	get inteiro(){
		return this.#inteiro;
	}
	set inteiro(novoValor){
		if (Number.isInteger(novoValor)){
			this.#inteiro = novoValor;
		}
	}
}
const numero = new SoInteiro();
console.log(numero.inteiro);
numero.inteiro = 10;
console.log(numero.inteiro);
numero.inteiro = 3.14;

console.log(numero.#inteiro); // ERRO nao acede diretamente o privado #
