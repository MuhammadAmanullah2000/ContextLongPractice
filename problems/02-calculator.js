// Your code here
// Create a Calculator class.
class Calculator{
	// A newly instantiated instance should have its total property initialized to 0.
	constructor(total) {
		this.total = !total ? 0 : total;
	}

	// Add the following instance methods which should all return the total property of the instance:
	//  a.add(num) - add the num arg to the total
	add(num) {
		return this.total += num;
	}

	//  b.subtract(num) - subtract the num arg from the total
	subtract(num) {
		return this.total -= num;
	}

	//  c.divide(num) - divide the total by the num arg
	divide(num) {
		return this.total /= num;
	}

	//  d.multiply(num) - multiply the total by the num arg
	multiply(num) {
		return this.total *= num;
	}
}

// let calculator = new Calculator();
// console.log(calculator.add(50));      // => 50
// console.log(calculator.subtract(35)); // => 15
// console.log(calculator.multiply(10)); // => 150
// console.log(calculator.divide(5));    // => 30
// console.log(calculator.total)         // => 30

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}
