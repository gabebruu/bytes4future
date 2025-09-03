function mesesDoAno(mes){
	switch(mes){
		case 1: 
		return "Janeiro";
		case 2: 
		return "Feveiro";
		case 3:
		return "Março";
		case 4:
		return"Abril";
		case 5:
		return "Maio";
		case 6:
		return "Junho";
		case 7:
		return "Julho";
		case 8:
		return "Agosto";
		case 9:
		return "Setembro";	
		case 10:
		return "Outubro";	
		case 11:
		return "Novembro";
		case 12:
		return "Dezembro";
		default:
		return "Mês Inválido"

	}
}
console.log(mesesDoAno(5))



// ex 4 função mesesDoAno que recebe uma abreviatura que representa um mes do ano e retorna o mes correspondente:

function mesesDoAno1 (meses){
	switch (meses) {
		case "Jan": return "Janeiro"
		case "Fev": return "Fevereiro"
		case "Mar": return "Março"
		case "Ab": return "Abril"
		case "Mai": return "Maio"
		case "Jun": return "Junho"
		case "Jul": return "Julho"
		case "Ag": return "Agosto"
		case "Set": return "Setembro"
		case "Out": return "Outubro"
		case "Nov": return "Novembro"
		case "Dez": return "Dezembro"
		default: return "Mes Invalido"

	}

}

