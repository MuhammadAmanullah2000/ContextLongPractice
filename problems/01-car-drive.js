// Your code here

// Create a Car class
class Car {
	// A newly instantiated instance should have its speed property initialized to 0.
	constructor(speed) {
		this.speed = !speed ? 0 : this.drive(newSpeed);
	}

	// Add an instance method called drive(newSpeed) that takes in a newSpeed and sets it to 
	// the instance's speed property. It should also return the present speed of the instance.
	drive(newSpeed) {
		return this.speed = newSpeed;
	}
}

let car = new Car();
car.drive(0);     // => returns 0
console.log(car); // => { speed: 0 }

car.drive(10);    // => returns 10
console.log(car); // => { speed: 10, }

car.drive(50);    // => returns 50
console.log(car); // -> { speed: 50 }

car.drive(100);   // => returns 100
console.log(car); // -> { speed: 100 }

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Car;
} catch {
	module.exports = null;
}
