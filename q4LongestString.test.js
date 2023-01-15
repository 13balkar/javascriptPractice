const {longString,longestString}=require('./q4LongestString');

test('Find the longest string from array of strings',()=>{
    expect(
        longestString(["we", "love", "code", "academy"])
    ).toBe('academy')
}) 

test('Find the longest string from array of strings',()=>{
    expect(
        longestString(["we", "love", "codesssss", "academy"])
    ).toBe('codesssss')
}) 

test('Find the longest string from array of strings',()=>{
    expect(
        longestString(["Balkar", "Singh"])
    ).toBe('Balkar')
}) 

test('Find the longest string from array of strings',()=>{
    expect(
        longestString(["we", "love", "codes", "academy"])
    ).not.toBe('codes')
}) 

// arrow function

test('Find the longest string from array of strings',()=>{
    expect(
        longString(["we", "love", "code", "academy"])
    ).toBe('academy')
}) 

test('Find the longest string from array of strings',()=>{
    expect(
        longString(["we", "love", "codesssss", "academy"])
    ).toBe('codesssss')
}) 

test('Find the longest string from array of strings',()=>{
    expect(
        longString(["Balkar", "Singh"])
    ).toBe('Balkar')
}) 

test('Find the longest string from array of strings',()=>{
    expect(
        longString(["we", "love", "codes", "academy"])
    ).not.toBe('codes')
}) 