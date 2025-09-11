function inverteArray (array) {
  if (array.length === 0) {
    return [];
  }
  return inverteArray(array.slice(1)) .concat(array[0]);
}

console.log(inverteArray([5, 6, 7, 8, 9, 10, 11, 12]));
