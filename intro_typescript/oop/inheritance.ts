{
    // oop inheritance:

    class Person{
        name:string;
        age:number;
        address:string;

        constructor( name:string, age :number, address:string){
            this.name = name
            this.age = age
            this.address = address
        }
        getSleep(numberOfHours:number){
            console.log(` ${this.name} is sleeps ${numberOfHours} hours everyday  `)
        }
    }


    class Student extends Person{
        constructor( name:string, age :number, address:string){
            super(name,age,address)
        }
        
    }

    class Teacher extends Person{
        constructor( name:string, age :number,address:string, designation:string){
            super(name,age,address)
            this.designation =designation

        }
   
    takeClass(numberOfClass:number){
        console.log(`${this.name}  will take ${numberOfClass} class and he is a ${this.designation}`);
    }

        
    }


const student1 = new Student("asibul alam",23,"kushtia")
const teacher1 =  new Teacher("saif ali",44,"kumarkhali","headmaster")
student1.getSleep(4)
teacher1.getSleep(3)

}

