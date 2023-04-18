// You manage a grocery store and need to keep track of the inventory of various items. You will use arrays to store the data and various functions to manipulate and analyze the data. 
// Create an array containing the names of all items in the inventory maximum of 10.
// Create a separate array with the corresponding stock quantities of each item maximum of 10.
// Write a function to add a new item to the inventory, updating both arrays.
// Write a function to update the stock quantity of an existing item.
// Write a function to calculate the total number of items in the inventory.
// Write a function to find the item with the lowest stock quantity.


let inventory= ["Mangoes","Bananas","pears","passion","quavas","oranges","dates","apples","beetroot"]
let quantities = [50,100,70,25,100,100,150,300,100,70]

let stock = {};
inventory.forEach((item, index) => {
  stock[item] = quantities[index];
});


console.log(stock);


function addItem(fruit, quantity){
  if(inventory.length < 10){
    inventory.push(fruit)
    quantities.push(quantity)
    stock[fruit] = quantity; 
    console.log(inventory)
    console.log(quantities)
    console.log(`${fruit} has been added to inventory `);
  }
  else{
     console.log("Inventory is full")
  }

}
addItem("strawberries",300)
console.log(stock)

function updateStock(fruit, quantity){
  let index = inventory.indexOf(fruit)
  if(index !== -1){
    quantities[index] = quantity;
    console.log(quantities)
    stock[fruit] = quantity
    console.log(`stock of ${fruit} updated to ${quantity}`);
    
  }
  else{
    console.log(`${fruit} is not found in the inventory`);
  }
}
updateStock("passion",75)
console.log(stock);

function totalInventory() {
  let sum = 0;
  for (let i = 0; i < quantities.length; i++) {
    sum += quantities[i];
  }
  console.log(`Total inventory: ${sum}`);
}

totalInventory();

function lowestQuantity() {
  let lowStock = 0 ;
  let lowestStock = Infinity;

  for (let i = 0; i < inventory.length; i++) {
    if (quantities[i] < lowestStock) {
      lowestStock = quantities[i];
      lowStock = inventory[i];
    }
  }
  return lowStock;
}
console.log(lowestQuantity());
