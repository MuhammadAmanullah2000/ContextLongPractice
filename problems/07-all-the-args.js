// Write a function named allTheArgs(func, ...args) that will accept a
// function func and any number of arguments after that concatenated 
// to an array of args.The allTheArgs function should return the passed
// -in function func modified to always be invoked with the passed -in
//  arguments args.
function allTheArgs(func, ...args) {
  // Your code here
  return func.bind(this, ...args);
}

const bow = (...names) => {
  let nameArr = Array.from(names);
  return "You bowed to " + names.join(" and ");
};

console.log(bow("Sandy")) // prints "You bowed to Sandy"

let bowSandy = allTheArgs(bow, "Sandy");
console.log(bowSandy()); // prints "You bowed to Sandy"
console.log(bowSandy("Joe", "Nico")); // prints "You bowed to Sandy and Joe and Nico"

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
