{
// oop -->class
class Animal{
    // name:string;
    // species:string;
    // sound:string;

    // parameter properties

    constructor(public name:string,public species:string,public sound:string){
        // this.name = name
        // this.species = species
        // this.sound = sound
    }
    makeSound(){
        console.log(` the ${this.name} says : ${this.sound} `);
    }
}

const dog = new Animal("Germane sehepard","dog","ghew ghew")
const cat = new Animal("Persian Cat","cat","mew mew mew")
cat.makeSound()
dog.makeSound()



}