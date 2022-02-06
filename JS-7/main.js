// if Statement

// Conditionals: if statements -1
// syntax:

let customerIsBanned = false;
let soup = "chicken noddle soup";
let crackers = true;
let reply;
if (customerIsBanned) {
  reply = "No soup for you!";
} else if (soup && crackers) {
  reply = `Here's your order of ${soup} & crackers!`;
} else if (soup) {
  reply = `Here's your order of ${soup}`;
} else {
  reply = `Sorry, we're out of stock ${soup}`;
}
console.log(reply);

// conditionals: if statements -2

let testScore = 89;
let grade;
let collegeStudent = true;
if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else if (testScore >= 70) {
  grade = "C";
} else if (testScore >= 60) {
  grade = "D";
} else {
  if (collegeStudent) {
    grade = "U";
  } else {
    grade = "F";
  }
}
console.log(grade);
