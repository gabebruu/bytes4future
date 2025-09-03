function escadaComCardinaisInvertida(n){
	let result= "";
	for (let i= 1; i <= n; i++){
		let cardinais = "#".repeat(i);
		result += cardinais + "\n";
	}
	return result;
}
console.log(escadaComCardinaisInvertida(5))

// ex 02

function escadaComCardinaisInvertida1(n){
	let result= "";
	for (let i= 1; i <= n; i++){
		let espaços = " ".repeat(n - i)
		let cardinais = "#".repeat(i);
		if (i < n){
			result += espaços + cardinais + "\n";
		} else{
			result += espaços + cardinais
		}
	}
	
	return result;
}
console.log(escadaComCardinaisInvertida1(6))

