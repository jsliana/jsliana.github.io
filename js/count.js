const spot = document.querySelector('.stats');
const values = document.querySelectorAll('.stat-num');
const interval = 2000;
let times = 1;

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function startCount() {
		if (times > 0) {
		values.forEach(value => {
			let startValue = 0;
			let endValue = parseInt(value.getAttribute('data'));
			let duration = Math.floor(interval / endValue);
			
			let count = setInterval(() => {
				if (endValue <= 1000) {
					startValue += 1
				}
				else if (endValue <= 5000) {
					startValue += 10
				}
				else if (endValue >= 10000) {
					startValue += 20
				}
				value.textContent = startValue;
				if (startValue === endValue) {
					clearInterval(count);
				}
			}, duration);
		})
		times -= 1;
		document.removeEventListener('scroll', startCount);
	}
}

window.addEventListener('load', () => {
	if (isInViewport(spot) === true) {
		startCount();
	}
});

document.addEventListener('scroll', startCount);

