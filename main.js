const btnMinusStep = document.querySelector('.minus-step');
const btnPlusStep = document.querySelector('.plus-step');
const btnMinusCount = document.querySelector('.minus-count');
const btnPlusCount = document.querySelector('.plus-count');

const stepMsg = document.querySelector('.step');
const countMsg = document.querySelector('.count');
const message = document.querySelector('.message-date');

let stepValue = 0;
let countValue = 0;
let currentDate = new Date().toString().slice(0, 15);

const today = new Date();

/* Pomysł na zwiększanie/zmniejszanie dat polega na tym, że bieżąca data jest konwertowana na milisekkundy, następnie zwiększana/zmniejszana o wartość count, a następnie format dat jest konwertowany i wyświetlany w paragrafie
 */

stepMsg.textContent = `Step: ${stepValue}`;
countMsg.textContent = `Count: ${countValue}`;
message.textContent = `Current date: ${currentDate}`;

const stepPlus = () => {
	stepValue++;
	console.log(stepValue);
	stepMsg.textContent = `Step: ${stepValue}`;
};

const stepMinus = () => {
	stepValue--;
	console.log(stepValue);
	stepMsg.textContent = `Step: ${stepValue}`;
};

const countPlus = () => {
	countValue = countValue + stepValue;
	countMsg.textContent = `Count: ${countValue}`;
	updateDate();
	message.textContent = `${countValue} day(s) from today is ${currentDate}`;
};

const countMinus = () => {
	countValue = countValue - stepValue;
	countMsg.textContent = `Count: ${countValue}`;
	updateDate();
	message.textContent = `${countValue} day(s) from today is ${currentDate}`;
};

const addDays = () => {
	currentDate = new Date(
		today.getTime() + parseInt(countValue + '000') * 60 * 60 * 24
	)
		.toString()
		.slice(0, 15);
};

const updateDate = () => {
	if ((countValue) => 0) {
		currentDate = new Date(
			today.getTime() + parseInt(countValue + '000') * 60 * 60 * 24
		)
			.toString()
			.slice(0, 15);
	} else {
		currentDate = new Date(
			today.getTime() + -1 * parseInt(countValue + '000') * 60 * 60 * 24
		)
			.toString()
			.slice(0, 15);
	}
};

btnPlusStep.addEventListener('click', stepPlus);
btnMinusStep.addEventListener('click', stepMinus);

btnPlusCount.addEventListener('click', countPlus);
btnMinusCount.addEventListener('click', countMinus);
