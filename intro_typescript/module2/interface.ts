{
    // interface and type vs interface 
    type User ={
        name:string;
        age:number;
    }

    interface User2{
        name:string;
        age:number;
    }
    

    type UserWithRole1=User | {role : string}
    interface UserWithRole2 extends User2{
        role :string
    }
    const user2:UserWithRole2={
        name:"asib",
        age:24,
        role:"gm",
    }
    const user1:UserWithRole1={
        name:"asif",
        age:23,
        role:"manager",
    }



    // array 
    type Roll1 = number[]
    interface Roll2{
        [index : number] :  number
    }
    const rollNo:Roll1 = [12,3,43,4,3]


    type Add =(num1:number,num2:number )=>number
    interface Add2{
        (num1:number,num2:number):number
    }
    const add:Add= (num1,num2) =>{
        return num1+ num2
    }
}