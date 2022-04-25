'use strict';

const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'u', 'z'
];

function increment(array, index = array.length - 1) {
  if (array[index] == 'z') {
    array[index] = 'a';
    index--
    increment(array, index);
  } else {
    array[index] = alphabet[alphabet.indexOf(array[index]) + 1];
  }
}

export function idIncrement(id) {
  let letters = [];
  let numbers = '';
  for (let symbol of id) {
    if (alphabet.includes(symbol)) {
      letters.push(symbol);
    } else {
      numbers += symbol;
    }
  }
  const numbersLength = numbers.length;
  if (numbers == '9'.repeat(numbersLength)) {
    numbers = '0'.repeat(numbersLength);
    increment(letters);
  } else {
    numbers++;
    while(numbers.toString().length < numbersLength) {
      numbers = '0'+ numbers;
    }
  }
  const result = letters.join('') + numbers;
  return result;
}