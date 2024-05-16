var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ['Emilie Holmes', 'Emilie Douglas', 'Marian McLaughlin', 'Myrtle Hodges'];
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "".concat(magicians[i], " The Great");
    }
    return magicians;
}
//Call the function make_great() with a copy of the array of magicians’ names
var copyMagicians = __spreadArray([], magicians, true);
make_great(copyMagicians);
console.log("copy array");
copyMagicians.forEach(function (copyMagicians) {
    console.log(copyMagicians);
});
// Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
console.log("original array");
show_magicians(magicians);
