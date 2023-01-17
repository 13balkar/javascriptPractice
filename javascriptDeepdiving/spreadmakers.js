const khushil = {
  name: 'Khushil M Sindhwad',
  email: 'khushil@gmail.com',
  flights: [],
};

const aarya = {
  name: 'Prajith Aarya',
  email: 'aarya@gmail.com',
  flights: ['ABC'],
};

function bookFlight(flightName) {
  this.flights.push(flightName);
}
bookFlight.call(khushil, 'DEF');
bookFlight.call(aarya, 'DEF');



const calculateTax = (percentage, principle) => {
  return (percentage / 100) * principle;
};

const calculateGST = calculateTax.bind(null, 18);

console.log('Tax of 5% on 1000:', calculateTax(5, 1000));
console.log('GST on 1000:', calculateGST(1000));


const arr=[1,2,3];
arr.push.call(arr,4,5,6);
arr.push.apply(arr,[7,8,9]);
console.log(arr);