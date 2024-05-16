{
    // nullable type
    const searching=(value:string | null)=>{
        if(value){
            console.log("searching.......");
        }
        else{
            console.log("there is nothing to search.......");
        }
    }
    // searching(null)

    // unknown type (type of )
    const getSpeedInMeter=(speed:unknown)=>{
         if (typeof speed === "number"){
            const convertedSpeed = (speed *1000 )/3600
            console.log(`Your speed is ${convertedSpeed.toFixed(2)} ms^-1`);
        }
        else if(typeof speed === "string"){
            const [value,text] =speed.split(" ")
            const convertedSpeed = (parseFloat(value) *1000 )/3600
            console.log(`Your speed is ${convertedSpeed.toFixed(2)} ms^-1`);

        }
        else{
            console.log("Wrong input for rest of the things");
        }
    }
    getSpeedInMeter(`1000 kmh^-1 `)

const throwError = (msg:string) :never =>{
    throw new Error(msg)
}
throwError("mushkil se error ho gaya")

}