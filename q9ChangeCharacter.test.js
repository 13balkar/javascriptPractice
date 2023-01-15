
const {incrementCharacter,incrementer} =require('./q9ChangeCharacter');

test('Inchrement each character in the word',()=>{
    expect(
        incrementCharacter('abc')
    ).toBe('bcd')
}) 
test('Inchrement each character in the word',()=>{
    expect(
        incrementCharacter('abc')
    ).not.toBe('def')
}) 
test('Inchrement each character in the word',()=>{
    expect(
        incrementCharacter('stay')
    ).toBe('tubz')
}) 
test('Inchrement each character in the word',()=>{
    expect(
        incrementCharacter('sing')
    ).not.toBe('tash')
}) 

// arrow function
test('Inchrement each character in the word',()=>{
    expect(
        incrementer('abc')
    ).toBe('bcd')
}) 
test('Inchrement each character in the word',()=>{
    expect(
        incrementer('abc')
    ).not.toBe('def')
}) 
test('Inchrement each character in the word',()=>{
    expect(
        incrementer('stay')
    ).toBe('tubz')
}) 
test('Inchrement each character in the word',()=>{
    expect(
        incrementer('lazyinterns')
    ).toBe('Sorry! the code declined to work...')
}) 