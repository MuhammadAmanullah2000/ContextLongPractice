// Your code here
// Create a Dog class.
class Dog {
	// The constructor function should take in a name argument and set the name property of a newly instantiated instance to the name argument.
	constructor(name) {
		this.name = !name ? "name" : name;
	}

	// Add a static method called makeJet() that will return a new instance of the Dog class with a name property of "Jet".
	static makeJet() {
		return new Dog("Jet");
	}

	// Add two instance methods: 
	// a.changeName(newName) - set the name to the newName
	changeName(newName) {
		return this.name = newName;	
	}

	// b.speak(word) - returns ${ name } says ${ word }
	speak(word) {
		return `${this.name} says ${word}`;
	}
}

let dog1 = Dog.makeJet(); // returns an object

console.log(dog1.name);                 // Jet
console.log(dog1.speak("hello"));       // Jet says hello
console.log(dog1.changeName("Freyja")); // Freyja
console.log(dog1.name);                 // Freyja
console.log(dog1.speak("hello"));       // Freyja says hello

let dog2 = Dog.makeJet();
console.log(dog2.name);                 // Jet

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}
