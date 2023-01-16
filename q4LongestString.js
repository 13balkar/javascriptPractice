function getLongestString(input){
  let maxLength=0;
  let output='';
  input.forEach(itr=> {
    let length=itr.length;
    if(length>maxLength){
      maxLength=length;
      output=itr;
    }
  });
  return output;
}
const getLongestStrings=(input)=>{
  let output='';
  input.forEach(itr=> { 
    output= itr.length>output.length ? itr:(itr.length!==output.length ? output:(output>itr ? itr:output));    
  });
  return output;
};

// do it using reduce

// console.log(longestString(["we", "love", "codesssss", "academy"]));


module.exports= {getLongestString,getLongestStrings};