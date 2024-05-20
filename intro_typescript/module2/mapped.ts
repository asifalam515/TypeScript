{

const arrOfNumbers:number[] =[1,4,5]

const arrOfStrings :string[] = ['1','3','5','7']
const arrOfStrings2:string[]=arrOfNumbers.map(number=>number.toString())
console.log(arrOfStrings2);


type AreaNumber ={
    height :number;
    width :number;
};
// type AreaString ={
//     height :string;
//     width :string;
// }


type AreaString<T>  ={
[key in keyof T ] : T[key]
}

const area1:AreaString<{height:string;width:number}> = {
    height:"100",
    width:50,
}

}