// Array - Ex 1

// Implementa a função minMax que recebe um array e um numero e retorna um array com valor minimo e maximo que é possivel obter pela soma de n dos elementos do array.


function minMax (arr, n){
    const SORTED  = arr.sort((a,b) =>a-b); // variavel recebe um array ordenado (slice faz cópia do array / e o sort ordena)
    let min = 0; //
    for (let i= 0; i<n; i++){  //
        min += SORTED[i];
    }
    let max = 0;
    for (let i= SORTED.length-n; i<SORTED.length;i++){ //
        max += SORTED[i];
    }
    return [min,max];
}
console.log(minMax([5, 3, 4, 2, 1], 4));
console.log(minMax([5, 3, 4, 2, 1], 2));



// Array - Ex 2

// Implementa a função diferencaDiagonal que recebe uma matriz quadrada e retorna a diferença absoluta entre as somas das diagonais.

function palavraExisteEmSopaDeLetras(sopa, palavra) {
    const palavraInvertida = palavra.split("").reverse().join("");

    //verifica linhas (horizontal)
    for (const linha of sopa) {
        if(linha.includes(palavra) || linha.includes(palavraInvertida)) {
            return true;
        }
    }

    //verifica colunas (vertical)
    const numColunas = sopa[0].length;
    for (let c = 0; c < numColunas; c++) {
        let coluna = "";
        for (let l = 0; l < numColunas; l++) {
            coluna += sopa[l][c];
        }
        if (coluna.includes(palavra) || coluna.includes(palavraInvertida)) {
            return true;
        }
    }
    return false;
}


console.log(palavraExisteEmSopaDeLetras([
    "BRUNA",
    "DIEGO",
    "VICTORIA"
], "BRU"));



// Array - Ex 3

// Implementa a função palavraExistemEmSopaDeLetras que recebe um array de strings (linhas) e uma palavra e retorna true se a palavra existir. As orientações vertical ou horizontal são validas e a palavra pode estar escrita ao contrario.


function palavraExisteEmSopaDeLetras(sopa, palavra) {
    const palavraInvertida = palavra.split("").reverse().join("");

    //verifica linhas (horizontal)
    for (const linha of sopa) {
        if(linha.includes(palavra) || linha.includes(palavraInvertida)) { // .includes procura se a palavra ta dentro da string
            return true;
        }
    }

    //verifica colunas (vertical)
    const numColunas = sopa[0].length;
    for (let c = 0; c < numColunas; c++) {
        let coluna = "";
        for (let l = 0; l < numColunas; l++) {
            coluna += sopa[l][c];
        }
        if (coluna.includes(palavra) || coluna.includes(palavraInvertida)) {
            return true;
        }
    }
    return false;
}


console.log(palavraExisteEmSopaDeLetras([
    "BRUNA",
    "DIEGO",
    "VICTORIA"
], "BRU"));