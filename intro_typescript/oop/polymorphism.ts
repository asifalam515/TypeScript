{
    // polymorphism
    class Person{
        getSleep(){
            console.log(`I am person who sleeps for 8 hours per day`);
        }

    }

    class Student extends Person{
        getSleep(){
            console.log(`I am student who sleeps  7 hours per day`);
        }  
    }

    class Developer extends Person{
        getSleep(){
            console.log(`I am a developer who sleeps 6 hours per day`);
        }  

    }

    const getSleepingHours = (param :Person) =>{ //parameter hisebe instance nibe
        param.getSleep()
    }

    

    const person1 = new Person()
    const person2= new Student()
    const person3=new Developer()

    getSleepingHours(person1);
    getSleepingHours(person2);
    getSleepingHours(person3);


    class Shape{
        getArea():number{
            return 0;
        }
    }
    
    class Circle extends Shape{
        radius :number;
        constructor(radius:number){
            super();
            this.radius = radius

        }
        getArea(): number {
            return Math.PI*this.radius*this.radius
        }
    }

// height width
    class Rectangle extends Shape{
        height:number;
        width:number;
        constructor(height:number,width:number){
            super();
            this.height = height
            this.width = width


        }
        getArea(): number {
            return  this.height * this.width
        }
    }

    const getShapeArea = (param : Shape)=>{
        console.log(param.getArea());
    }
    const shape1 =new Shape()
    const shape2= new Circle(100)
    const shape3= new Rectangle(3,5)

    getShapeArea(shape3)




    }
   


// }