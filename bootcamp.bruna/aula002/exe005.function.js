// exe function

function aplica(n, func) {
	return func(n);
}

console.log(aplica(5,(n) => n * n));
console.log(aplica(5,(n) => n * - 1));
console.log(aplica(5,(n) => n % 2 === 0 ? "Par" : "Impar"));

// exe 02

function superDigito(n) {
  if (n.length === 1) {
    return Number(n);
  }

  const digitos = n.split(''); // transforma a string num array de caracteres
  let soma = 0;
  for (let i = 0; i < digitos.length; i++) {
    soma += Number(digitos[i]); // converte cada caractere para número e soma
  }

  return superDigito(soma.toString());
}

console.log(superDigito('1'));    // 1
console.log(superDigito('12'));   // 3  (1+2 = 3)
console.log(superDigito('9875')); // 2  (9+8+7+5 = 29;  2+9 = 11;  1+1 = 2)



