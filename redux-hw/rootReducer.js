/*export */ function rootReducer(state, action) {
  if (action === "_BUYCOLA_") {
    if (state - 22 < 0) {
      error.textContent = "YOU DO NOT HAVE ENOUGH MONEY";
      error.style.color = "red";
      return false;
    }
    let result = 22 - price;
    return result;
    //usrMny.textContent = `Money: ${result}$`;
  } else if (action === "_BUYFANTA_") {
    if (state - 45 < 0) {
      error.textContent = "YOU DO NOT HAVE ENOUGH MONEY";
      error.style.color = "red";
      return false;
    }
    let result = 45 - price;
    return result;
    //usrMny.textContent = `Money: ${result}$`;
  } else if (action === "_BUYWATER_") {
    if (state - 65 < 0) {
      error.textContent = "YOU DO NOT HAVE ENOUGH MONEY";
      error.style.color = "red";
      return false;
    }
    let result = 65 - price;
    return result;
    //usrMny.textContent = `Money: ${result}$`;
  }
}
