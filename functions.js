// You manage a grocery store and need to keep track of the inventory of various items. You will use arrays to store the data and various functions to manipulate and analyze the data. 
// Create an array containing the names of all items in the inventory maximum of 10.
// Create a separate array with the corresponding stock quantities of each item maximum of 10.
// Write a function to add a new item to the inventory, updating both arrays.
// Write a function to update the stock quantity of an existing item.
// Write a function to calculate the total number of items in the inventory.
// Write a function to find the item with the lowest stock quantity.


let inventory= ["Mangoes","Bananas","pears","passion","quavas","oranges","dates","apples","beetroot"]
let quantities = [50,100,70,25,100,100,150,300,100,70]

function addItem(fruit, quantity){
  if(inventory.length < 10){
    inventory.push(fruit)
    quantities.push(quantity)
    console.log(inventory)
    console.log(quantities)
    console.log(`${fruit} have been added to inventory `);
  }
  else{
     console.log("Inventory is full")
  }

}
addItem("strawberries",300)

function updateStock(fruit, quantity){
  let index = inventory.indexOf(fruit)
  if(index !== -1){
    quantities[index] = quantity;
    console.log(quantities)
    console.log(inventory);
    console.log(` ${fruit} updated to ${quantity}`);
    
  }
  else{
    console.log(`${fruit} is not found in the inventory`);
  }
}
updateStock("passion",75)

function totalInventory(){
  let i = 0
  let sum = 0;
  while(i < quantities.length){
    console.log(sum+=quantities[i]);
    i++
  }
  console.log({sum})
}
totalInventory()


function lowestQuantity() {
  let minIndex = 0;
  for (let i = 1; i < inventory.length; i++) {
    if (inventory[i] < inventory[minIndex]) {
      minIndex = i;
    }
  }
  return inventory[minIndex];
}
console.log(lowestQuantity());