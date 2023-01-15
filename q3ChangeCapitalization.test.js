const {change,changes}=require('./q3ChangeCapitalization');


test('Change the capitalization of every character of thr string',()=>{
    expect(
        change('BALkar')
    ).toBe('balKAR')
}) 
test('Change the capitalization of every character of thr string',()=>{
    expect(
        change('SINGH')
    ).toBe('singh')
}) 
test('Change the capitalization of every character of thr string',()=>{
    expect(
        change('sidhu')
    ).toBe('SIDHU')
}) 
test('Change the capitalization of every character of thr string',()=>{
    expect(
        change('Balkar')
    ).not.toBe('Balkar')
}) 


// arrow function

test('Change the capitalization of every character of thr string',()=>{
    expect(
        changes('BALkar')
    ).toBe('balKAR')
}) 
test('Change the capitalization of every character of thr string',()=>{
    expect(
        changes('SINGH')
    ).toBe('singh')
}) 
test('Change the capitalization of every character of thr string',()=>{
    expect(
        changes('sidhu')
    ).toBe('SIDHU')
}) 
test('Change the capitalization of every character of thr string',()=>{
    expect(
        changes('Balkar')
    ).not.toBe('Balkar')
}) 
