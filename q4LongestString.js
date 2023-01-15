function longestString(input){
    let maxLength=0;
    let output="";
    input.forEach(itr=> {
        let length=itr.length;
        if(length>maxLength){
            maxLength=length;
            output=itr;
        }
    });
    return output;
}
const longString=(input)=>{
    let maxLength=0;
    let output="";
    input.forEach(itr=> {
        let length=itr.length;
        if(length>maxLength){
            maxLength=length;
            output=itr;
        }
    });
    return output;
}
console.log(longestString(["we", "love", "codesssss", "academy"]));
console.log(longString(["we", "love", "codesssss", "academy"]));


module.exports= {longString,longestString};