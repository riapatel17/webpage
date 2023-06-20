const count = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
let showAlert = true;

// Increment
incrementBtn.addEventListener("click", increment);
function increment() {
	count.innerHTML++;
}

/* 
 difference between == and ===
*/

// Decrement
decrementBtn.addEventListener("click", decrement);
function decrement() {
	if (showAlert && count.innerHTML === '0') {
		alert("You can't go negative.");
		showAlert = false;
	} else {
		count.innerHTML--;
	}
}

// Reset
function reset() {
	count.innerHTML = 0;
}
