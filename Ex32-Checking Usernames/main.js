var current_users = ['andrew', 'david', 'admin', 'tom', 'berry'];
var new_users = ['admin', 'berry', 'peter', 'harry', 'king'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users.includes(new_user.toLowerCase())) {
        console.log("sorry! the username is taken, please eneter a new and valid username");
    }
    else {
        console.log("the username is available,please login");
    }
}
