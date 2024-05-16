//Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
type car={
    carManufacturer :string,
    carModel :string,
   [key:string]:any;
}
function carInfo (carManufacturer:string,carModel:string,optional:Record<string,any>):car{
    return{
        carManufacturer,
        carModel,
       ...optional
    }
}
const mycar : car = carInfo('ferrari','LA Ferrari',{color:'black'})
const mycar1 : car = carInfo('Bugatti','Cheyron',{color:'cyan'})
const mycar2 : car = carInfo('Toyota','Supra',{color:'liliac/blue'})
console.log(mycar);
console.log(mycar2);
console.log(mycar2);
