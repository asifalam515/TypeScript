{

    type Student = {
        name:string;
        address:string;
        age:number;
        gender:string;
        contactNo?:string; 
    }

    const student1:Student={
    name:'Asibul',
    address:'kushtia',
    age:24,
    gender:'Male'

    
    }


    const student2:Student={
    name:'najmul',
    address:'dhaka',
    age:25,
    gender:"male"
    
    
    }

    const student3:Student={
    name:'mustak',
    address:'Bheramara',
    age:26,
    gender:"Male"
    
    }


 type AddType= (num1:number,num2:number)=>number;
const add:AddType=(num1,num2)=>num1+num2
}

