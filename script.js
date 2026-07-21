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

// --- CONFIGURATION & GLOBAL VARIABLES ---
const ITEM_PRICE = 100; // Fixed price for all racing equipment items
const shoparray = [
  "Sparco Racing suit", 
  "Minus Racing gloves", 
  "Bell Racing helmet", 
  "LN Racing shoes"
];

// Helper function to calculate change
function calculateChange(money, totalCost) {
  return money - totalCost;
}

// --- MAIN SHOP PAGE FUNCTIONS ---

// Function to add an item to the cart array stored in localStorage
function addToCart(itemName) {
  // Retrieve existing cart or initialize an empty array
  let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
  
  // Push selected item into cart
  cart.push(itemName);
  
  // Save updated cart back to localStorage
  localStorage.setItem('cartItems', JSON.stringify(cart));
  
  alert(itemName + " has been added to your cart!");
}

// --- CART PAGE FUNCTIONS ---

// Function to display cart contents and total price on cart.html
function displayCart() {
  const cartListDiv = document.getElementById("cartItemsList");
  if (!cartListDiv) return; // Exit if not on cart.html page

  let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

  if (cart.length === 0) {
    cartListDiv.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let htmlContent = "<ul>";
  cart.forEach(item => {
    htmlContent += `<li>${item} - $${ITEM_PRICE}</li>`;
  });
  htmlContent += "</ul>";

  const totalCost = cart.length * ITEM_PRICE;
  htmlContent += `<p><strong>Total Items:</strong> ${cart.length}</p>`;
  htmlContent += `<p><strong>Total Price:</strong> $${totalCost}</p>`;

  cartListDiv.innerHTML = htmlContent;
}

// Function to handle payment validation, insufficient funds warning, and receipt generation
function orderProcess() {
  const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
  const NAME_FIELD = document.getElementById("nameField");
  const MONEY_FIELD = document.getElementById("moneyField");

  const customerName = NAME_FIELD.value.trim();
  const moneyGiven = parseFloat(MONEY_FIELD.value);
  let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Basic validation check
  if (!customerName || isNaN(moneyGiven)) {
    OUTPUT.innerHTML = "<p style='color: red;'>Please enter a valid name and money amount.</p>";
    return;
  }

  if (cart.length === 0) {
    OUTPUT.innerHTML = "<p style='color: red;'>Your cart is empty. Please add items before checking out.</p>";
    return;
  }

  const totalCost = cart.length * ITEM_PRICE;

  // Logic: Check if payment is sufficient
  if (moneyGiven < totalCost) {
    // Insufficient funds warning
    OUTPUT.innerHTML = `
      <div style="color: red; border: 1px solid red; padding: 10px; margin-top: 10px;">
        <h3>Insufficient Funds!</h3>
        <p>Customer: ${customerName}</p>
        <p>Total Cost: $${totalCost}</p>
        <p>Money Provided: $${moneyGiven}</p>
        <p>You need $${totalCost - moneyGiven} more to complete this order.</p>
      </div>
    `;
  } else {
    // Payment successful: Produce receipt showing all 5 required elements
    const change = calculateChange(moneyGiven, totalCost);

    OUTPUT.innerHTML = `
      <div style="border: 2px dashed black; padding: 15px; margin-top: 15px; background-color: #f9f9f9;">
        <h2>--- OFFICIAL RECEIPT ---</h2>
        <p><strong>1. Customer Name:</strong> ${customerName}</p>
        <p><strong>2. Items Purchased:</strong> ${cart.join(", ")} ($${ITEM_PRICE} each)</p>
        <p><strong>3. Total Cost:</strong> $${totalCost}</p>
        <p><strong>4. Money Provided:</strong> $${moneyGiven}</p>
        <p><strong>5. Change Due:</strong> $${change}</p>
        <p><em>Thank you for shopping with us!</em></p>
      </div>
    `;

    // Clear cart storage after successful purchase
    localStorage.removeItem('cartItems');
  }
}