// Implementa as classes Channel e Subscriber de forma a que o Subscriber seja notificado sempre que um novo video é adc ao Channel
// Subscriber deve ter a propriedade nome e o metodo notificar(canalNome, video)

// Channel deve ter as propriedades nome e um array subscribers e um metodo adicionarVideo(video)

class Subscriber {
    constructor(nome) {
        this.nome = nome;
    }

    notificar(canalNome, video) {
        console.log(`${this.nome} foi notificado: o canal ${canalNome} postou o vídeo ${video}`);
    }
}

class Channel {
    constructor(nome, subscribers = []) {
        this.nome = nome;
        this.subscribers = subscribers;
    }
    
    adicionarVideo(video) {
        this.subscribers.forEach(subscriber => subscriber.notificar(this.nome, video));
    }
}

const joao = new Subscriber("João");
const maria = new Subscriber("Maria");

const canal = new Channel("TechTube", [joao, maria]);

canal.adicionarVideo("Aprendendo Observer Pattern em JavaScript");