class Porta {
	constructor () {
		this.trinco = false 
	}

	trancar () {
		this.trinco = true;
		console.log("A porta foi trancada.");
}
	destrancar () {
		this.trinco = false;
		console.log("A porta foi destrancada.");

	}

	toString () {
		return this.trinco ? "Porta trancada" : "Porta destrancada"
	}
} 
////////////////////////////////////////////

class PortaBlindada extends Porta { 

  constructor() {
    super(); // super chama tudo que foi feito no codigo acima
    this.trincoSuperior = false;
    this.trincoInferior = false;
    this.trincoTraseiro = false;
  }

  trancar() {
    super.trancar(); // chama o método da classe Porta
    this.trincoSuperior = true;
    this.trincoInferior = true;
    this.trincoTraseiro = true;
    console.log("Trincos superior, inferior e traseiro também foram trancados.");
  }

  destrancar() {
    super.destrancar(); // chama o método da classe Porta
    this.trincoSuperior = false;
    this.trincoInferior = false;
    this.trincoTraseiro = false;
    console.log("Trincos superior, inferior e traseiro também foram destrancados.");
  }

  toString() {
    // Mostra o estado do trinco principal e os três trincos extras
    return `PortaBlindada: 
      Principal - ${this.trinco ? "trancada" : "destrancada"},
      Superior - ${this.trincoSuperior ? "trancado" : "destrancado"},
      Inferior - ${this.trincoInferior ? "trancado" : "destrancado"},
      Traseiro - ${this.trincoTraseiro ? "trancado" : "destrancado"}`;
  }
}
	
const minhaPorta = new Porta();
console.log(minhaPorta.toString());

minhaPorta.trancar();    // A porta foi trancada.
console.log(minhaPorta.toString());

minhaPorta.destrancar(); // A porta foi destrancada.
console.log(minhaPorta.toString());

////////////////////////////////////////////////

const minhaPortaBlindada = new PortaBlindada();
console.log(minhaPortaBlindada.toString());

minhaPortaBlindada.trancar();
console.log(minhaPortaBlindada.toString());

minhaPortaBlindada.destrancar();
console.log(minhaPortaBlindada.toString());

