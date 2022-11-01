const fizzBuzz = require('../modules/fizzBuzz');
const leapYears = require('../modules/leapYears');
// Pass
test(' 6 is divisable by 3, should return "Fizz"', ()=>{
    expect(fizzBuzz(6)).toBe('Fizz');
});
// Pass
test('4 is  not divisable by 3, should return 4', ()=>{
    expect(fizzBuzz(4)).toBe(4);
});
// Pass
test('10 is divisable by 5, should return "Buzz"', ()=>{
    expect(fizzBuzz(10)).toBe('Buzz');
});
// Pass
test('34 is  not divisable by 5, should return 34', ()=>{
    expect(fizzBuzz(34)).toBe(34);
});
// Pass
test('15 is divisable by 5 and 3, should return "FizzBuzz"', ()=>{
    expect(fizzBuzz(15)).toBe('FizzBuzz');
});

// Function to determine if a year is a leap year
test('1980 is a leap year, returns true', ()=>{
    expect(leapYears(1980)).toBe(true);
})

test('1979 is NOT a leap year, returns false', ()=>{
    expect(leapYears(1979)).toBe(false);
})

test('2000 is a leap year, returns true', ()=>{
    expect(leapYears(2000)).toBe(true);
})

test('1900 is not a leap year, returns false', ()=>{
    expect(leapYears(1900)).toBe(false);
} )