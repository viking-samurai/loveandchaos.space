// Gather the triggers
// Pagetop button constants
const navTopButton = document.querySelector(".nav-top")
const sideNavTopButton = document.querySelector(".side-nav-top")
// Page location button constants
const navPathButton = document.querySelector(".nav-path");
const sideNavPathButton = document.querySelector(".side-nav-path");
const loveButton = document.querySelector(".love-button");
const navLoveButton = document.querySelector(".nav-love");
const sideNavLoveButton = document.querySelector(".side-nav-love");
const mushroomButton = document.querySelector(".mushroom-button");
const navMushroomButton = document.querySelector(".nav-mushroom");
const sideNavMushroomButton = document.querySelector(".side-nav-mushroom");
const acidButton = document.querySelector(".acid-button");
const navAcidButton = document.querySelector(".nav-acid");
const sideNavAcidButton = document.querySelector(".side-nav-acid");
const cycleButton = document.querySelector(".cycle-button");
// About section button constants
const navAboutButton = document.querySelector(".nav-about");
const sideNavAboutButton = document.querySelector(".side-nav-about");

// When the user clicks on the button, scroll to the place in the document
navTopButton.onclick = () => {
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
};

sideNavTopButton.onclick = () => {
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
	document.getElementById("body").classList.toggle("is-menu-visible");
};

navPathButton.onclick = () => {
	const element = document.getElementById("path");
	element.scrollIntoView({behavior: 'smooth'});
};

sideNavPathButton.onclick = () => {
	const element = document.getElementById("path");
	element.scrollIntoView({behavior: 'smooth'});
	document.getElementById("body").classList.toggle("is-menu-visible");
};

loveButton.onclick = () => {
	const element = document.getElementById("love");
	element.scrollIntoView({behavior: 'smooth'});
};

navLoveButton.onclick = () => {
	const element = document.getElementById("love");
	element.scrollIntoView({behavior: 'smooth'});
};

sideNavLoveButton.onclick = () => {
	const element = document.getElementById("love");
	element.scrollIntoView({behavior: 'smooth'});
	document.getElementById("body").classList.toggle("is-menu-visible");
};

mushroomButton.onclick = () => {
	const element = document.getElementById("mushrooms");
	element.scrollIntoView({behavior: 'smooth'});
};

navMushroomButton.onclick = () => {
	const element = document.getElementById("mushrooms");
	element.scrollIntoView({behavior: 'smooth'});
};

sideNavMushroomButton.onclick = () => {
	const element = document.getElementById("mushrooms");
	element.scrollIntoView({behavior: 'smooth'});
	document.getElementById("body").classList.toggle("is-menu-visible");
};

acidButton.onclick = () => {
	const element = document.getElementById("acid");
	element.scrollIntoView({behavior: 'smooth'});
};

navAcidButton.onclick = () => {
	const element = document.getElementById("acid");
	element.scrollIntoView({behavior: 'smooth'});
};

sideNavAcidButton.onclick = () => {
	const element = document.getElementById("acid");
	element.scrollIntoView({behavior: 'smooth'});
	document.getElementById("body").classList.toggle("is-menu-visible");
};

cycleButton.onclick = () => {
	const element = document.getElementById("path");
	element.scrollIntoView({behavior: 'smooth'});
};


// Scroll to about section
navAboutButton.onclick = () => {
	const element = document.getElementById("blurb");
	element.scrollIntoView({behavior: 'smooth'});
};

sideNavAboutButton.onclick = () => {
	const element = document.getElementById("blurb");
	element.scrollIntoView({behavior: 'smooth'});
	document.getElementById("body").classList.toggle("is-menu-visible");
};