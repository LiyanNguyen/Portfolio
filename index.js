//======= BACK TO TOP FUNCTION =======//
let ViewportHeight = window.innerHeight; //get the viewport height of device
let toTopButton = document.querySelector('.to-top'); //get to back to top button

//show the back to top button when user scroll down half the size of viewport
window.addEventListener('scroll', () => {
	if (window.pageYOffset > ViewportHeight / 2) {
		toTopButton.classList.add("active");
	} else {
		toTopButton.classList.remove("active");
	}
});

//======= SIDEBAR TOGGLE FUNCTION =======//
let toggleMobileViewMenu = () => {
	document.querySelector('aside').classList.toggle('toggle');
}

//======= SIDEBAR REMOVE FUNCTION (FOR SIDEBAR MENU) =======//
let removeMobileViewMenu = () => {
	document.querySelector("aside").classList.remove("toggle");
};

//======= SIDEBAR SCROLLSPY =======//
let section = document.querySelectorAll("section"); // get all sections
let menuLinks = document.querySelectorAll(".nav-link"); // get all sidebar menu links
let sectionHeight = document.querySelector("section").offsetHeight; // get the height of the top menu
let sectionStartingPointArray = []; // array to store the top-most pixel points of each section
let menuLinksArray = []; // array to store the menu elements

// for every section we store their top-most pixel point into an array
section.forEach((sec) => {
	sectionStartingPointArray.push(sec.offsetTop);
});

// for every menu link element we store them in an array
menuLinks.forEach((menuLink) => {
	menuLinksArray.push(menuLink);
});

// call this function everytime we scroll on the browser window
window.onscroll = () => {
	// amount of pixel we have scrolled downwards from the top-most point of the web page
	let downwardScroll = window.scrollY;

	// for every <section>'s top-most point
	sectionStartingPointArray.forEach((sectionStart, sectionIndex) => {
		// check if the current downward scroll is on the middle of each <section>
		// by using its top-most point minus its height divide by half
		if (downwardScroll >= sectionStart - sectionHeight / 2) {
			//if so, we remove all the 'active' classes on all menu links
			menuLinksArray.forEach((menu) => {
				menu.classList.remove("active");
			});
			//then add the 'active' class on the corresponding menu depending on which section the scroll is currently at
			menuLinksArray[sectionIndex].classList.add("active");
		}
	});
};

//======= DARK-LIGHT MODE FUNCTION =======//
let documentRoot = document.querySelector(":root");
let darkToggleButton = document.querySelector("#dark-theme-toggle");
let isDarkMode = false;

darkToggleButton.onclick = () => {
	isDarkMode = !isDarkMode;

	if (isDarkMode) {
		// switch to dark-mode
		documentRoot.style.setProperty("--theme-background", "#010409");
		documentRoot.style.setProperty("--theme-text-color", "#eee");
		documentRoot.style.setProperty("--sidebar-background", "#0D1117");
		documentRoot.style.setProperty("--component-background", "#333");
		documentRoot.style.setProperty("--border-color", "#eee4");
		documentRoot.style.setProperty("--emphasize-color", "cornflowerblue");
	}
	
	else {
		// switch to light-mode
		documentRoot.style.setProperty("--theme-background", "#fefbf6");
		documentRoot.style.setProperty("--theme-text-color", "#111");
		documentRoot.style.setProperty("--sidebar-background", "#c9daf8");
		documentRoot.style.setProperty("--component-background", "#e6e8f7");
		documentRoot.style.setProperty("--border-color", "#1c1c1c");
		documentRoot.style.setProperty("--emphasize-color", "dodgerblue");
	}
};

//======= FUNCTION TO WAIT FOR ENTIRE FILES TO PARSE FIRST =======//
let checkIfDocumentFullyLoaded = () => {
	if (document.readyState === "complete") {
		// make the entire page visible
		document.querySelector('body').removeAttribute('style');
		// remove the interval call to this function
		clearInterval(checkPageLoad);
	}
};
let checkPageLoad = setInterval(checkIfDocumentFullyLoaded, 100);