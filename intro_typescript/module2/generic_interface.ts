// interface
{
    interface Developer<T>{
        name:string;
        computer:{
            brand:string;
            model:string;
            releaseYear: number
        }
        smartWatch:T
    }

    type xiaoMiWatch = {
        brand:"Xiomi",
        model :"band 11",
        display:"OLED"
    }



    const poorDeveloper :Developer<xiaoMiWatch>={
        name:"asibul alam",
        computer:{
            brand:"Asus",
            model :'X-225Ur',
            releaseYear:2023
        },
        smartWatch:{
            brand:"Xiomi",
            model :"band 11",
            display:"OLED"
        }
        
    }
    interface AppleWatch{
        brand:"apple",
        model :" 11",
        display:"amolead",
        heartTrack:true,
        sleepTrack:true,
        
    }

    interface Yamahabike {
        model :string;
        engineCapacity:string;
    }
    const richDeveloper :Developer<AppleWatch>={
        name:" alam",
        computer:{
            brand:"HP",
            model :'X-225Ur',
            releaseYear:2012
        },
        smartWatch:{
            brand:"apple",
            model :" 11",
            display:"amolead",
            heartTrack:true,
            sleepTrack:true,
           
        },
       
       
        
    }
}