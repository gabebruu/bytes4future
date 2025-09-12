// crie uma funçao que mapeia cada elemento de um array de strings para a string invertida

function StrReverse(array){
	return array.map(str => str.split("").reverse().join(""));
}
console.log(StrReverse(["arya", "percy"]))