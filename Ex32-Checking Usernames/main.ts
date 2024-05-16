let current_users :string[]=['andrew','david','admin','tom','berry']
let new_users : string[]=['admin','berry','peter','harry','king']
for (let new_user of new_users) {
    if (current_users.includes(new_user.toLowerCase())) {
        console.log(`sorry! the username is taken, please eneter a new and valid username` );

    }
    else{
        console.log(`the username is available,please login`);

    }
}

