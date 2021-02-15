//* 1. & 2. Mine
let pizzaToppings = ["cheese", "pepperoni", "pineapple", "and sausage."];
  let greetCustomer = `Welcome to Pizza House, our toppings are: ${pizzaToppings}`;
  for (let name of greetCustomer) {
    greetCustomer + `${pizzaToppings}.`;
}
  console.log(greetCustomer);

//* With Trey:
const pizzaToppings = ["cheese", "pepperoni", "beets", "and sausage."];
function greetCustomer(){
  let greeting = `Welcome to Pizza House, our toppings are:`;
  for (let topping of pizzaToppings){
    greeting += `${topping}, `;
    }
  console.log(greeting);
  greetCustomer();


//* 3. Create a `getPizzaOrder` function that
//*    - has the parameters size, crust, and an indefinite amount of toppings as inputs
//*    - prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
//*    - outputs a list with the size, crust, and toppings
//* Mine. THIS DOES NOT WORK. SAYS getPizzaOrder IS NOT DEFINED.
//*const pizzaToppings = ["cheese", "pepperoni", "roasted beets", "and sausage"];
//*for (let topping of pizzaToppings) {
//*  let getPizzaOrder = `One large thick crust pizza with ${pizzaToppings} coming up!`;
  for (let topping of pizzaToppings){
    getPizzaOrder + `${pizzaToppings}`;
  }
  console.log(getPizzaOrder);
};
getPizzaOrder();

// with Trey:
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



// 4. Create a `preparePizza` function that
  //  - has an array as its parameter with three items: a size, a crust, and a list of toppings
  //  - prints something like "...Cooking pizza..."
  //  - outputs a pizza <em><b>Object</b></em> with appropriate key-value pairs for size, crust, and toppings

Mine. THIS DOES NOT WORK
const pizzaToppings = ["cheese", "pepperoni", "roasted beets", "and sausage"];
function preparePizza(size, crust, pizzaToppings) {
obj["pizza"] = {
  size: large,
  crust: cheesy,
  pizzaToppings: all,
  console.log(`Cooking ${size} pizza with ${crust} and ${toppings}.`);
  console.log(obj.pizza) = size, crust, pizzaToppings;
};
}

With Trey:
const pizzaToppings = ["cheese", "pepperoni", "roasted beets", "and sausage"];
function preparePizza ([orderSize, orderCrust, orderToppings]) {
  console.log("Cooking your pizza");
  return {
    size: orderSize,
    crust: orderCrust,
    toppings: orderToppings
  };
}



//* 5. Create a `servePizza` function that
 //*  - has a parameter of a pizza Object
  //* - logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
  //* - outputs the same pizza Object that was passed in *//


With Trey:
let cookedPizza = preparePizza(customerOrder);
function servePizza(pizza){
  let orderReady = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;
  for (orderReady) += `${topping},`;
}
console.log(`${orderReady}. += Enjoy!`);
return pizza;
servePizza(cookedPizza);




function getOrder {}

function prepareOrder{
  getOrder
}

function cookOrder{
  prepareOrder
}
getOrder is in cookOrder because it's in prepareOrder.

function serveOrder {
  cookOrder
}
...continues process



6. Call each function and (starting with `preparePizza`) use the returned value from the previous function as its input

greetCustomer() {
  getPizzaOrder;
}

getPizzaOrder() {
  preparePizza;
}

preparePizza () {
  servePizza;
}

servePizza {
  cookedPizza;
}

7. Add, commit, and push your JS file to your GitHub repo.
8. Send your TA a link to your GitHub Homework repo when finished.

## Bonus Challenge

9. Figure out how to add "and" before the last topping in a list of toppings so when we list toppings it is more grammatically correct. You could create a `listToppings` function that stores the functionality, and call the function each time we list toppings in a function.
   - i.e. "Our toppings are a, b, and c." instead of "Our toppings are a, b, c"
done, but how do I get spaces between them?

10. In `getPizzaOrder`, if an order is placed with no toppings, print a slightly different message, like "One large thick crust cheese pizza coming up!" (Instead of "One large thick crust pizza with coming up!"). Alter `servePizza` in a similar way to fix its grammar when serving a "plain" cheese pizza.

REPL.IT RETURNS NOTHING.
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

  11. In `getPizzaOrder`, check the toppings the customer ordered against your list of available toppings. If they order a topping you don't offer, print a message that informs them you don't offer that topping and to order again.



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
