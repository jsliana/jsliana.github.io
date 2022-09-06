const notify = document.querySelector('.sub-notify');
const formInput = document.getElementById('email');
const formBtn = document.querySelector('.form-btn');

function showNotify() {
	notify.classList.add('notify-show');
	formInput.value = '';
}

function hideNotify() {
	notify.classList.remove('notify-show');
}

function submitForm() {

	if (formInput.value.length > 0) {
		event.preventDefault();
		showNotify();
		setTimeout(hideNotify, 3000);
	}
}
