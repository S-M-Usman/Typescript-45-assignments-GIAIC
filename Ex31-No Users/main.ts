//using the same program of exercise
let users :string[]=['adeeb','roman','sarah','admin','haris']
 
 if (users.length === 0 ){//if elements to check whwether the list is empty or not
    console.log(`We need to find some users!`)
}else{
    for(let user of users){ 
        if (user === "admin"){
            console.log(`Hello admin, would you like to see a status report?`);
        }
        else{
            console.log(`Hello ${user}, thank you for logging in again`);
        }
    }
}
//empty list to make sure the first block of lenght check run since list is empty
users = []
if (users.length === 0 ){//if elements to check whwether the list is empty or not
    console.log(`We need to find some users!`)
}else{
    for(let user of users){ 
        if (user === "admin"){
            console.log(`Hello admin, would you like to see a status report?`);
        }
        else{
            console.log(`Hello ${user}, thank you for logging in again`);
        }
    }
}