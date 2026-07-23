const ITEM_PRICE = 100;

// Adding items to the cart
function addToCart(itemName) {

  let cartString = localStorage.getItem('cart');
  
  if (!cartString) {
    cartString = itemName;
  } else {
    cartString = cartString + "," + itemName;
  }
  
  localStorage.setItem('cart', cartString);
  
  alert(itemName + " added to cart!");
}

//Displaing the items in the cart
function displayCart() {
  const cartList = document.getElementById("cartItemsList");
  if (!cartList) return; 

  let cartString = localStorage.getItem('cart');

  if (!cartString) {
    cartList.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let cartArray = cartString.split(",");

  
  let htmlContent = "<ul>";
  for (let i = 0; i < cartArray.length; i++) {
    htmlContent += "<li>" + cartArray[i] + " - $" + ITEM_PRICE + "</li>";
  }
  htmlContent += "</ul>";

 
  let totalCost = cartArray.length * ITEM_PRICE;
  htmlContent += "<p><strong>Total Cost: $" + totalCost + "</strong></p>";

  cartList.innerHTML = htmlContent;
}

//Getting inputs from the input fields
function orderProcess() {
  const name = document.getElementById("nameField").value.trim();
  const money = parseFloat(document.getElementById("moneyField").value);
  const output = document.getElementById("spaceForJavaScriptOutput");
  
  let cartString = localStorage.getItem('cart');

  
  if (!name || isNaN(money)) {
    output.innerHTML = "<p class='error'>Please enter a valid name and money amount.</p>";
    return;
  }
  
  if (!cartString) {
    output.innerHTML = "<p class='error'>Your cart is empty!</p>";
    return;
  }

  
  let cartArray = cartString.split(",");
  let totalCost = cartArray.length * ITEM_PRICE;

  //Showing the receipt
  if (money < totalCost) {
    output.innerHTML = 
      "<div class='error-box'>" +
        "<p><strong>Not Enough Money!</strong></p>" +
        "<p>Total: $" + totalCost + " | Paid: $" + money + "</p>" +
        "<p>You still owe: $" + (totalCost - money) + "</p>" +
      "</div>";
  } else {
    
    let change = money - totalCost;
    let itemsList = cartArray.join(", ");

    output.innerHTML = 
      "<div class='receipt-box'>" +
        "<h3>--- RECEIPT ---</h3>" +
        "<p><strong>1. Customer:</strong> " + name + "</p>" +
        "<p><strong>2. Items:</strong> " + itemsList + "</p>" +
        "<p><strong>3. Total Cost:</strong> $" + totalCost + "</p>" +
        "<p><strong>4. Money Given:</strong> $" + money + "</p>" +
        "<p><strong>5. Change Due:</strong> $" + change + "</p>" +
      "</div>";

   
    localStorage.removeItem('cart');
  }
}