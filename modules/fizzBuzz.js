const fizzBuzz = (num) => {
    if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return 'Buzz'
    } else {
        return undefined;
    }
}

module.exports = fizzBuzz;