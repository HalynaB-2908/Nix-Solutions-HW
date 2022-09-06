//ids,classes
let cokeNumber = document.getElementById("cokeNumber").textContent;
let fantaNumber = document.getElementById("cokeNumber").textContent;
let waterNumber = document.getElementById("cokeNumber").textContent;

let cokePrice = document.getElementById("cokePrice").textContent;
let fantaPrice = document.getElementById("fantaPrice").textContent;
let waterPrice = document.getElementById("waterPrice").textContent;

let buyCoke = document.getElementById("buyCoke");
let buyFanta = document.getElementById("buyFanta");
let buyWater = document.getElementById("buyWater");

let money = document.getElementById("money");

function buy(itemPrice, usrMny){
    let price = itemPrice.substring(0,2);
    console.log(itemPrice)
    console.log(price);
    let mn = usrMny.textContent.substring(6,9);
    console.log(usrMny.textContent)
    console.log(mn)
    let result = mn - price;
    console.log(result);
    usrMny.textContent = `Money: ${result}$`;
    
}

