const array = [];

changeColor = () => {
	const button = document.getElementById('1');
	button.style.backgroundColor = 'Green';
	setTimeout(() => {
		button.style.backgroundColor = 'pink';
	}, 3000);
};
