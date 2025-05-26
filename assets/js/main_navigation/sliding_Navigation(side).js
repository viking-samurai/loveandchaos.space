//Declare your constants
const sideNavMindButton = document.getElementById('sideMenu-mind-button');
const sideNavBodyButton = document.getElementById('sideMenu-body-button');
const sideNavSoulButton = document.getElementById('sideMenu-soul-button');
const sideNavLoveButton = document.getElementById('sideMenu-love-button');
const sideNavChaosButton = document.getElementById('sideMenu-chaos-button');

sideNavMindButton.onclick = () => {
	const element = document.getElementById("mind");
	element.scrollIntoView({behavior: 'smooth'});
	document.getElementById("main-body").classList.toggle("is-menu-visible");
};

sideNavBodyButton.onclick = () => {
	const element = document.getElementById("body");
	element.scrollIntoView({behavior: 'smooth'});
	document.getElementById("main-body").classList.toggle("is-menu-visible");
};

sideNavSoulButton.onclick = () => {
	const element = document.getElementById("soul");
	element.scrollIntoView({behavior: 'smooth'});
	document.getElementById("main-body").classList.toggle("is-menu-visible");
};

sideNavLoveButton.onclick = () => {
	const element = document.getElementById("love");
	element.scrollIntoView({behavior: 'smooth'});
	document.getElementById("main-body").classList.toggle("is-menu-visible");
};

sideNavChaosButton.onclick = () => {
	const element = document.getElementById("chaos");
	element.scrollIntoView({behavior: 'smooth'});
	document.getElementById("main-body").classList.toggle("is-menu-visible");
};