//Declare your constants
const topHomeButton = document.querySelector('.top-home-button');
const sectionButton = document.querySelectorAll('.section-button');

topHomeButton.onclick = () => {
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
	document.getElementById("body").classList.toggle("is-menu-visible");
};

function goDownFunction(e) {
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

function changeCursor(e) {
	document.body.style.cursor = 'pointer';
}

sectionButton.forEach(button => button.addEventListener('click', goDownFunction));
sectionButton.forEach(button => button.addEventListener('mouseover', changeCursor));

