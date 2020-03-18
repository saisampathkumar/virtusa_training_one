window.onload = run;


function run() {
	document.getElementById("tryAgain").onclick = run;
	
	var ans = prompt("How many prime numbers to display?","10");
	try {
		if (!ans || isNaN(ans) || ans <= 0 || Math.round(ans) != ans) {
			throw new Error("Not a valid number");
		}
		// other logic added here
        if (confirm("Click OK to use the better algorithm" +
            ", Cancel for brute force")) {
            var calculator = new PrimeDivisors();
        } else {
            var calculator = new BruteForce();
        }		
        calculator.calculatePrimesArray(ans);
        displayPrimes(calculator);
	}
	catch (errMsg) {
		alert(errMsg.message);
	}
}

function displayPrimes(calculator) {
	var numberOfPrimes = calculator.getNumberOfPrimes();
	document.getElementById("numberOfPrimes").innerHTML = "You wanted this many primes: " + 
		numberOfPrimes + "<br/>";
	document.getElementById("numTests").innerHTML = "The number of tests performed: " + 
		calculator.getNumTests() + "<br/>";
	// add primes to end of display text
	document.getElementById("primeString").innerHTML = "The first " + numberOfPrimes + 
		" prime numbers are: " + calculator.getPrimesAsString();
}


// COMPLETE - define the BruteForce constructor function
function BruteForce() {
	// array for primes
	this.primes = new Array(0);
	this.numTests = 0;
	
	
	// COMPLETE - define the 'calculatePrimesArray' method
this.calculatePrimesArray = function(numberOfPrimes) {
		// add 2 to prime array
		if (numberOfPrimes >= 1) {
			this.primes.push(2);
		}
		
		var lastTested = 2;
		// loop while array needs primes added
		while ( this.primes.length < numberOfPrimes ) {
			// increment tested number
			lastTested++;
		
			// pass to function to test
			var isPrime = this.testForPrime(lastTested);
		
			// if prime add to array
			if (isPrime) {
				this.primes.push(lastTested);
			}
		}
	}
	
	this.testForPrime = function(numberToTest) {
		var modval = Math.ceil(Math.sqrt(numberToTest));
		// Check all numbers lower than the square root
		for (; modval > 1; modval--) {
			this.numTests++;
			if (numberToTest % modval == 0) {
				return false;
			}
		}
	
		// after loop number must be prime
		return true;
	}
	
	this.getNumberOfPrimes = function() {
		return this.primes.length;
	}
	
	this.getNumTests = function() {
		return this.numTests;
	}
	
	this.getPrimesAsString = function() {
		var primeString = "";
		for (var i = 0; i < this.primes.length - 1; i++) {
			primeString += this.primes[i] + ", ";
		}
		primeString += this.primes[this.primes.length - 1];
		return primeString;
	}
}


function PrimeDivisors() {
	BruteForce.call(this);
    this.testForPrime = function(numberToTest) {
        var upperLimit = Math.ceil(Math.sqrt(numberToTest));
        for (var i = 0;  this.primes[i] <= upperLimit  ; i++) {
            this.numTests++;
            if ( numberToTest % this.primes[i] == 0 ) {
                return false;
            }
        }
        return true;
    }
}

PrimeDivisors.prototype = new BruteForce();