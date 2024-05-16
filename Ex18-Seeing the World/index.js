var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favouritePlace = ["Paris", "London", "Moscow", "Jakarta", "Berlin", "Madrid", "Antonio"];
//printing original array
console.log('Array in original order', favouritePlace);
//printing array in alphabatical order without altering orginal array
console.log("Array in alphabetical order", __spreadArray([], favouritePlace, true).sort());
//printing original to make sure it is unchanged
console.log('Array in original order', favouritePlace);
//printing array in reversed-alphabatical order without altering orginal array
console.log('Array in reversed order', __spreadArray([], favouritePlace, true).sort().reverse());
//printing original to make sure it is unchanged
console.log('Array in original order', favouritePlace);
//actually reversing array
favouritePlace.reverse();
console.log('Array in reversed order', favouritePlace);
//reversing it back so that it is back in original order
favouritePlace.reverse();
console.log('array in original form ', favouritePlace);
