let favSports:string[]=['Football','Cricket','Wrestling','Basketball']
let removedsport=favSports.splice(4,1).pop()//intentional index error
console.log(removedsport);
removedsport=favSports.splice(3,1).pop()//correcting index error
console.log(removedsport)