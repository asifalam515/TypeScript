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
}