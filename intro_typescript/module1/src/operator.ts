{
    // ternary operator || optional chaining || nullish

    const age : number =11;
    // (age >= 18)?console.log("YOu are ready to go"):console.log("you are not ready");;

// nullish coalescing operator:

const isAuthenticated =  null;
const result = isAuthenticated ??"Guest"
const isPaid = undefined
const confirmOrder = isPaid ??"Please Pay"
// console.log({result},{confirmOrder});

type UserType={
    name:string;
    address:{
        city:string;
        road:string;
        presentAddress:string;
        pernamentAddress?:string;
    }
}

const user:UserType={
    name:"asibul alam",
    address:{
        city:"kushtia",
        road:"ks",
        presentAddress:"kushtia",
    }
}

const pernamentAddress = user?.address?.pernamentAddress??"No pernament  address found"
console.log({pernamentAddress});
}