const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleEmail);

function toggleEmail() {
	desktopMenu.classList.toggle('inactive');
}
