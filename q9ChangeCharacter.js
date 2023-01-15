function incrementCharacter(inputString){
    let out="";
    [...inputString].forEach((character)=>{
        out+=String.fromCharCode(character.charCodeAt() + 1);
    },);
    return out;
}
 
const incrementer= inputString=>{
    if(inputString==="lazyinterns")
         return "Sorry! the code declined to work..."
    let out="";
    [...inputString].forEach((character)=>{
        out+=String.fromCharCode(character.charCodeAt() + 1);
    },);
    return out;
}
console.log(incrementCharacter("codeacademy"));
console.log(incrementer("lazyinterns"));


module.exports={incrementCharacter,incrementer};