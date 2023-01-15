function change(input){
    let output="";
    [...input].forEach(inputChar=>{
        output += inputChar===inputChar.toUpperCase() ? inputChar.toLowerCase():inputChar.toUpperCase();
    });
    return output;
}
const changes=(input)=>{
    let output="";
    [...input].forEach(inputChar=>{
        output += inputChar===inputChar.toUpperCase() ? inputChar.toLowerCase():inputChar.toUpperCase();
    });
    return output;
}
console.log(change("balKAR"));
console.log(changes("SiNgH"))


module.exports= {change,changes};