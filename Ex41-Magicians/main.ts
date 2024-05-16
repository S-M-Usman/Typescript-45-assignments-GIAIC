// Magicians: Make a array of magician’s names.
let magicians :string[]=['Emilie Holmes','Emilie Douglas','Marian McLaughlin','Myrtle Hodges']
//  Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians:string[]):void{
  magicians.forEach(magician =>{
    console.log(magician);
  })
}
show_magicians(magicians)
