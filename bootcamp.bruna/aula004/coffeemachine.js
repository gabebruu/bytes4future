class MaquinaDeCafe {
  constructor(custoDoCafe, capacidadeAgua, capacidadeCafe, capacidadeBorra, capacidadeTroco) {
    this.custoDoCafe = custoDoCafe;
    this.capacidadeDepositoAgua = capacidadeAgua;
    this.capacidadeDepositoCafe = capacidadeCafe;
    this.capacidadeDepositoBorra = capacidadeBorra;
    this.capacidadeDepositoTroco = capacidadeTroco;

    // estado inicial dos depósitos
    this.dosesDeAgua = 0;
    this.dosesDeCafe = 0;
    this.dosesDeBorra = 0;
    this.centimosParaTroco = 0;
    this.centimosParaRecolha = 0;
    this.centimosInseridos = 0;
  }

  // === Métodos ===
  recebeCentimos(centimos) {
    this.centimosInseridos += centimos;
    console.log(`Inseriu ${centimos} cêntimos. Total inserido: ${this.centimosInseridos}`);
  }

  fazCafe() {
    if (this.centimosInseridos < this.custoDoCafe) {
      return `Valor insuficiente! Insira mais ${this.custoDoCafe - this.centimosInseridos} cêntimos.`;
    }
    if (this.dosesDeAgua <= 0 || this.dosesDeCafe <= 0) {
      return "Impossível fazer café: falta água ou café.";
    }
    if (this.dosesDeBorra >= this.capacidadeDepositoBorra) {
      return "Depósito de borra cheio. Esvazie antes de fazer mais café.";
    }

    // preparar café
    this.dosesDeAgua--;
    this.dosesDeCafe--;
    this.dosesDeBorra++;
    this.centimosInseridos -= this.custoDoCafe;
    this.centimosParaRecolha += this.custoDoCafe;

    // troco
    let msgTroco = "";
    if (this.centimosInseridos > 0) {
      const troco = this.devolveTroco(this.centimosInseridos);
      msgTroco = ` Troco devolvido: ${troco} cêntimos.`;
    }

    return "Café servido!" + msgTroco;
  }

  devolveTroco(valor) {
    if (valor <= this.centimosParaTroco) {
      this.centimosParaTroco -= valor;
      this.centimosInseridos = 0;
      return valor;
    } else {
      const devolvido = this.centimosParaTroco;
      this.centimosParaTroco = 0;
      this.centimosInseridos = 0;
      return devolvido;
    }
  }

  cancelaOperacao() {
    const devolvido = this.devolveTroco(this.centimosInseridos);
    console.log(`Operação cancelada. Devolvido: ${devolvido} cêntimos.`);
    return devolvido;
  }

  esvaziaDepositoBorra() {
    this.dosesDeBorra = 0;
    console.log("Depósito de borra esvaziado.");
  }

  adicionaAgua(doses) {
    this.dosesDeAgua = Math.min(this.dosesDeAgua + doses, this.capacidadeDepositoAgua);
    console.log(`Foram adicionadas ${doses} doses de água.`);
  }

  adicionaCafe(doses) {
    this.dosesDeCafe = Math.min(this.dosesDeCafe + doses, this.capacidadeDepositoCafe);
    console.log(`Foram adicionadas ${doses} doses de café.`);
  }

  adicionaTroco(centimos) {
    this.centimosParaTroco = Math.min(this.centimosParaTroco + centimos, this.capacidadeDepositoTroco);
    console.log(`Foram adicionados ${centimos} cêntimos para troco.`);
  }

  toString() {
    return `
=== Estado da Máquina de Café ===
Água: ${this.dosesDeAgua}/${this.capacidadeDepositoAgua} doses
Café: ${this.dosesDeCafe}/${this.capacidadeDepositoCafe} doses
Borra: ${this.dosesDeBorra}/${this.capacidadeDepositoBorra} doses
Troco: ${this.centimosParaTroco}/${this.capacidadeDepositoTroco} cêntimos
Inserido: ${this.centimosInseridos} cêntimos
Recolha: ${this.centimosParaRecolha} cêntimos
Custo do café: ${this.custoDoCafe} cêntimos`;
  }
}
// Cria uma nova máquina de café
const maquina = new MaquinaDeCafe(50, 10, 10, 5, 100); // custo 50 cêntimos

// Abastece a máquina
maquina.adicionaAgua(5);
maquina.adicionaCafe(5);
maquina.adicionaTroco(100); // 1 euro para troco

// Inserir dinheiro
maquina.recebeCentimos(100); // Inserindo 1 euro

// Faz café
console.log(maquina.fazCafe()); // Deve servir café e devolver 50 cêntimos de troco

// Ver estado atual
console.log(maquina.toString());

// Cancela operação (com nada inserido)
console.log("Cancelando operação...");
console.log(maquina.cancelaOperacao()); // Deve devolver 0

// Tenta fazer café sem água
maquina.dosesDeAgua = 0;
console.log(maquina.fazCafe()); // Deve dizer que falta água

// Enche borra e tenta fazer café
maquina.dosesDeAgua = 1;
maquina.dosesDeCafe = 1;
maquina.dosesDeBorra = 5; // Cheio
maquina.recebeCentimos(50);
console.log(maquina.fazCafe()); // Deve avisar que borra está cheia

// Esvazia borra e faz café novamente
maquina.esvaziaDepositoBorra();
console.log(maquina.fazCafe()); // Agora deve funcionar

// Ver estado final
console.log(maquina.toString());
