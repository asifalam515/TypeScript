{
    const kgToGm = (value:string | number ):string | number |undefined=>{
        if (typeof value === "string"){
            const convertedValue = parseFloat(value)*1000
            return `the converted Value is ${convertedValue}`

        }
        if(typeof value === "number"){
            return value *1000
        }
    }

    const result1 = kgToGm(1000) as number 
    const result2 =kgToGm("10000") as string

    // try catch block
    type CustomError ={
        message :string
    }
    try {
        
    } catch (error) {
        console.log((error as CustomError).message);
        
    }
}