const {checkStringEnd,checkStringEnding}=require('./q6CheckStringEnd');


test('Check if every string end with word `Script`',()=>{
    expect(
        checkStringEnd("Welcome to Codeacademy")
    ).toBe('Welcome to Codeacademy does not end with Script')
}) 

test('Check if every string end with word `Script`',()=>{
    expect(
        checkStringEnd("Welcome to Codeacademy Script")
    ).toBe('Welcome to Codeacademy Script ends with Script')
}) 

test('Check if every string end with word `Script`',()=>{
    expect(
        checkStringEnd("Welcome to JavaScript")
    ).toBe('Welcome to JavaScript ends with Script')
}) 

test('Check if every string end with word `Script`',()=>{
    expect(
        checkStringEnd("Welcome")
    ).not.toBe('Welcome ends with Script')
}) 

// arrow
test('Check if every string end with word `Script`',()=>{
    expect(
        checkStringEnding("Welcome to Codeacademy")
    ).toBe('Welcome to Codeacademy does not end with Script')
}) 

test('Check if every string end with word `Script`',()=>{
    expect(
        checkStringEnding("Welcome to Codeacademy Script")
    ).toBe('Welcome to Codeacademy Script ends with Script')
}) 

test('Check if every string end with word `Script`',()=>{
    expect(
        checkStringEnding("Welcome to JavaScript")
    ).toBe('Welcome to JavaScript ends with Script')
}) 

test('Check if every string end with word `Script`',()=>{
    expect(
        checkStringEnding("Welcome")
    ).not.toBe('Welcome ends with Script')
}) 