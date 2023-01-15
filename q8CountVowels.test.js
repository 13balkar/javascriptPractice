const {countVowel,count}=require('./q8CountVowels');

test('Count the number of vowels in the string',()=>{
    expect(
        countVowel("Codeacademy")
    ).toBe('Codeacademy consists of 5 characters')
}) 
test('Count the number of vowels in the string',()=>{
    expect(
        countVowel("Balkar")
    ).toBe('Balkar consists of 2 characters')
}) 
test('Count the number of vowels in the string',()=>{
    expect(
        countVowel("Sidhu")
    ).toBe('Sidhu consists of 2 characters')
}) 
test('Count the number of vowels in the string',()=>{
    expect(
        countVowel("Random")
    ).not.toBe('Random consists of 5 characters')
}) 

// arrow
test('Count the number of vowels in the string',()=>{
    expect(
        count("Codeacademy")
    ).toBe('Codeacademy consists of 5 characters')
}) 
test('Count the number of vowels in the string',()=>{
    expect(
        count("Balkar")
    ).toBe('Balkar consists of 2 characters')
}) 
test('Count the number of vowels in the string',()=>{
    expect(
        count("Sidhu")
    ).toBe('Sidhu consists of 2 characters')
}) 
test('Count the number of vowels in the string',()=>{
    expect(
        count("Random")
    ).not.toBe('Random consists of 5 characters')
}) 