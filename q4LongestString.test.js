const {getLongestStrings,getLongestString}=require('./q4LongestString');

test('Find the longest string from array of strings',()=>{
    expect(getLongestString(["we", "love", "code", "academy"])
    ).toBe('academy')
}) 

test('Find the longest string from array of strings',()=>{
    expect(
        getLongestString(["we", "love", "codesssss", "academy"])
    ).toBe('codesssss')
}) 

test('Find the longest string from array of strings',()=>{
    expect(
        getLongestString(["Balkar", "Singh"])
    ).toBe('Balkar');
}) 

test('Find the longest string from array of strings',()=>{
    expect(
        getLongestString(["we", "love", "codes", "academy"])
    ).not.toBe('codes')
}) 

// arrow function

test('Find the longest string from array of strings',()=>{
    expect(
        getLongestStrings(["we", "love", "code", "academy"])
    ).toBe('academy')
}) 

test('Find the longest string from array of strings',()=>{
    expect(
        getLongestStrings(["we", "love", "codesssss", "academy"])
    ).toBe('codesssss')
}) 

test('Find the longest string from array of strings',()=>{
    expect(
        getLongestStrings(["Balkar", "Singh"])
    ).toBe('Balkar')
}) 

test('Find the longest string from array of strings',()=>{
    expect(
        getLongestStrings(["we", "love", "codes", "academy"])
    ).not.toBe('codes')
}) 