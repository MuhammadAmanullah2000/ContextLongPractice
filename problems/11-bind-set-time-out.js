// Write a function named boundFuncTimer(obj, func, delay) that will 
// accept an object obj, a function func, and delay which is a number 
// representing milliseconds.The boundFuncTimer should invoke the function
//  func with obj as its context after a delay.
function boundFuncTimer(obj, func, delay) {
  // Your code here
  setTimeout(() => func.call(obj), delay);
}

class Animal {
  constructor(age) {
    this.age = age;
  }

  growOlder() {
    this.age++;
    console.log(this.age);
  }
}

const dog = new Animal(1);
const cat = new Animal(5);

boundFuncTimer(dog, dog.growOlder, 5000); // in 5 seconds prints: 2
boundFuncTimer(cat, dog.growOlder, 7000); // in 7 seconds prints: 6

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;
