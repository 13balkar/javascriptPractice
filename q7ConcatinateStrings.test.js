const {concatinate,concatinater}=require('./q7ConcatinateStrings');

test('Concatinate strings except their first character',()=>{
    expect(
        concatinate(["Balkar","Singh"])
    ).toBe('alkaringh')
}) 
test('Concatinate strings except their first character',()=>{
    expect(
        concatinate(["bBalkar","bSingh"])
    ).toBe('BalkarSingh')
}) 

test('Concatinate strings except their first character',()=>{
    expect(
        concatinate(["Balkar","Singh"])
    ).not.toBe('Balkaringh')
}) 

test('Concatinate strings except their first character',()=>{
    expect(
        concatinate(["Balkar","Singh"])
    ).not.toBe('alkarSingh')
}) 


// arrow

test('Concatinate strings except their first character',()=>{
    expect(
        concatinate(["Balkar","Singh"])
    ).toBe('alkaringh')
}) 
test('Concatinate strings except their first character',()=>{
    expect(
        concatinate(["bBalkar","bSingh"])
    ).toBe('BalkarSingh')
}) 

test('Concatinate strings except their first character',()=>{
    expect(
        concatinate(["Balkar","Singh"])
    ).not.toBe('Balkaringh')
}) 

test('Concatinate strings except their first character',()=>{
    expect(
        concatinate(["Balkar","Singh"])
    ).not.toBe('alkarSingh')
}) 