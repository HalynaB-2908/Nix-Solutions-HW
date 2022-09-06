/*import createStore from "createStore.js";
import rootReducer from "rootReducer.js";*/
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
let error = document.getElementById("error");
let mn = money.textContent.substring(7, 9);
mn = mn.replace("$", "");

console.log(mn);

function rootReducer(state, action) {
  console.log("rootRoducer works!");
  if (action === "_BUYCOLA_") {
    if (state - 22 < 0) {
      error.textContent = "YOU DO NOT HAVE ENOUGH MONEY";
      error.style.color = "red";
      console.log("error works!");
      return false;
    }
    let result = 22 - price;
    state.textContent = `Money: ${result}`;
    console.log("buyCola works!");
    //usrMny.textContent = `Money: ${result}$`;
  } else if (action === "_BUYFANTA_") {
    if (state - 45 < 0) {
      error.textContent = "YOU DO NOT HAVE ENOUGH MONEY";
      error.style.color = "red";
      return false;
    }
    let result = 45 - price;
    state.textContent = `Money: ${result}`;
    //usrMny.textContent = `Money: ${result}$`;
  } else if (action === "_BUYWATER_") {
    if (state - 65 < 0) {
      error.textContent = "YOU DO NOT HAVE ENOUGH MONEY";
      error.style.color = "red";
      return false;
    }
    let result = 65 - price;
    state.textContent = `Money: ${result}`;
    //usrMny.textContent = `Money: ${result}$`;
  }
}

function createStore(rootReducer, initialState) {
  let state = rootReducer(initialState, { type: "__INIT__" });
  const subscribers = [];
  console.log("createStore works!");
  return {
    //action = {type:"__ACTION__"}
    dispatch(action) {
      state = rootReducer(state, action);
      subscribers.forEach((sub) => sub());
    },
    subscribe(callback) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  };
}

const store = createStore(rootReducer, mn);

function buy(itemPrice, usrMny) {
  console.log("buy works!");
  if (itemPrice == 22) {
    store.dispatch("_BUYCOLA_");
  } else if (itemPrice == 22) {
    store.dispatch("_BUYFANTA_");
  } else if (itemPrice == 22) {
    store.dispatch("_BUYWATER_");
  }
}
