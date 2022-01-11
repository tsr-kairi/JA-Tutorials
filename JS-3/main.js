// Number Methods
// An integer is a whole number.
const myNumber = 10;
console.log(myNumber);

// An number with a decimal point is a float which references the floating point number.
const myFloat = 10.5;
console.log(myFloat);

// The number .isInteger() method determines whether the passed value is an integer.
console.log(Number.isInteger(myNumber));

// The number.pasrseFloat() method parses a string and returns a floating point number. if the number is not a valid number, NaN is returned.
console.log(Number.parseFloat(myNumber));

// The toFixed() method formats a string number accroding to how many decimal places are specified as the peremeter
console.log(myFloat.toFixed(2));
