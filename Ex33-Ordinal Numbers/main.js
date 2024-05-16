var ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, ordinalNumbers_1 = ordinalNumbers; _i < ordinalNumbers_1.length; _i++) {
    var ordinalNumber = ordinalNumbers_1[_i];
    if (ordinalNumber === 1) {
        console.log("".concat(ordinalNumber, "st"));
    }
    else if (ordinalNumber === 2) {
        console.log("".concat(ordinalNumber, "nd"));
    }
    else if (ordinalNumber === 3) {
        console.log("".concat(ordinalNumber, "rd"));
    }
    else {
        console.log("".concat(ordinalNumber, "th"));
    }
}
