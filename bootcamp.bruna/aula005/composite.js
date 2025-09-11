// duas classes: Documento e Pasta (Pasta extends Documento)
// documento e pasta tem um atributo nome
// uma Pasta é um tipo especial de Documento que pode conter outros Documentos ou outras Pastas
// Ambas as classes devem implementar o metodo imprimir()
// o Documento imprime apenas o o seu proprio nome
// a Pasta imprime o seu nome e um array com os nomes dos documentos
// Pasta é um composite que pode conter outros documentos

class Documento {
	constructor(nome){
		this.nome = nome;
	}
	imprimir() {
		return this.nome;
	}
}

class Pasta extends Documento {
	constructor(nome) {
		super(nome);
		this.documentos = [];
	}

	adicionar(documento) {
		this.documentos.push(documento);
	}
	
	imprimir() {
		const conteudo = this.documentos.map(doc => doc.imprimir() ).join(", ");
		return `${this.nome} : [${conteudo}]`;
	}
}

const raiz = new Pasta ("Raiz");
const docs = new Pasta ("Documentos");
const imagens = new Pasta ("Imagens");

const d1 = new Documento("leitura.txt");
const d2 = new Documento ("manual.pdf");
const d3 = new Documento("foto.png");

docs.adicionar(d1);
docs.adicionar(d2);
imagens.adicionar(d3);

raiz.adicionar(docs);
docs.adicionar(imagens);

console.log(raiz.imprimir());


//


/*/Composite- Exercicio 1/

class Documento{
    constructor (nome) {
        this.nome = nome
    }

    imprimir (){
        console.log (`Documento: ${this.nome}`);
    }

}
class Pasta extends Documento{
    constructor (nome) {
        super (nome);
        this.conteudo= [];
    }

    adicionar (doc){
        this.conteudo.push(doc);
    }

    imprimir () {
        console.log (`Pasta: ${this.nome}`);
        const nomes = this.conteudo.map (item => item.nome);
        console.log (`contem: [${nomes.join(" - ")}]`);
    }

}
const doc1 = new Documento ("arquivo1.txt");
const doc2 = new Documento ("arquivo2.pdf");
const pasta1 = new Pasta ("pastaA");
const pasta2 = new Pasta ("pastaB");

pasta1.adicionar (doc1);
pasta1.adicionar (doc2);
pasta1.adicionar (pasta2);
doc1.imprimir ();
pasta1.imprimir ();
*/