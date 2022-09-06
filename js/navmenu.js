const nav = document.querySelector('.nav-items');
const navToggle = document.querySelector('.menu-toggle');
const menuIcon = document.querySelector('.menu-icon')

navToggle.addEventListener('click', () => {
	const visible = nav.getAttribute('menu-open');
	if (visible === 'false') {
		nav.setAttribute('menu-open', 'true');
		menuIcon.setAttribute('class', 'menu-icon fa-sharp fa-solid fa-xmark');
		menuIcon.style.color='white';
		menuIcon.style.transition='0.1s ease-in-out';
	} 
	else {
		nav.setAttribute('menu-open', 'false');
		menuIcon.setAttribute('class', 'menu-icon fa-sharp fa-solid fa-bars');
		menuIcon.style.color='black';
		menuIcon.style.transition='0.5s ease-in-out';
	}
})