const {findLargestEven,findLargestEvens}=require('./q1LargestEvenNumber');

test('find the largest even number in array',()=>{
    expect(
        findLargestEven([1,2,3,4,5])
    ).toBe(4)
}) 

test('find the largest even number in array',()=>{
    expect(
        findLargestEven([1,3,5,7])
    ).toBe(-1)
}) 
test('find the largest even number in array',()=>{
    expect(
        findLargestEven([1,2,4,6,8])
    ).toBe(8)
}) 
test('find the largest even number in array',()=>{
    expect(
        findLargestEven([4,100])
    ).toBe(100)
}) 


// arrow function 

test('find the largest even number in array',()=>{
    expect(
        findLargestEvens([1,2,3,4,5])
    ).toBe(4)
}) 

test('find the largest even number in array',()=>{
    expect(
        findLargestEvens([1,3,5,7])
    ).toBe(-1)
}) 
test('find the largest even number in array',()=>{
    expect(
        findLargestEvens([1,2,4,6,8])
    ).toBe(8)
}) 
test('find the largest even number in array',()=>{
    expect(
        findLargestEvens([4,100])
    ).toBe(100)
}) 
