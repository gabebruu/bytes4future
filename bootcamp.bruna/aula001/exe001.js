/*function umOuOutro(a,b) {
	return(a!==b)
}
console.log(umOuOutro(1, 1)); 

function umOuOutro(a, b, c) {
	return (a &&!b &&!c) || (!a &&b &&!c) || (!a &&!b &&c)
}
console.log(umOuOutro(false, false, false))
*/

function contrarioDoE(a, b){
	return !(a && b) 
}
console.log(contrarioDoE(true, true))

// ex 02

function perimetroDoQuadrado(lado) {
	return lado * 4
}
console.log(perimetroDoQuadrado(4))

// ex 03

function areaDoQuadrado(lado) {
	return lado ** 2
}
console.log(areaDoQuadrado(2))

// ex 04

function volumeDoCubo(lado){
	return lado ** 3
}
console.log(volumeDoCubo(2))

// ex 05 BigIng

function potenciaGrande(x, n) {
	return BigInt(x) ** BigInt(n) 
}
console.log(potenciaGrande(2n,500n))

// ex 06 String

function insereLinhaEntre(primeira, segunda){
	return primeira + "\n" + segunda;
}
console.log(insereLinhaEntre("linha 1", "linha 2"))

// ex 07 

function apresentaPessoa(nome, idade){
	return `O meu nome é ${nome} e tenho ${idade} anos`
}
console.log(apresentaPessoa("Bruna", 32))

// ex 08

function comparaTexto(a, b){
	return String(a) > String(b) ? String(a) : String(b)
}
console.log(comparaTexto(2,10))

function comparaTexto(a, b){
	return a > b ? a : b
}
console.log(comparaTexto(2,10))

