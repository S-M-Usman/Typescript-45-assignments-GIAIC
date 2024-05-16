// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size:string , text:string){
  console.log(`A shirt of size: ${size} with text "${text}" to be printed on it is added to cart,Plz proceed to pay`);
}

make_shirt("L","Hello World");
make_shirt("M","I love typescript")
make_shirt("S","GIAIC")