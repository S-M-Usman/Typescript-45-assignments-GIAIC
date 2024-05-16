
let magicians :string[]=['Emilie Holmes','Emilie Douglas','Marian McLaughlin','Myrtle Hodges']
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians:string[]):void{
  magicians.forEach(magician =>{
    console.log(magician);
  })
}
function make_great(magicians:string[]){
  for(let i=0;i<magicians.length;i++){
    magicians[i]=`${magicians[i]} The Great`;
  }
  return magicians
}
//Call the function make_great() with a copy of the array of magicians’ names
let copyMagicians : Array<string> = [...magicians]
make_great(copyMagicians)
console.log(`copy array`)
copyMagicians.forEach(copyMagicians=>{
    console.log(copyMagicians)
})

// Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
console.log(`original array`)
show_magicians(magicians)