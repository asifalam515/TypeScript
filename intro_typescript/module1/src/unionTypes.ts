{
//     type FrontEndDeveloper = 'fakibaazDeveloper' | 'juniorDeveloper' //string literal type=>one of them
// type FullStackDeveloper = 'fronendDeveloper' | 'juniorDeveloper' 
// type Developer = FrontEndDeveloper|FullStackDeveloper
// const newDeveloper:FrontEndDeveloper = "fakibaazDeveloper"

// type User={
//     name:string;
//     email:string;
//     gender:'male'|'female';
//     bloodGroup:"O+" |"A+" |"AB+"
// }

// const user1:User={
//     name:"asibul alam",
//     email:"asibul515@gmail.com",
//     gender:"male",
//     bloodGroup:"A+"
    
// }


type FrontEndDeveloper = {
    skills : string[];
    designation1:'frontEnd developer';
    

}
type BackEndDeveloper = {
    skills : string[];
    designation2:'Backend developer';


}

type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper

const fullstackDeveloper : FullStackDeveloper={
    skills:['html','css','js'],
    designation1:"frontEnd developer",
    designation2:"Backend developer",
}

}