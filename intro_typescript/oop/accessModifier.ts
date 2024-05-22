{
// access modifier
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
    public addDeposit(amount:number){
        this._balance +=amount
    }
    public getBalance(){
        return(this._balance);
    }

}
class StudentAccount extends BankAccount{
    constructor(id:number,name:string,balance:number,loan:number){
        super(id,name,balance,loan)
    }
    sayLoan(){
        console.log(`Your loan is ${this._loan}`);
    }
}



const goribManusherAccount = new BankAccount(111,"asif",1000,50000)
const student1 = new StudentAccount(112,"eva ",10000,500)
goribManusherAccount.addDeposit(100)
goribManusherAccount.addDeposit(1000)
const myBalance = goribManusherAccount.getBalance()


console.log(myBalance);
const studentLoan =student1.sayLoan()


}