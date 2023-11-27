// Create an array to store the values of the id to help with our color reverse.
const btnIdArray = [];

// Create document query selector to obtain buttons for event listener
const buttons = document.querySelectorAll('btn');

// Use a for loop to change each button, on each click

for (const button of buttons) {
	button.addEventListener('click', ChangeColor);
}

function ChangeColor(event) {
	const btn = event.target;
	btn.style.backgroundColor = 'green';
	btnIdArray.push(btn.id);
	console.log(btnIdArray);

	if (btnIdArray.length == 6) {
		ReverseButtons();
	}
}

ReverseButtons = () => {
	btnIdArray.reverse();

	for (const id of btnIdArray) {
		const reverseBtn = document.getElementById(id);
		reverseBtn.style.backgroundColor = 'white';
		btnIdArray = [];
	}
};
