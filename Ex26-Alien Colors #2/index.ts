let alien_color:string= "green"
if(alien_color === "green"){
    console.log("You just earned 5 points for shooting the alien")
}
else{
    console.log("You just earned 10 points for shooting the alien")
}
//changing the color so that this time else block run this time
alien_color = 'red'
if(alien_color === "green"){
    console.log("You just earned 5 points for shooting the alien")
}
else{
    console.log("You just earned 10 points for shooting the alien")
}