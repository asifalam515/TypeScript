{
    // abstraction:
    // 1.using interface 2.abstract
    // idea:
    interface Vehicle1 {
       startEngine():void;
       stopEngine():void;
       move():void;

    }
    
    
// real implementation
   class Car1 implements Vehicle1{
    startEngine(): void {
        console.log(`i am starting the car engine`);
    }
    stopEngine(): void {
        console.log(`i am stopping the car engine`);
    }
    move():void{
        console.log(`i am moving the car`);
    }
    test(){
        console.log(`i am just testing it`);
    }

   }

   const bmwCar = new Car1()
   bmwCar.startEngine()

   //    abstract class
//    idea
abstract class Car2 {
    abstract startEngine(): void
    abstract stopEngine(): void 
    abstract move():void
    test(){
        console.log(`i am just testing it`);
    }
}

class ToyotaCar extends Car2{
    startEngine(): void {
    console.log("i am starting the car engine");    
    }
    stopEngine(): void {
        console.log(`i am stopping the car engine`);
    }
    move(): void {
        console.log(`i am moving the car`);
    }
}

// const hondaCivic = new Car2() abstract korar jnno amra instance korte parbo na
// hondaCivic.stopEngine()

}