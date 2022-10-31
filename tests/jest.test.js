const fizzBuzz = require('../modules/fizzBuzz');

test(' 6 is divisable by 3, should return "Fizz"', ()=>{
    expect(fizzBuzz(6)).toBe('Fizz');
});

test('4 is  not divisable by 3, should return "undefined"', ()=>{
    expect(fizzBuzz(4)).toBe(undefined);
});

test('10 is divisable by 5, should return "undefined"', ()=>{
    expect(fizzBuzz(10)).toBe('Buzz');
});