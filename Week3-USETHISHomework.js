const pizzaToppings = ["cheese", "pepperoni", "beets", "and sausage."];
function greetCustomer(){
  let greeting = `Welcome to Pizza House, our toppings are:`;
  for (let topping of pizzaToppings){
    greeting += `${topping}, `;
    }
  console.log(greeting);
  greetCustomer();

  const pizzaToppings = ["cheese", "pepperoni", "roasted beets", "and sausage"];
  function getPizzaOrder(size, crust, ...toppings){
  let order = `One ${size} ${crust} crust pizza with `;
  for (let topping of pizzaToppings){
    order += `{topping},`;
  }
  console.log(`${order}. Coming up!`);
  return [size, crust, toppings];
  }
  let customerOrder = getPizzaOrder("large", "cheesy", "pepperoni");
  getPizzaOrder("large", "cheesy", "pepperoni", );


  const pizzaToppings = ["cheese", "pepperoni", "roasted beets", "and sausage"];
  function preparePizza ([orderSize, orderCrust, orderToppings]) {
    console.log("Cooking your pizza");
    return {
      size: orderSize,
      crust: orderCrust,
      toppings: orderToppings
    };
  }


  let cookedPizza = preparePizza(customerOrder);
  function servePizza(pizza){
    let orderReady = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;
    for (orderReady) += `${topping},`;
  }
  console.log(`${orderReady}. += Enjoy!`);
  servePizza(cookedPizza);
  return pizza;

// function addListElementToString(string, list){
//   for (let i = 0; i < list.length; i++){
//     if (list.length === 1){
//       string =+ `${list[i]}.`
//     }
//   }
// }
// function checkForToppings(toppings){
//   if (!toppings);
// }

function greetCustomer(){
  getPizzaOrder;
}
function getPizzaOrder(){
  preparePizza;
}
function preparePizza(){
  servePizza;
}
function servePizza(){
  cookedPizza;
}

const pizzaToppings = ["cheese", "pepperoni", "roasted beets", "and sausage"];
function getPizzaOrder(size, crust, ...toppings){
let order = `One ${size} ${crust} crust pizza with `;
for (let topping of pizzaToppings){
  order += `{topping},`;
  if (topping = "none") {
    console.log("One ${size} ${crust} crust pizza coming up!")
  } else {
console.log(`${order}. Coming up!`);
return [size, crust, toppings];
  }
let customerOrder1 = getPizzaOrder("large", "cheesy", "pepperoni");
getPizzaOrder("large", "cheesy", "pepperoni", );
}
let customerOrder2 = getPizzaOrder("medium", "thin", "none");
getPizzaOrder("medium", "thin", "none");
}
let cookedPizza = preparePizza(customerOrder);
function servePizza(pizza){
  let orderReady = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;
  for (orderReady) += `${topping},`;
  return plainPizza(orderReady, pizza);

  function plainPizza(orderReady, pizza) {
    if (`${topping}` = "none") {
      console.log("Order up! Here's your plain cheese pizza!");
    } else {
    }
    console.log(`${orderReady}. += Enjoy!`);
    return pizza;
    servePizza(cookedPizza);
  }

  const pizzaToppings = ["cheese", "pepperoni", "roasted beets", "and sausage"];
  function getPizzaOrder(size, crust, ...toppings){
  let order = `One ${size} ${crust} crust pizza with `;
  for (let topping of pizzaToppings){
    order += `{topping},`;
    if (topping = "none") {
      console.log("One ${size} ${crust} crust pizza coming up!")
    if (topping = "other"){
      console.log("We don't have that. Please order something else.")
    }
    } else {
  console.log(`${order}. Coming up!`);
  return [size, crust, toppings];
    }
  let customerOrder1 = getPizzaOrder("large", "cheesy", "pepperoni");
  getPizzaOrder("large", "cheesy", "pepperoni", );
  }
  let customerOrder2 = getPizzaOrder("medium", "thin", "none");
  getPizzaOrder("medium", "thin", "none");
  }
  let customerOrder3 = getPizzaOrder("small, "crispy", "other");
  }

