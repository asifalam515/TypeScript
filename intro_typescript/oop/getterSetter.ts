{
    // getter and setter
    class BankAccount {
      public readonly id: number;
       public name:string;
       private _balance:number;
       protected _loan:number;
    
        constructor(id:number,name:string,balance:number,loan:number){
            this.id = id
            this.name = name
            this._balance = balance
            this._loan =loan
        }
        // public addDeposit(amount:number){
        //     this._balance +=amount
        // }
        // using setter
        set deposit(amount:number){
         this._balance = this.balance+amount   
        }

        // using getter
        get balance(){
            return this._balance
        }

        // public getBalance(){
        //     return(this._balance);
        // }
    
    }
   
    
    
    const goribManusherAccount = new BankAccount(111,"asif",15,50000)
    goribManusherAccount.deposit=100
    const myBalance = goribManusherAccount.balance //property er moto kore
    
    console.log(myBalance);
    
    
    }