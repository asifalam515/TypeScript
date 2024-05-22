{
    class BankAccount{
        constructor(public name:string,public id:number,protected _balance:number){

        }
        get balance(){
            return this._balance
        }
        set deposit(amount:number){
             this._balance += amount
        }
    }

    const myAccount = new BankAccount("asibul",121,100)
    myAccount.deposit = 100
    myAccount.deposit = 500
    console.log(myAccount.balance);
}