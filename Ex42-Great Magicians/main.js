////Ex-42-Great Magicians:
//Start with a copy of your program from Exercise 41
// ===============================EX-41-Magicians:========================================================
// Make a array of magician’s names.
var magicians = ['Emilie Holmes', 'Emilie Douglas', 'Marian McLaughlin', 'Myrtle Hodges'];
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// show_magicians(magicians)
//===============================END-OF-EX-41-Magicians:=====================================================
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "".concat(magicians[i], " The Great");
    }
    return magicians;
}
make_great(magicians);
//Call show_magicians() to see that the list has actually been modified
show_magicians(magicians);
