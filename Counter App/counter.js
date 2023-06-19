let counter = 0;
document.getElementById("counter-value").innerText = counter;

// Increment

document.getElementById("increment-btn").addEventListener("click", increment);

function increment() {
	counter = counter + 1;
	document.getElementById("counter-value").innerText = counter;
}

// decrement

document.getElementById("decrement-btn").addEventListener("click", decrement);

function decrement() {
	counter = counter - 1;
	document.getElementById("counter-value").innerText = counter;

	if (counter < 0) {
		counter = 0;
		document.getElementById("counter-value").innerText = counter;
		alert("You can't go negative.");
	}
}

// Reset
function reset() {
	counter = 0;
	document.getElementById("counter-value").innerText = counter;
}


