"use strict";
// Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
const petAnimals = ['Cat', 'Dog', 'Horse', 'Cow'];
for (let petAnimal of petAnimals) {
    console.log(petAnimal);
}
console.log('\n');
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. • 
for (let petAnimal of petAnimals) {
    console.log(`${petAnimal} would make a great pet`);
}
// Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log(`\n All of these are good animals and can be kept as pets`);
