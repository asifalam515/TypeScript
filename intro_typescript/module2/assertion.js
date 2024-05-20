"use strict";
{
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `the converted Value is ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1000);
    const result2 = kgToGm("10000");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
