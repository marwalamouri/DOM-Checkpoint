let totalPrice = document.getElementsByClassName("total-price")[0];
let x = document.getElementsByClassName("x");

// Delete item from cart
for (let i = 0; i < x.length; i++) {
  let button = x[i];

  button.addEventListener("click", function (event) {
    let buttonClicked = event.target;
    
    price = buttonClicked.parentElement.getElementsByClassName("price")[0];

    buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();
    totalPrice.innerHTML = +totalPrice.innerHTML - +price.innerHTML;
  });
}

// add item to quantity
function plus(id) {
  let quantity = document.getElementById("quantity" + id);
  let price = document.getElementById("price" + id);

  quantity.value = +quantity.value + 1;
  totalPrice.innerHTML = +totalPrice.innerHTML + +price.innerHTML;
}

// minus item from quantity
function minus(id) {
  let quantity = document.getElementById("quantity" + id);
  console.log(quantity.value);
  if (+quantity.value > 0) {
    let price = document.getElementById("price" + id);

    quantity.value = +quantity.value - 1;
    totalPrice.innerHTML = +totalPrice.innerHTML - +price.innerHTML;
  }
}

// favourite click
let fav = document.getElementsByClassName("favourite");
for (let i = 0; i < fav.length; i++) {
  let heart = fav[i];
  heart.addEventListener("click", function () {
    heart.style.color="red";
  });
}
