// ++++++++++++++++++++++++++++++++++++EX 14 +++++++++++++++++++++++++++++++++++++++++++++++++++++
// let guestList:string[] = ["Ben","Gwen","Harry","Stella","Tiger"];
// // use your list to print a message to each person, inviting them to dinner.
// guestList.forEach(guestList=> {console.log
//     (`Hello ${guestList}, you are invited for a dinner on Wednesday April 24,2024?`)
// })
// ++++++++++++++++++++++++++++++++++++EX 15+++++++++++++++++++++++++++++++++++++++++++++++++++++
let guestList:string[] = ["Ben","Gwen","Harry","Stella","Tiger"];
//modifying guestList as one of the guest couldnt make it
let removedGuest=guestList.splice(4,1).pop();
console.log(`Mr ${removedGuest},could not make it to the dinner`);  
//adding new guest
let newGuest:string = "Peter";
guestList.push(newGuest)  
// console.log(`The new guest nvited to dinner ,${guestList}`);

// use your list to print a message to each person, inviting them to dinner.
 guestList.forEach(guestList=> {console.log
    (`Hello ${guestList}, you are invited for a dinner on Wednesday April 24,2024 !`)
 });