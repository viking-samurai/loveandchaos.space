//Declare your constants
const topHomeButton = document.querySelector('.top-home-button');
const sectionButton = document.querySelectorAll('.section-button');
//Declare your constants (side menu)
const sideNavMindButton = document.getElementById('sideMenu-mind-button');
const sideNavBodyButton = document.getElementById('sideMenu-body-button');
const sideNavSoulButton = document.getElementById('sideMenu-soul-button');
const sideNavLoveButton = document.getElementById('sideMenu-love-button');
const sideNavChaosButton = document.getElementById('sideMenu-chaos-button');
//Declare your constants (main sections)
const homeButton = document.querySelector('.home-button');
const nextButton = document.querySelectorAll('.next-button');



//Write your functions
//Top menu navigation functions
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

//Upward slide function from top navigation sections 
topHomeButton.onclick = () => {
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
	document.getElementById("body").classList.toggle("is-menu-visible");
};



//Side menu navigation functions
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

//Return side navigation menu to closed position
function changeCursor(e) {
	document.body.style.cursor = 'pointer';
}



//Main section navigation functions
//Downward slide functions from main sections
function goDownFunction(e) {
	console.log(this.id);
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

//Upward slide function from main sections 
homeButton.onclick = () => {
	console.log("Working!");
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
	document.getElementById("body").classList.toggle("is-menu-visible");
};





//Triggers
//Main section next button
nextButton.forEach(button => button.addEventListener('click', goDownFunction));
//Side menu event listeners
sectionButton.forEach(button => button.addEventListener('click', topDownFunction));
sectionButton.forEach(button => button.addEventListener('mouseover', changeCursor));



