let favouritePlace : string[] =["Paris","London","Moscow","Jakarta","Berlin","Madrid","Antonio"]
//printing original array
console.log('Array in original order',favouritePlace);
//printing array in alphabatical order without altering orginal array
console.log("Array in alphabetical order",[...favouritePlace].sort());
//printing original to make sure it is unchanged
console.log('Array in original order',favouritePlace);
//printing array in reversed-alphabatical order without altering orginal array
console.log('Array in reversed order',[...favouritePlace].sort().reverse());
//printing original to make sure it is unchanged
console.log('Array in original order',favouritePlace);
//actually reversing array
favouritePlace.reverse();
console.log('Array in reversed order',favouritePlace);
//reversing it back so that it is back in original order
favouritePlace.reverse();
console.log('array in original form ',favouritePlace)
//actually sorting  array in alphabaticl order
favouritePlace.sort()
console.log("Array in alphabetical order",favouritePlace);
//changing the order to reverse alphbatical
favouritePlace.sort()
console.log("Array in reverse alphabetical order",favouritePlace);

