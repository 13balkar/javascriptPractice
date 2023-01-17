const {devideNumbers}=require('./numberCalculator');

describe('Calculator',()=>{
  describe('Devide 1st input by 2nd input',()=>{
    it('should throw an error message when 2nd input is zero',()=>{
      expect(()=>devideNumbers(2,0)).toThrow('Cannot devide by zero');
    }),
    it('should throw an error message when any of the input is not number',()=>{
      expect(()=>devideNumbers(0,'abc')).toThrow('Input type is not number');
    })
    it('should give fractional output when 1st number is not a multiple of 2nd number',()=>{
      expect(devideNumbers(5,2)).toBe(2.5);
    })
    it('should give non-fractional output when 1st number is a multiple of 2nd number',()=>{
      expect(devideNumbers(6,2)).toBe(3);
    })
  })
})