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

const todosJSON = JSON.stringify(todos);

console.log(todosJSON);

const todosList = JSON.parse(todosJSON);

console.log(todosList);
