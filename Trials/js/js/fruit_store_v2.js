function runActivity() {
  const fruit_names = [];
  const fruit_prices = [];
  const fruit_stocks = [];

  function addItem() {
    let fruit_name = prompt("What is the name of the fruit?");
    let fruit_price = Number(prompt("What is the price of the fruit?"));

    if (fruit_price >= 0) {
      fruit_name = fruit_name.toLowerCase();

      fruit_names.push(fruit_name);
      fruit_prices.push(fruit_price);
      fruit_stocks.push(0);

      console.log(
        fruit_name +
          " added as item for sale. Each " +
          fruit_name +
          " sells for PHP " +
          fruit_price +
          " Stock set to " +
          fruit_stocks
      );
    } else {
      console.error("ERROR: Invalid price! Enter a positive value.");
    }
  }

  function restock() {
    let choice = prompt("What would you like to add stock to?");
    choice = choice.toLowerCase();
    let fruit_found = false;

    for (let i = 0; i < fruit_names.length; i++) {
      if (fruit_names[i] == choice) {
        fruit_found = true;
        let addStock = Number(
          prompt("How many stock would you like to add to " + choice + "?")
        );

        if (addStock >= 0) {
          fruit_stocks[i] += addStock;
          console.log("Restocked " + choice + " for " + addStock + " piece/s.");
          console.log("New Stock for " + choice + " : " + addStock + " pc/s");
        } else {
          console.error(
            "ERROR: Invalid stock amount! Enter a value greater than ZERO (0)"
          );
        }
      }
    }
    if (choice != fruit_names[i]) {
      console.error("ERROR: Fruit was not found!");
    }
  }

  function checkPrice() {
    let choice = prompt("What would you like to check the price of?");
    choice = choice.toLowerCase();
    let amount = Number(
      prompt("How many items would you like to check for " + choice)
    );
    let fruit_found = false;

    for (let i = 0; i < fruit_names.length; i++) {
      if (fruit_names[i] == choice) {
        fruit_found = true;
        let total = amount * fruit_prices[i];
        console.log(amount + " of " + choice + " is worth " + total);
      }
    }
    if (choice != fruit_names[i]) {
      console.log("ERROR: Fruit was not found!");
    }
  }

  function sell() {
    let choice_name = prompt("What would you like to buy?");
    choice_name = choice_name.toLowerCase();
    let fruit_found = false;

    for (let i = 0; i < fruit_names.length; i++) {
      if (fruit_names[i] == choice_name) {
        fruit_found = true;
        let amount = Number(
          prompt("How many " + choice_name + " would you like buy?")
        );
        if (amount >= 0 && amount <= fruit_stocks[i]) {
          let total = amount * fruit_prices[i];
          fruit_stocks[i] -= amount;
          console.log(
            "SOLD " +
              amount +
              " " +
              choice_name +
              " for PHP " +
              total +
              ". Remaining stock: " +
              fruit_stocks[i]
          );
        }
        if (amount > fruit_stocks[i]) {
          console.error("ERROR: Not enough stock");
          console.log("Stock for " + choice_name + " = " + fruit_stocks[i]);
        } else if (amount < 0) {
          console.error("ERROR: Can not have negative amount.");
        }
      }
    }

    if (fruit_found == false) {
      console.error("ERROR: Fruit was not found.");
    }
  }

  alert("Paul's Fruit Store");
  let i = 0;
  while (i == 0) {
    let choice = Number(
      prompt("(1) Add new items (2) Restock (3) Check price (4) Sell (5) Stop")
    );
    switch (choice) {
      case 1:
        addItem();
        break;
      case 2:
        restock();
        break;
      case 3:
        checkPrice();
        break;
      case 4:
        sell();
        break;
      case 5:
        i = 1;
        break;
      default:
        console.error("ERROR: Enter one of the choices.");
    }
  }
}
