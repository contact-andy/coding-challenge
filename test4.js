let valley ="DDUUUDDDUU";
let counter=0;
let seaLevel=0;
let preSeaLevel=0;
for(let i=0;i<valley.length;i++){
    if(valley[i] ===  "D"){
        preSeaLevel = seaLevel;
        seaLevel--;
        console.log("Down");
    }
    else{
        preSeaLevel = seaLevel;
        seaLevel++;
        console.log("UP");
    }
    if(preSeaLevel>=0 && seaLevel<0 ){
        counter++;
    }
    console.log("preSeaLevel:"+preSeaLevel+" and seaLevel:"+seaLevel)
    console.log(counter);
}