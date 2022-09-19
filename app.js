const btn = document.querySelector("#btn");
const productField = document.querySelector("#productName");
const showProduct = document.querySelector("#showProduct");

/* show data*/

window.onload = function () {
  const cart = getDataFromLocalStorage();
  for (let product in cart) {
    showData(product);
  }
};

btn.addEventListener("click", function () {
  getValue();
});

productField.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getValue();
  }
});

function getValue() {
  const productValue = productField.value;
  showData(productValue);
  setDataLocalStorage(productValue);
  productField.value = "";
}

/* show data */
function showData(data) {
  const li = document.createElement("li");
  li.textContent = data;
  showProduct.appendChild(li);
}

/* get data from local storage  */
function getDataFromLocalStorage() {
  const cart = localStorage.getItem("items");
  let data;
  if (cart) {
    data = JSON.parse(cart);
  } else {
    data = {};
  }
  return data;
}

/* set data local storage */
function setDataLocalStorage(data) {
  let cart = getDataFromLocalStorage();
  if (cart[data]) {
    cart[data] = cart[data] += 1;
  } else {
    cart[data] = 1;
  }
  localStorage.setItem("items", JSON.stringify(cart));
}
