function sameDigit(input){
    if(input<9)
        return true;
    let comparator=input%10;
    input=Math.floor(input/10);
    while(input>0){
        let reminder=input%10;
        input=Math.floor(input/10);
        switch(reminder!==comparator){
            case true:
                return false;
        }
    }
    return true;
}
const sameDigits=(input)=>{
    if(input<9)
        return true;
    let comparator=input%10;
    input=Math.floor(input/10);
    while(input>0){
        let reminder=input%10;
        input=Math.floor(input/10);
        if(reminder!=comparator)return false;
    }
    return true;
}

console.log(sameDigit(232));
console.log(sameDigits(232));
