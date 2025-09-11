
function contaPares (array){
    if (array.length == 0) {
        return 0;
    }
    let primeiro = array [0];
    let restante = array.slice (1);
    if (primeiro % 2 == 0){
        return 1 + contaPares (restante);
    }else {
        return contaPares (restante);
    }
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

console.log (contaPares(numeros));

