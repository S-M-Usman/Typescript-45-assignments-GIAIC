var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function carInfo(carManufacturer, carModel, optional) {
    return __assign({ carManufacturer: carManufacturer, carModel: carModel }, optional);
}
var mycar = carInfo('ferrari', 'LA Ferrari', { color: 'black' });
var mycar1 = carInfo('Bugatti', 'Cheyron', { color: 'cyan' });
var mycar2 = carInfo('Toyota', 'Supra', { color: 'liliac/blue' });
console.log(mycar);
console.log(mycar2);
console.log(mycar2);
