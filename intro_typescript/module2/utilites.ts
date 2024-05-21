{
    // utilities types
    // pick
    type Person = {
        name:string;
        age:number;
        email?:string;
        contactNo:string;
    }

    type NameAge = Pick<Person,"name" |"age">

    type ContactInfo = Omit<Person,"name"| "age">
    // required
    type PersonRequired = Required<Person>

    // Partial
    type PersonPartial =Partial<Person>
    // read Only
    type PersonReadOnly = Readonly<Person>

    const person1 :Person = {
        name:"mr. XY",
        age:200,
        contactNo:"01734"
    }
    person1.name = "Mr YZ"


    // record type
    // type MyObj = {
    //     a:string,
    //     b:string,
    // }
type MyObj = Record<string,string>

const EmptyObj :Record <string,unknown> = {
    
}


    const obj1:MyObj = {
        a:"aa",
        b:"bb",
        c:"cc",
        d:"dd",
        
    }
}