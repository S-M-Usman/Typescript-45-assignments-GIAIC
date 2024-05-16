// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// storing person name in variable
let person_name :  String = 'Tony Stark';
// converting name in uppercase , and lowercase 
console.log("Your name in  UpperCase is ",person_name.toUpperCase());
console.log("Your name in LowerCase is",person_name.toLowerCase());
// converting name in title case
console.log('Your Name In Title Case Is',person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase());
