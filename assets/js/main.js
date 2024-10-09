// Gather the triggers
const navTopButton = document.querySelector(".nav-top")
const pathButton = document.querySelector(".path-button");
const navPathButton = document.querySelector(".nav-path");
const loveButton = document.querySelector(".love-button");
const navLoveButton = document.querySelector(".nav-love");
const mushroomButton = document.querySelector(".mushroom-button");
const navMushroomButton = document.querySelector(".nav-mushroom");
const acidButton = document.querySelector(".acid-button");
const navAcidButton = document.querySelector(".nav-acid");

// When the user clicks on the button, scroll to the place in the document
navTopButton.onclick = () => {
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
};

pathButton.onclick = () => {
	const element = document.getElementById("sidebar");
	element.scrollIntoView({behavior: 'smooth'});
};

navPathButton.onclick = () => {
	const element = document.getElementById("path");
	element.scrollIntoView({behavior: 'smooth'});
};

loveButton.onclick = () => {
	const element = document.getElementById("love");
	element.scrollIntoView({behavior: 'smooth'});
};

navLoveButton.onclick = () => {
	const element = document.getElementById("love");
	element.scrollIntoView({behavior: 'smooth'});
};

mushroomButton.onclick = () => {
	const element = document.getElementById("mushrooms");
	element.scrollIntoView({behavior: 'smooth'});
};

navMushroomButton.onclick = () => {
	const element = document.getElementById("mushrooms");
	element.scrollIntoView({behavior: 'smooth'});
};

acidButton.onclick = () => {
	const element = document.getElementById("acid");
	element.scrollIntoView({behavior: 'smooth'});
};

navAcidButton.onclick = () => {
	const element = document.getElementById("acid");
	element.scrollIntoView({behavior: 'smooth'});
};


// Get the button
const topButton = document.getElementById("top-button");
				
// When the user scrolls down 5px from the top of the document, show the button
window.onscroll = () => {
	scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
	topButton.style.display = "flex";
  } else {
	topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
topButton.onclick = () => {
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
};


/*
	Future Imperfect by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$menu = $('#menu'),
		$sidebar = $('#sidebar'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu.
		$menu
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Search (header).
		var $search = $('#search'),
			$search_input = $search.find('input');

		$body
			.on('click', '[href="#search"]', function(event) {

				event.preventDefault();

				// Not visible?
					if (!$search.hasClass('visible')) {

						// Reset form.
							$search[0].reset();

						// Show.
							$search.addClass('visible');

						// Focus input.
							$search_input.focus();

					}

			});

		$search_input
			.on('keydown', function(event) {

				if (event.keyCode == 27)
					$search_input.blur();

			})
			.on('blur', function() {
				window.setTimeout(function() {
					$search.removeClass('visible');
				}, 100);
			});

	// Intro.
		var $intro = $('#intro');

		// Move to main on <=large, back to sidebar on >large.
			breakpoints.on('<=large', function() {
				$intro.prependTo($main);
			});

			breakpoints.on('>large', function() {
				$intro.prependTo($sidebar);
			});

})(jQuery);