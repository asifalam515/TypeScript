"use strict";
{
    const person1 = "car";
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "Mr persian",
        age: 25,
        address: "ctg",
    };
    const car = {
        model: "Toyota",
        year: 200
    };
    const result = getPropertyValue(car, 'model');
}
