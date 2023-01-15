const {checkLeap,checkLeaps}=require('./q5CheckleapYear');

test('Check if the year is leap year or not',()=>{
    expect(
        checkLeap(2000)
    ).toBe(true)
}) 
test('Check if the year is leap year or not',()=>{
    expect(
        checkLeap(400)
    ).toBe(true)
}) 
test('Check if the year is leap year or not',()=>{
    expect(
        checkLeap(2002)
    ).toBe(false)
}) 

test('Check if the year is leap year or not',()=>{
    expect(
        checkLeap(2022)
    ).not.toBe(true)
}) 


// arrow function
test('Check if the year is leap year or not',()=>{
    expect(
        checkLeaps(2000)
    ).toBe(true)
}) 
test('Check if the year is leap year or not',()=>{
    expect(
        checkLeaps(400)
    ).toBe(true)
}) 
test('Check if the year is leap year or not',()=>{
    expect(
        checkLeaps(2002)
    ).toBe(false)
}) 

test('Check if the year is leap year or not',()=>{
    expect(
        checkLeaps(2022)
    ).not.toBe(true)
}) 
