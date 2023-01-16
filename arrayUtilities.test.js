const {doubleArray,getEvenNumberArray}=require('./arrayUtilities');

describe('Array utilites',()=>{
  describe('Double every number in the array',()=>{
    it('Should return error message when input is not an array',()=>{
      expect(()=>doubleArray('abc')).toThrow('Not an array');
    });
    it('Should return array with doubled elements when input is integer array',()=>{
        expect(doubleArray([1,2,3])).toEqual([2,4,6]);
      });
  });
  describe('Extract the even numbers from array',()=>{
    it('Should return error message when input is not an array',()=>{
      expect(()=>getEvenNumberArray('abc')).toThrow('Not an array');
    });
    it('Should return array of even numbers when input is integer array',()=>{
        expect(getEvenNumberArray([1,2,3,5,6])).toEqual([2,6]);
      });
  });
});