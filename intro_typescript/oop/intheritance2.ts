{
    class Car {
    
        constructor(public origin:string,public model:string, public  price:number,public  color:string){
    
        }
    }

    class Bmw extends Car{
        constructor(origin:string,model:string,price:number,color:string){
            super(origin,model,price,color)
        }
    }

    class Mercedes extends Car{
        constructor(origin:string,model:string,price:number,color:string,public safety:boolean){
            super(origin,model,price,color)

        }
        review(){
            console.log(` This ${this.color}  ${this.model} is origin of ${this.origin} which is cost about ${this.price}`);
        }
    }

    const amg45=new Mercedes("germany","cla 45",700000,"white",true)
    const m3= new Bmw("germany","m3 competition",630000,"gray")
    amg45.review()

}