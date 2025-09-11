let map = new Map(
	[
		["jan", "Janeiro"],
		["fev", "Fevereiro"],
		["mar", "Março"],
		["abr", "Abril"],
		["mai", "Maio"],
		["jun", "Junho"],
		["jul", "Julho"],
		["ago", "Agosto"],
		["set", "Setembro"],
		["out", "Outubro"],
		["nov", "Novembro"],
		["dez", "Dezembro"],

	]
);
console.log(map.size);
console.log(map.get("fev"));
console.log(map.has("ago"));

//