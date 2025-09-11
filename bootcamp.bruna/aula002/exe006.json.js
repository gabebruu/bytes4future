let Cat = {
	FAMILY: "Feline",
	createCat: function (name) {
		return { name: name };

	}
};
const novoGato = Cat.createCat("Lulu");
console.log(novoGato);
console.log(Cat.FAMILY);