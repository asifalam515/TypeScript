{
    class Animal{
        constructor (public name:string,public species:string,public sound:string){

        }
        shikar(){
            console.log(` the ${this.name} is sounds like ${this.sound}.`);
        }
    }

    const dog = new Animal("chita ","tiger","hau mau khaw")
    dog.shikar()
}