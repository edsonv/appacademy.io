const Calculator = require('./02-calculator');

// Your code here
class FancyCalculator extends Calculator{

	setTotal(newTotal){
		this.total= newTotal
		return this.total
	}

	modulo(num){
		this.total = this.total % num
		return this.total
	}

	squared(){
		this.total= this.total **2
		return this.total
	}
}

let fancyCalculator = new FancyCalculator();
console.log(fancyCalculator.setTotal(5)); // => 5
console.log(fancyCalculator.squared());   // => 25
console.log(fancyCalculator.modulo(4));   // => 1
console.log(fancyCalculator.total)        // => 1

// can use instance methods on the Calculator class
console.log(fancyCalculator.add(9))       // => 10

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}