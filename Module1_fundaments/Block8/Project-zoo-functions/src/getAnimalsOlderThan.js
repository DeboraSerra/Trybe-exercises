const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const myAnimal = species.find((specie) => specie.name === animal);
  return myAnimal.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
