{
    // two types of function in js
// 1.normal function 
// 2.arrow function

const addTwo=(num1: number,num2 : number):number=> num1+num2

function add(num1:number,num2:number=10):number{ //default value 10
    return num1+num2
}

// function inside a object are called method
const pooruser ={
    name  : "asif",
    balance :0,
    addBalance(money:number):number{
        return this.balance +money
    }
}

const balance={
    name:'sakib',
    balance :1000,
    sayBalance(money:number):string{
        return `Your balance is ${this.balance +money}`

    }
}

const numbers =[23,6,7,17,11,77]
const doubleIt:number[] = numbers.map((number :number)=>number*number)
}