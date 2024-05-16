// Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwichMaker (...ingredients:string[]){
    console.log(`Thanks for Your Order!`);
    console.log(`YOur Sandwiches Includes:`);
    
   for (let index = 0; index < ingredients.length; index++) {
     console.log(`${index}- ${ingredients[index]}`);
   }
    console.log(`Enjoy your sandwich!`);
}
sandwichMaker('Bread','Cheese','Grilled Chicken','Salad','Mayo','Mustard paste')
sandwichMaker('Bread','Mushrooms','Ketchup','Chopped Oninons','Masala')
sandwichMaker('Bread','Cheese','Grilled Chicken','Salad','Mayo','Mustard paste','Sauces')