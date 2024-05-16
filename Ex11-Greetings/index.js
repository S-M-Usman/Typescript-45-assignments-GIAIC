//previous work of exercise 10
var personName = ["Tony Stark", "Steve Rogers", "Bruce Banners", "Peter Parker", "Bruce Wayne"];
//printing each element of the array
// for(var i:number=0;i<personName.length;i++){
//  console.log(personName[i]);
// } //
//exercise 11 using same array but this time printing a message to each element 
for (var i = 0; i < personName.length; i++) {
    console.log("hello, ".concat(personName[i], ",it is happy eid to you"));
}
