{
    // instance of guard
    class Animal{
        name:string;
        species:string;

        constructor(name:string,species:string){
            this.name  =name
            this.species = species
        }

        makeSound(){
            console.log("I am making sound");
        }
    }

class Dog extends Animal{
    constructor(name:string,species:string){
        super(name,species)
    }
    makeBark(){
        console.log(`I am   Barking Ghew ghew  ghew.............`);
    }
}

class Cat extends Animal{
    constructor(name:string,species:string){
        super(name,species)
    }
    makeMeaw(){
        console.log(`I am mewaing `);
    }
}
// smart way te handle korar jnno chaile amara function use krte pari 
const isDog= (animal :Animal):animal is Dog =>{
    return animal instanceof Dog
}
const isCat= (animal :Animal):animal is Cat =>{
    return animal instanceof Cat
}

const getAnimal = (animal:Animal) =>{
    if (isDog(animal)){
        animal.makeBark()
    }
    else if(isCat(animal)){
        animal.makeMeaw()
    }
    else{
        animal.makeSound()
    }
}

const dog = new Dog("Dog Bhai","dog")
const cat = new Cat("cat vai ","cat")
cat.makeMeaw()

}