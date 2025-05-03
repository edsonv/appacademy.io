function dinerBreakfast() {
  let order = "scrambled eggs and bacon please.";
  console.log(order);

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
}

let bfastOrder = dinerBreakfast();

bfastOrder("chocolate chips pancakes");
bfastOrder("greek yogurt with cereal");
bfastOrder("garlic butter bread with coffee");