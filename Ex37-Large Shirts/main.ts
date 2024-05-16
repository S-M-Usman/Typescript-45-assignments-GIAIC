// EX-36-T_SHIRT
// function make_shirt(size:string , text:string){
//     console.log(`A shirt of size: ${size} with text "${text}" to be printed on it is added to cart,Plz proceed to pay`);
//   }
  
//   make_shirt("L","Hello World");
//   make_shirt("M","I love typescript")
//   make_shirt("S","GIAIC")
//----------------------------------EX-37--------------------------------------------------------//
//Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size:string='L',text:string='I love TypeScript'){
   console.log(`A shirt of size: ${size} with text "${text}" to be printed on it is added to cart,Plz proceed to pay`);
}
make_shirt()
make_shirt('M')
make_shirt("S","I love Python")