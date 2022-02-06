// Switch Statement
// Syntax:

switch (Math.floor(Math.random() * 3 + 1)) {
  case 1:
    console.log(1);
    // run this code if the expression or value is 1
    break;
  case 2:
    console.log(2);
    // run this code if the expression or value is 2
    break;
  case 3:
    console.log(3);

  // add more cases here
  default:
    // run this code if the expression or value is not 1, 2, or default
    // no break needed here
    console.log("No Match");
}
