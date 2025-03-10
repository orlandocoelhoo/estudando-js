const person = {
  firstname: "Orlando",
  lastname: "Coelho",
  age: "34",
  hobbies: ["Jogar Video Game", "Tatuar"],
};

// const firstname = person.firstname;
// const lastname = person.lastname;
// const age = person.age;
// const hobbies = person.hobbies;

//mesma coisa que acima
const { firstname, lastname, age, hobbies } = person;

console.log(firstname);
console.log(lastname);
console.log(age);
console.log(hobbies);
console.log(hobbies[1]);

//object in list
const todos = [
  {
    id: 1,
    description: "estudar programação",
    isCompleted: false,
  },
  {
    id: 2,
    description: "Treinar",
    isCompleted: false,
  },
  {
    id: 3,
    description: "Jogar 123",
    isCompleted: false,
  },
];

console.log(todos[2].description);
