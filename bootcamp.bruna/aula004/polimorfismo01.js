// Cria uma classe Rectangulo com o método calculaArea(). Um rectângulo tem duas propriedades: altura e largura. Cria uma classe Quadrado que herda de Rectangulo, definindo apenas o seu construtor com um argumento: lado.
// 

// Classe base Rectangulo
class Rectangulo {
	constructor(altura, largura) {
		this.altura = altura;
		this.largura = largura;
	}

	calculaArea() {
		return this.altura * this.largura;
	}
}

// Classe Quadrado que herda de Rectangulo
class Quadrado extends Rectangulo {
	constructor(lado) {
		super(lado, lado); // chama o construtor da classe pai com altura = largura = lado
	}
}

const retangulo = new Rectangulo(10, 15);
console.log("Area do retângulo:", retangulo.calculaArea());

const quadrado = new Quadrado(7);
console.log("Area do quadrado:", quadrado.calculaArea());