//Conditionals: Ternary operator
// Syntax

// condition ? ifTrue : ifFalse -1:

// let soup = "Chicken Noodle Soup";
// let response = soup ? "Yes, we have soup." : "Sorry, we don't need!";
// console.log(response);

// condition ? ifTrue : ifFalse -2:
let soup = "Chicken Noodle Soup";
let isCustomerBanned = true;
let soupAccess = isCustomerBanned
  ? "Sorry, no soup for you!"
  : soup
  ? `Yes we have ${soup} today`
  : "Sorry, no soup today!";
console.log(soupAccess);
