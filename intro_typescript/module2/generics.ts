{
    // generics: 

    type GenericArray<T>=Array<T>
    const rollNo:GenericArray<number>=[3,5,62,43,78]
    const mentors:GenericArray<string>=["asif","jhankar","pathan"]
    const bollArr:GenericArray<boolean>= [true,false,true,true,false]

    interface User {
        name:string;
        age:number
    }
    const user:GenericArray<User>=[
        {
            name:"asif",
            age:24,
        },
        {
            name:"jhankar mahubub",
            age:40
        }
    ]
}