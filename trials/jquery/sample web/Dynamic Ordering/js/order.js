$(document).ready(function () {
  const menu_prices = {
    burger: 60,
    steak: 80,
    fries: 50,
    salad: 70,
    sprite: 25,
    icecream: 25,
  };
  const menu_names = {
    burger: "Burger",
    steak: "Steak",
    fries: "Fries",
    salad: "Salad",
    sprite: "Sprite",
    icecream: "Ice Cream",
  };
  let total_price = 0;

  $("#food-order").submit(function (x) {
    let selectedFood = $("#food-select").val();
    let amount = Number($("#food-amount").val());

    let price = menu_prices[selectedFood] * amount;
    total_price += price;

    let newEntry =
      "<tr><td>" +
      menu_names[selectedFood] +
      "</td><td>" +
      amount +
      "</td><td>₱" +
      price +
      "</td></tr>";
    $("#food-table-list").html($("#food-table-list").html() + newEntry);
    $("#food-table-total").text(total_price);
    x.preventDefault();
  });
  $(".sauce").change(function () {});

  $("#get_all").change(function () {
    const isChecked = $(this).prop("checked");
    $(".sauce").prop("checked", isChecked);
  });
});
