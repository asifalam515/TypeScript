{
    type Vehicle = {
        bike : string;
        car:string;
        ship:string;
        
    }
    type  Owner =keyof Vehicle //Vehicle er key gula niye ekta union type create krbo

    const person1 :Owner= "car"

    const getPropertyValue=<X,Y extends keyof X>(obj:X,key:Y
    )=>{
        return obj[key]
    }

    const user ={
        name:"Mr persian",
        age:25,
        address :"ctg",
    }

    const car ={
        model :"Toyota",
        year:200
    }

    const result = getPropertyValue(car,'model')

}