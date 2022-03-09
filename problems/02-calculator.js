// Your code here
class Calculator{
	constructor(total){
		this.total = !total ? 0 : total
	}
	add(num){
		this.total += num;
	}
	subtract(num){
		this.total -= num;
	}
	divide(num){
		this.total /= num;
	}
	multiply(num){
		this.total *= num;
	}
	

}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}
