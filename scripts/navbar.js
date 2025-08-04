async function loadNavbar() {
	let request = await fetch('../components/navbar.html');
	let text = await request.text();
	document.getElementById('navbar').innerHTML = text;

	// After navbar is inserted, run the active link logic
	highlightActiveSection();
}

function highlightActiveSection() {

	const sectionMap = {
		"/tildaroseillustration.github.io/index.html": "featured",
		"/tildaroseillustration.github.io/": "featured",
		
		// Textile pages
		"/tildaroseillustration.github.io/textile/fiber_art.html": "textile",
		"/tildaroseillustration.github.io/textile/patterns.html": "textile",
		"/tildaroseillustration.github.io/projects/fiber_art_autumn.html": "textile",
		"/tildaroseillustration.github.io/projects/fiber_art_countryside.html": "textile",
		"/tildaroseillustration.github.io/projects/fiber_art_flounder.html": "textile",
		"/tildaroseillustration.github.io/projects/fiber_art_spring_moss.html": "textile",
		"/tildaroseillustration.github.io/projects/fiber_art_summer_moss.html": "textile",
		"/tildaroseillustration.github.io/projects/fiber_art_sunshine.html": "textile",
		"/tildaroseillustration.github.io/projects/fiber_art_waterfall.html": "textile",
		"/tildaroseillustration.github.io/projects/fiber_art_wave.html": "textile",
		
		// About pages
		"/tildaroseillustration.github.io/about/bio.html": "about",
		"/tildaroseillustration.github.io/about/contact.html": "about"
	};

	const path = window.location.pathname;
	console.log("Path:", path);
	const currentSection = sectionMap[path] || "work";
	console.log("Matched section:", currentSection);

	const activeLink = document.querySelector(`[data-section="${currentSection}"]`);
	if (activeLink) {
		activeLink.classList.add("active");
	}
}

loadNavbar();
