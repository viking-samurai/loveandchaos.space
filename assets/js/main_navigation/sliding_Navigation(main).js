//Declare your constants
const homeButton = document.querySelector('.home-button');
const nextButton = document.querySelectorAll('.next-button');

homeButton.onclick = () => {
	console.log("Working!");
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
	document.getElementById("body").classList.toggle("is-menu-visible");
};

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

nextButton.forEach(button => button.addEventListener('click', goDownFunction));
