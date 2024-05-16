let personAge :number=46;
if(personAge < 2){
    console.log('You are a baby');
}
else if(personAge<4 && personAge>=2){
    console.log('you are a toddler');
    
}
else if(personAge<13 && personAge>=4){
    console.log('you are a kid');
    
}
else if(personAge<20 && personAge>=13){
    console.log('you are a teenager');
    
}
else if(personAge<65 && personAge>=20){
    console.log('you are an adult');
    
}
else{
    console.log('you are an elder');
    
}