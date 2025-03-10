const button = document.querySelector("#submit-button");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
//const items = document.querySelectorAll(".items .item");
const items = document.querySelector(".items");

button.addEventListener("click", function (e) {
  e.preventDefault();

  console.log(nameInput.value, emailInput.value);
  console.log(items);

  //   items[0].textContent = nameInput.value;
  //   items[1].textContent = emailInput.value;

  items.firstElementChild.textContent = nameInput.value;
  items.children[1].textContent = emailInput.value;
});
