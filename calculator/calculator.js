window.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById("calc-form");
	if (form) {
		setupIntialValues();
		form.addEventListener("submit", function(e) {
			e.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: +(document.getElementById("loan-amount").value),
		years: +(document.getElementById("loan-years").value),
		rate: +(document.getElementById("loan-rate").value),
	}
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	document.getElementById("loan-amount").value = 1000;
	document.getElementById("loan-years").value = 3;
	document.getElementById("loan-rate").value = 3.21; //%
	update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	let currentUIValues = getCurrentUIValues();
	let monthlyPayment = calculateMonthlyPayment(currentUIValues);
	updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	let amount = values.amount;
	let years = values.years;
	let rate = values.rate;
	let months = years * 12;
	let yearlyRate = rate / 100;///-percent to real value
	let monthlyRate = yearlyRate / 12;
	let payment = (amount * monthlyRate) / (1 - (1 + monthlyRate)**-months);///-formula to calculate monthly payment
	return (Math.ceil(payment * 100) / 100).toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	document.getElementById("monthly-payment").innerHTML = '<br> $' + monthly;
}
