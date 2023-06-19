let counter = 0;
document.getElementById("counter-value").innerText = counter;

// Increment
function increment() {
	counter = counter + 1;
	document.getElementById("counter-value").innerText = counter;
}

// decrement
function decrement() {
	counter = counter - 1;
	document.getElementById("counter-value").innerText = counter;
}

// Reset
function reset() {
	counter = 0;
	document.getElementById("counter-value").innerText = counter;
}



