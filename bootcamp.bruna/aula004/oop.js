class Inteiro {
	static nulo = 0;
	static eInteiro (n){
		return Number.isInteger(n);
	}
}


// Uma classe chamada ContadorDeInstancias que tem ;
// um construtor que nao recebe nenhum argumento nem define nenhuma propriedade da instância
// uma propriedade estática instancias que tem o numero de instancias criadas até um determinado momento.

class ContadorDeInstancias {
	static instancias = 0; 
	constructor(){
		ContadorDeInstancias.instancias++;
	}
	
}

const a = new ContadorDeInstancias();
const b = new ContadorDeInstancias();
const c = new ContadorDeInstancias();
console.log(ContadorDeInstancias.instancias);

//

// TESTE GATOS


class Gato {
    constructor(name, birthday, weight, color) {
        this.name = name;
        this.birthday = birthday;
        this.weight = weight;
        this.color = color;
    }
    get age() {
        return new Date() - this.birthday;
    }

    miar() {
        console.log(`O gato ${this.name} está a miar!`);
    }

    correr() {
        console.log(`O gato ${this.name} está a correr!`);
    }

    saltar() {
        console.log(`O gato ${this.name} está a saltar!`);
    }
}
const GATO1 = new Gato("Bolinhas", new Date("2022-09-08"), 15, "preto");

const GATO2 = new Gato("Boloes", new Date("2022-09-04"), 15, "branco");



GATO1.miar();

console.log(GATO1.name);
console.log(GATO1);

console.log(GATO1.age);
