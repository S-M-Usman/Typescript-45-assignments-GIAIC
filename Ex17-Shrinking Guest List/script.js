"use strict";
// ++++++++++++++++++++++++++++++++++++EX 14 +++++++++++++++++++++++++++++++++++++++++++++++++++++
// let guestList:string[] = ["Ben","Gwen","Harry","Stella","Tiger"];
// // use your list to print a message to each person, inviting them to dinner.
// guestList.forEach(guestList=> {console.log
//     (`Hello ${guestList}, you are invited for a dinner on Wednesday April 24,2024?`)
// })
// ++++++++++++++++++++++++++++++++++++EX 15+++++++++++++++++++++++++++++++++++++++++++++++++++++
// let guestList:string[] = ["Ben","Gwen","Harry","Stella","Tiger"];
// //modifying guestList as one of the guest couldnt make it
// let removedGuest=guestList.splice(4,1).pop();
// console.log(`Mr ${removedGuest},could not make it to the dinner`);  
// //adding new guest
// let newGuest:string = "Peter";
// guestList.push(newGuest)  
// // console.log(`The new guest nvited to dinner ,${guestList}`);
// // use your list to print a message to each person, inviting them to dinner.
//  guestList.forEach(guestList=> {console.log
//     (`Hello ${guestList}, you are invited for a dinner on Wednesday April 24,2024 !`)
//  });
// ++++++++++++++++++++++++++++++++++++EX 16+++++++++++++++++++++++++++++++++++++++++++++++++++++
//using the same program
let guestList = ["Ben", "Gwen", "Harry", "Stella", "Tiger"];
//modifying guestList as one of the guest couldnt make it
let removedGuest = guestList.splice(4, 1).pop();
//adding new guest
let newGuest = "Peter";
guestList.push(newGuest);
//message for a bigger table
// console.log(`I just found a bigger table so fiends will be joing us at the dinner`);
//adding guest at the beginning of the guest list
guestList.unshift("Babar");
//adding guest at the end of the guest list using append()
guestList.push("Harris");
//adding guest at the middle of the guest list 
guestList.splice(guestList.length / 2, 0, "Tobey");
// use your list to print a message to each person, inviting them to dinner.
// guestList.forEach(guestList=> {
//    console.log(`Hello ${guestList}, you are invited for a dinner on Wednesday April 24,2024 !`)
// });
//+++++++++++++++++++++++++++++++++++Ex 17 +++++++++++++++++++++++++++++++++
console.log(`Unfortunately,the table is reserved by others and now i can invite only two people,so I am really sorry!`);
//shrinking the guest list
while (guestList.length > 2) {
    removedGuest = guestList.pop();
    console.log(`Mr ${removedGuest},sorry for the inconvenience`);
}
console.log(`Mr ${guestList[0]} and Mr ${guestList[1]}, you are still invited to join`);
//removing the remAING guest to make sure it is an empty list
guestList.splice(0, 2);
console.log(guestList);
