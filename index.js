// document.getElementById("count-el").innerText = 6;

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("txtId");

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function decrement() {
  count -= 1;
  countEl.textContent = count;
}

function save() {
  let saveTxt = document.getElementById("txtId");
  saveTxt.innerText += "-" + count;
}
