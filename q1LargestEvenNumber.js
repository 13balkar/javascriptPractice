function findLargestEvenNumber(inputArray){
  let largestEven=-1;
  inputArray.forEach(number=> {
    if(!(number&1) && number>largestEven){
      largestEven=number;
    }
  });
  return largestEven;
}
const findLargestEvenNumbers= (inputArray)=>{
  let largestEven=-1;
  inputArray.forEach(number=> {
    if(!(number&1) && number>largestEven){
      largestEven=number;
    }
  });
  return largestEven;
};

console.log(findLargestEvenNumber([1,2,3,4,5]));
console.log(findLargestEvenNumbers([1,2,3,4,5]));


module.exports= {findLargestEvenNumber,findLargestEvenNumbers};