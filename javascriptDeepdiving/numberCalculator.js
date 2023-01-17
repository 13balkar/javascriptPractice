const devideNumbers = (input1, input2) => {
    // if ((typeof input1 !== 'number ') || (typeof input2 !== 'number ')) {
    //     throw new Error('Input type is not number');
    // }
    if (input2 === 0) {
        throw new Error('Cannot devide by zero');
    }
    return input1 / input2;
}

module.exports = { devideNumbers };