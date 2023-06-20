const count = document.getElementById("counter-value");

// Increment
document.getElementById("increment-btn").addEventListener("click", increment);
function increment() {
	count.innerHTML++;
}

// Decrement
document.getElementById("decrement-btn").addEventListener("click", decrement);
function decrement() {
	count.innerHTML--;
	if (count.innerHTML == -1) {
		alert("You can't go negative.");
	}
}

// Reset
function reset() {
	count.innerHTML = 0;
}