const pizzas : Array<string> = ['Pepproni pizza','Tikka pizza','Sicilian pizza']
for (let i:number = 0;i<pizzas.length;i++){
   console.log(pizzas[i]);
}
//modifying the program so that it prints a message instead of just pizza name
for (let i :number= 0;i<pizzas.length;i++){
    console.log(`I really like ${pizzas[i]}`);
}
// Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log(`\n I really like pizzas`);
