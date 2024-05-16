//using the same program of exercise
var users = ['adeeb', 'roman', 'sarah', 'admin', 'haris'];
if (users.length === 0) { //if elements to check whwether the list is empty or not
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again"));
        }
    }
}
//empty list to make sure the first block of lenght check run since list is empty
users = [];
if (users.length === 0) { //if elements to check whwether the list is empty or not
    console.log("We need to find some users!");
}
else {
    for (var _a = 0, users_2 = users; _a < users_2.length; _a++) {
        var user = users_2[_a];
        if (user === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again"));
        }
    }
}
