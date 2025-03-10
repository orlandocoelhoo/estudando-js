const numbers = [1, 2, 3, 4, 5];
//altera o dado conforme eu mandar alterar dentro da function
const multipliedNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log(multipliedNumbers);

const ages = [8, 13, 27, 30, 22, 40];
//retorna algo com base em algum tipo de comparação que eu fizer na function
const evenAges = ages.filter(function (age) {
  return age % 2 === 0;
});

console.log(evenAges);

const agesSum = [8, 13, 27, 30, 22, 40];
//accumula dados para uma soma
const sumOfAges = agesSum.reduce(function (age, accumulator) {
  return accumulator + age;
}, 0);

// console.log(sumOfAges);
