//seleciona um elemento
const getElementById = document.getElementById("add-user");
const querySelector = document.querySelector("#add-user");
console.log(getElementById);
console.log(querySelector);

//selecionar varios elementos
const querySelectorAll = document.querySelectorAll(".items .item");
console.log(querySelectorAll);

const items = document.querySelector(".items");
//items.remove();
//items.firstElementChild.remove();

items.children[1].textContent = "OII";

const button = document.querySelector(".btn");

button.style.background = "red";
