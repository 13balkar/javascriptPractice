
const doubleArray= (numbers)=>{
  if(!Array.isArray(numbers)){
    throw new Error('Not an array');
  }

  return numbers.map( number => number*2);
};
const getEvenNumberArray= numbers=>{
  if(!Array.isArray(numbers)){
      throw new Error('Not an array');
  }
  return numbers.filter(num=> num%2===0);
}

const getEvenTripleNumbers=(numbers)=>{
  const tripleNumbers=numbers.map(number=>number*3);
  return tripleNumbers.filter(number => number%2===0);
}

const getEvenTripleNumber=(numbers)=>{
  const tripleNumbers=numbers.map(number=>number*3);
  return tripleNumbers.filter(number => number%2===0);
}

module.exports= {doubleArray,getEvenNumberArray};