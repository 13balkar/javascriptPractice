const containsOnlyNumbers = (array) => {
  return array.every((element) => {
    return typeof element === 'number';
  })
}

const doubleArray = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error('Not an array');
  }
  if (numbers.length === 0) {
    throw new Error('Empty error');
  }
  if (!containsOnlyNumbers(numbers)) {
    throw new Error('All elements of array are not integers')
  }
  return numbers.map(number => number * 2);
};
const getEvenNumberArray = numbers => {
  if (!Array.isArray(numbers)) {
    throw new Error('Not an array');
  }
  if (numbers.length === 0) {
    throw new Error('Empty error');
  }
  if (!containsOnlyNumbers(numbers)) {
    throw new Error('All elements of array are not integers')
  }
  return numbers.filter(num => num % 2 === 0);
}




const getEvenTripleNumber = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error('Not an array');
  }
  if (numbers.length === 0) {
    throw new Error('Empty error');
  }
  if (!containsOnlyNumbers(numbers)) {
    throw new Error('All elements of array are not integers')
  }
  const tripleNumbers = numbers.map(number => number * 3);
  return tripleNumbers.filter(number => number % 2 === 0);
}






const getEvenTripleNumbers = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error('Not an array');
  }
  if (numbers.length === 0) {
    throw new Error('Empty error');
  }
  if (!containsOnlyNumbers(numbers)) {
    throw new Error('All elements of array are not integers')
  }
  const evenNumbersArray = numbers.reduce((evenNumbers, number) => {
    if (number % 2 == 0) {
      evenNumbers.push(3 * number);
    }
    return evenNumbers;
  }, [])
  return evenNumbersArray;
}


const getEvenTripleNumbers2= numbers => numbers.reduce(
  (acc,current)=> {
    if(current%2===0){
      acc.push(3*current);
    }
    return acc;
  },[])

  console.log(getEvenTripleNumbers2([2,4,6,8]));
module.exports = { doubleArray, getEvenNumberArray, getEvenTripleNumber, getEvenTripleNumbers };