// Create an array to store the values of the id to help with our color reverse.
var btnArray = [];

// Create document query selector to obtain buttons for event listener
const buttons = document.querySelectorAll('.btn');

// Use a for loop to change each button, on each click

for (const button of buttons) {
	button.addEventListener('click', ChangeColor);
}

function ChangeColor(event) {
	const btn = event.target;
	btn.style.backgroundColor = 'green';
	btnArray.push(btn.id);
	console.log(btnArray);

	if (btnArray.length == 6) {
		ReverseButtons();
	}
}

ReverseButtons = () => {
	btnArray.reverse();

	for (const [index, id] of btnArray.entries()) {
		const reverseBtn = document.getElementById(id);
		setTimeout(() => {
			reverseBtn.style.backgroundColor = 'white';
		}, index * 1000);
		btnArray = [];
	}
};
