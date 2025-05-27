//////////////////////////////////////////////
//All navigation constant declarations////////
//////////////////////////////////////////////

//Top section constants
const sectionButton = document.querySelectorAll('.section-button');
//Main section constants
const homeButton = document.querySelectorAll('.home-button');
const nextButton = document.querySelectorAll('.next-button');
//Side section constants
const sideMenuButton = document.querySelectorAll('.sideMenu-section-button');
const sideNavMindButton = document.getElementById('sideMenu-mind-button');
const sideNavBodyButton = document.getElementById('sideMenu-body-button');
const sideNavSoulButton = document.getElementById('sideMenu-soul-button');
const sideNavLoveButton = document.getElementById('sideMenu-love-button');
const sideNavChaosButton = document.getElementById('sideMenu-chaos-button');

//////////////////////////////////////////////////
//Header and Main Section Navigation Functions////
//////////////////////////////////////////////////

//Downward slide functions from top menu navigation section
function topDownFunction(e) {
	if (this.id === "top-mind-button") {	
		const element = document.getElementById("mind");
		element.scrollIntoView({behavior: 'smooth'});
	}
	if (this.id === "top-body-button") {	
		const element = document.getElementById("body");
		element.scrollIntoView({behavior: 'smooth'});
	}
	if (this.id === "top-soul-button") {	
		const element = document.getElementById("soul");
		element.scrollIntoView({behavior: 'smooth'});
	}
	if (this.id === "top-love-button") {	
		const element = document.getElementById("love");
		element.scrollIntoView({behavior: 'smooth'});
	}
	if (this.id === "top-chaos-button") {	
		const element = document.getElementById("chaos");
		element.scrollIntoView({behavior: 'smooth'});
	}
}

//Downward slide functions from main sections
function goDownFunction(e) {
	if (this.id === "body-button") {	
		const element = document.getElementById("body");
		element.scrollIntoView({behavior: 'smooth'});
	}
	if (this.id === "soul-button") {	
		const element = document.getElementById("soul");
		element.scrollIntoView({behavior: 'smooth'});
	}
	if (this.id === "love-button") {	
		const element = document.getElementById("love");
		element.scrollIntoView({behavior: 'smooth'});
	}
	if (this.id === "chaos-button") {	
		const element = document.getElementById("chaos");
		element.scrollIntoView({behavior: 'smooth'});
	}
}

////////////////////////////////////////////////
//Side Menu Navigation functions////////////////
////////////////////////////////////////////////

//Downward slide functions from side menu
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

////////////////////////////////////////////////
//Navigation return functions//////////////////
////////////////////////////////////////////////

//Top function
function topFunction() {
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
	document.getElementById("body").classList.toggle("is-menu-visible");
}

//Change mouseover for links
function changeCursor(event) {
  const targetElement = event.currentTarget || event.target;
  targetElement.style.cursor = 'pointer';
}

//////////////////////////////////////////////
//All navigation constant triggers////////////
//////////////////////////////////////////////

//Main section triggers
nextButton.forEach(button => button.addEventListener('click', goDownFunction));
homeButton.forEach(button => button.addEventListener('click', topFunction));
homeButton.forEach(button => button.addEventListener('mouseover', changeCursor));
//Top menu triggers
sectionButton.forEach(button => button.addEventListener('click', topDownFunction));
sectionButton.forEach(button => button.addEventListener('mouseover', changeCursor));
//Side menu tiggers
sideMenuButton.forEach(button => button.addEventListener('mouseover', changeCursor));
