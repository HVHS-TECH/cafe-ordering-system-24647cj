// console.log("Hello world!")

// function getFormInput(){

// const NAME_FIELD = document.getElementById("nameField");
// const AGE_FIELD = document.getElementById("ageField");
// const BIRTHY_FIELD = document.getElementById("birthyField");
 
// let userName = NAME_FIELD.value;
// let userAge = AGE_FIELD.value;
// let birthYear = BIRTHY_FIELD.value;


// OUTPUT.innerHTML = "<p>Your name is "+userName+"</p>";
// OUTPUT.innerHTML +=("<p>Hi "+userName+" as of " +year+ " you are " +userAge+ " years old. You have " +money+ " dollars.</p>");
// OUTPUT.innerHTML +=("<p>you were born in " + birthYear+"</p>");
// OUTPUT.innerHTML +=("<p>in ten years you will be "+ oldage + " yeras old</p>");
// OUTPUT.innerHTML +=("<p>You have " +money+ " dollars</p>");
// OUTPUT.innerHTML +=("<p>you spent half your money, now you have " + halfmoney + " dollars</p>" );
// OUTPUT.innerHTML +=("<p>Then you got 3 dollars, now you have " +(halfmoney+3)+" dollars</p>");

// }

// let ITEM_PRICE = 100;
// let shoparray = ["Sparco Racing suit","Bell Racing helmet","Minus Racing gloves","LN Racing shoes"]
// const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
// // let selectedItemName = shoparray[itemChoice];

// function calculateChange(_money, ITEM_PRICE) {
//   return _Money - ITEM_PRICE;
// }

// function orderProcess(){

// const ITEM_FIELD = document.getElementById("itemField");
// const NAME_FIELD = document.getElementById("nameField");
// const MONEY_FIELD = document.getElementById("moneyField");

// let Item = ITEM_FIELD.value;
// let Name = NAME_FIELD.value;
// let Money = MONEY_FIELD.value;
// // let selectedItemName = shoparray[itemChoice];

// if(Money < ITEM_PRICE){
//     OUTPUT.innerHTML =  "<p>Your name is "+Name+"</p>";
//     OUTPUT.innerHTML += "<p>You chose the "+Item+"</p>";
//     OUTPUT.innerHTML += "<p>You do not have enough money to buy the " +(Item) + " ball.</p>";
// }

// if (Money >= ITEM_PRICE){
//     OUTPUT.innerHTML =  "<p>Hi"+Name+"</p>";
//     OUTPUT.innerHTML += "<p>You chose the "+Item+"</p>";
//     OUTPUT.innerHTML += "<p>Your Item has been added to cart</p>";
//     OUTPUT.innerHTML += "<p>Your change will be $" + calculateChange(Money, ITEM_PRICE) + "</p>";
// }

// }



// }else{
//     if (Item < 0 || Item > shoparray.length || isNaN(Item)) {
//         OUTPUT.innerHTML += "<p>Error: Please choose a valid item number (1, 2, or 3).</p>";
//         return; 
//     } else {
//         // If they have enough money, calculate change
//         let change = Money - ITEM_PRICE;

//         // Print the 5 required fields to the Receipt
//         OUTPUT.innerHTML = `
//             <h3>🧾 Receipt Summary</h3>
//             <p><b>1. Customer Name:</b> ${Name}</p>
//             <p><b>2. Item Bought:</b> ${selectedItemName} ($${ITEM_PRICE})</p>
//             <p><b>3. Total Cost:</b> $${ITEM_PRICE}</p>
//             <p><b>4. Money Given:</b> $${Money}</p>
//             <p><b>5. Your Change:</b> $${change}</p>
//         `;
//     }


// const ITEM_PRICE = 100; 

// const shoparray = [
//   "Sparco Racing suit", 
//   "Minus Racing gloves", 
//   "Bell Racing helmet", 
//   "LN Racing shoes"
// ];


// function calculateChange(money, totalCost) {
//   return money - totalCost;
// }

// function addToCart(itemName) {
//   let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
//   cart.push(itemName);
//   localStorage.setItem('cartItems', JSON.stringify(cart));
//   alert(itemName + " has been added to your cart!");
// }


// function displayCart() {
//   const cartListDiv = document.getElementById("cartItemsList");
//   if (!cartListDiv) return; 
//   let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

//   if (cart.length === 0) {
//     cartListDiv.innerHTML = "<p>Your cart is empty.</p>";
//     return;
//   }

//   let htmlContent = "<ul>";
//   cart.forEach(item => {
//     htmlContent += `<li>${item} - $${ITEM_PRICE}</li>`;
//   });
//   htmlContent += "</ul>";

//   const totalCost = cart.length * ITEM_PRICE;
//   htmlContent += `<p><strong>Total Items:</strong> ${cart.length}</p>`;
//   htmlContent += `<p><strong>Total Price:</strong> $${totalCost}</p>`;

//   cartListDiv.innerHTML = htmlContent;
// }


// function orderProcess() {
//   const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
//   const NAME_FIELD = document.getElementById("nameField");
//   const MONEY_FIELD = document.getElementById("moneyField");

//   const customerName = NAME_FIELD.value.trim();
//   const moneyGiven = parseFloat(MONEY_FIELD.value);
//   let cart = JSON.parse(localStorage.getItem('cartItems')) || [];


//   if (!customerName || isNaN(moneyGiven)) {
//     OUTPUT.innerHTML = "<p style='color: red;'>Please enter a valid name and money amount.</p>";
//     return;
//   }

//   if (cart.length === 0) {
//     OUTPUT.innerHTML = "<p style='color: red;'>Your cart is empty. Please add items before checking out.</p>";
//     return;
//   }

//   const totalCost = cart.length * ITEM_PRICE;


//   if (moneyGiven < totalCost) {
    
//     OUTPUT.innerHTML = `
//       <div style="color: red; border: 1px solid red; padding: 10px; margin-top: 10px;">
//         <h3>Insufficient Funds!</h3>
//         <p>Customer: ${customerName}</p>
//         <p>Total Cost: $${totalCost}</p>
//         <p>Money Provided: $${moneyGiven}</p>
//         <p>You need $${totalCost - moneyGiven} more to complete this order.</p>
//       </div>
//     `;
//   } else {
    
//     const change = calculateChange(moneyGiven, totalCost);

//     OUTPUT.innerHTML = `
//       <div style="border: 2px dashed black; padding: 15px; margin-top: 15px; background-color: #f9f9f9;">
//         <h2>--- OFFICIAL RECEIPT ---</h2>
//         <p><strong>1. Customer Name:</strong> ${customerName}</p>
//         <p><strong>2. Items Purchased:</strong> ${cart.join(", ")} ($${ITEM_PRICE} each)</p>
//         <p><strong>3. Total Cost:</strong> $${totalCost}</p>
//         <p><strong>4. Money Provided:</strong> $${moneyGiven}</p>
//         <p><strong>5. Change Due:</strong> $${change}</p>
//         <p><em>Thank you for shopping with us!</em></p>
//       </div>
//     `;

    
//     localStorage.removeItem('cartItems');
//   }
// }


// const ITEM_PRICE = 100;

// // Adding the item to the cart
// function addToCart(itemName) {

//   let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
//   cart.push(itemName);
//   localStorage.setItem('cart', JSON.stringify(cart));
  
//   alert(`${itemName} added to cart!`);
// }

// // 2. DISPLAY CART ITEMS (Runs on cart.html)
// function displayCart() {
//   const cartList = document.getElementById("cartItemsList");
//   if (!cartList) return; // Stop if not on cart page

//   let cart = JSON.parse(localStorage.getItem('cart')) || [];

//   if (cart.length === 0) {
//     cartList.innerHTML = "<p>Your cart is empty.</p>";
//     return;
//   }

//   // Calculate total and build display list
//   let totalCost = cart.length * ITEM_PRICE;
//   let itemsHTML = "<ul>" + cart.map(item => `<li>${item} - $${ITEM_PRICE}</li>`).join('') + "</ul>";
  
//   cartList.innerHTML = `${itemsHTML}<p><strong>Total Cost: $${totalCost}</strong></p>`;
// }

// // 3. CHECKOUT & RECEIPT PROCESS (Runs on cart.html)
// function orderProcess() {
//   const name = document.getElementById("nameField").value.trim();
//   const money = parseFloat(document.getElementById("moneyField").value);
//   const output = document.getElementById("spaceForJavaScriptOutput");
//   let cart = JSON.parse(localStorage.getItem('cart')) || [];

//   // Basic Validation
//   if (!name || isNaN(money)) {
//     output.innerHTML = "<p class='error'>Please enter a valid name and amount of money.</p>";
//     return;
//   }
//   if (cart.length === 0) {
//     output.innerHTML = "<p class='error'>Your cart is empty!</p>";
//     return;
//   }

//   const totalCost = cart.length * ITEM_PRICE;

//   // Check if customer has enough money
//   if (money < totalCost) {
//     output.innerHTML = `
//       <div class='error-box'>
//         <p><strong>Not Enough Money!</strong></p>
//         <p>Total: $${totalCost} | Paid: $${money}</p>
//         <p>You still owe: $${totalCost - money}</p>
//       </div>`;
//   } else {
//     // Produce receipt showing all 5 required elements
//     const change = money - totalCost;
//     output.innerHTML = `
//       <div class='receipt-box'>
//         <h3>--- RECEIPT ---</h3>
//         <p><strong>1. Customer:</strong> ${name}</p>
//         <p><strong>2. Items:</strong> ${cart.join(", ")}</p>
//         <p><strong>3. Total Cost:</strong> $${totalCost}</p>
//         <p><strong>4. Money Given:</strong> $${money}</p>
//         <p><strong>5. Change Due:</strong> $${change}</p>
//       </div>`;

//     // Clear cart after payment
//     localStorage.removeItem('cart');
//   }
// }

// Global item price
const ITEM_PRICE = 100;

// 1. ADD ITEM TO CART (Runs on index.html)
function addToCart(itemName) {
  // Get existing cart string from storage
  let cartString = localStorage.getItem('cart');
  
  // If cart is empty, start with the item; otherwise, append with a comma separator
  if (!cartString) {
    cartString = itemName;
  } else {
    cartString = cartString + "," + itemName;
  }
  
  // Save plain string back to localStorage
  localStorage.setItem('cart', cartString);
  
  alert(itemName + " added to cart!");
}

// 2. DISPLAY CART ITEMS (Runs on cart.html)
function displayCart() {
  const cartList = document.getElementById("cartItemsList");
  if (!cartList) return; // Stop if not on cart page

  let cartString = localStorage.getItem('cart');

  // Check if cart is empty
  if (!cartString) {
    cartList.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  // Convert comma-separated string back into a simple array
  let cartArray = cartString.split(",");

  // Build the HTML list
  let htmlContent = "<ul>";
  for (let i = 0; i < cartArray.length; i++) {
    htmlContent += "<li>" + cartArray[i] + " - $" + ITEM_PRICE + "</li>";
  }
  htmlContent += "</ul>";

  // Calculate total cost
  let totalCost = cartArray.length * ITEM_PRICE;
  htmlContent += "<p><strong>Total Cost: $" + totalCost + "</strong></p>";

  cartList.innerHTML = htmlContent;
}

// 3. CHECKOUT & RECEIPT PROCESS (Runs on cart.html)
function orderProcess() {
  const name = document.getElementById("nameField").value.trim();
  const money = parseFloat(document.getElementById("moneyField").value);
  const output = document.getElementById("spaceForJavaScriptOutput");
  
  let cartString = localStorage.getItem('cart');

  // Input Validation
  if (!name || isNaN(money)) {
    output.innerHTML = "<p class='error'>Please enter a valid name and money amount.</p>";
    return;
  }
  
  if (!cartString) {
    output.innerHTML = "<p class='error'>Your cart is empty!</p>";
    return;
  }

  // Convert stored string back into an array to get count & names
  let cartArray = cartString.split(",");
  let totalCost = cartArray.length * ITEM_PRICE;

  // Check if customer has enough money
  if (money < totalCost) {
    output.innerHTML = 
      "<div class='error-box'>" +
        "<p><strong>Not Enough Money!</strong></p>" +
        "<p>Total: $" + totalCost + " | Paid: $" + money + "</p>" +
        "<p>You still owe: $" + (totalCost - money) + "</p>" +
      "</div>";
  } else {
    // Produce receipt showing all 5 required elements
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

    // Clear cart storage after purchase
    localStorage.removeItem('cart');
  }
}