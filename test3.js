let ar = [10,20,20,10,10,30,50,10,20,50];
ar.sort();
console.log(ar);
let counter=0;
for(let i=0;i<ar.length-1;i++){
    if(ar[i] == ar[i+1]){
        counter++;
        i++;
    }
}
console.log(counter);