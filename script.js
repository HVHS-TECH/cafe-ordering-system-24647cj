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

const ITEM_PRICE = 100;
let shoparray = ["Sparco Racing suit","Bell Racing helmet","Minus Racing gloves","LN Racing shoes"]
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
// let selectedItemName = shoparray[itemChoice];

function orderProcess(){

const ITEM_FIELD = document.getElementById("itemField");
const NAME_FIELD = document.getElementById("nameField");
const MONEY_FIELD = document.getElementById("moneyField");

let Item = ITEM_FIELD.value;
let Name = NAME_FIELD.value;
let Money = MONEY_FIELD.value;

if(Money < 100){
    OUTPUT.innerHTML += "<p>Sorry you cant</p>"
}

if (Item < 0 || Item > shoparray.length || isNaN(Item)) {
        OUTPUT.innerHTML = "<p style='color: red;'>❌ Error: Please choose a valid item number (1, 2, or 3).</p>";
        return; 
    } else {
        // If they have enough money, calculate change
        let change = userMoney - ITEM_PRICE;

        // Print the 5 required fields to the Receipt
        OUTPUT.innerHTML = `
            <h3>🧾 Receipt Summary</h3>
            <p><b>1. Customer Name:</b> ${userName}</p>
            <p><b>2. Item Bought:</b> ${selectedItemName} ($${ITEM_PRICE})</p>
            <p><b>3. Total Cost:</b> $${ITEM_PRICE}</p>
            <p><b>4. Money Given:</b> $${userMoney}</p>
            <p><b>5. Your Change:</b> $${change}</p>
        `;
    }

}