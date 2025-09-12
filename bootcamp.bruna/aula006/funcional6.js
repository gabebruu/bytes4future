// cria uma funçao que mapeia cada elemento de um array de objetos com as propriedades name e birthday para um objeto que alem destas propriedades tem a propriedade age

function adicionarIdade(pessoas) {
	return pessoas.map(string => {
		return {
			name: string.name,
			birthday: string.birthday,
			age: new Date().getFullYear() - new Date(string.birthday).getFullYear()
		}
	});
}
const variasPessoas = [
	{name: "Gui", birthday: "1992-02-18"},
	{name: "Bruna", birthday: "1993-06-08"},
	{name: "Victoria", birthday: "1991-05-02"}

]

console.log(adicionarIdade([{name: "Ana", birthday: "2000-05-10"}]))

console.log((variasPessoas);)
