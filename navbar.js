async function loadNavbar() {
	let request = await fetch('/navbar.html');
	let text = await request.text();
	document.getElementById('navbar').innerHTML = text;

	// After navbar is inserted, run the active link logic
	highlightActiveSection();
}

function highlightActiveSection() {
	const path = window.location.pathname;

	const sectionMap = {
		"/index.html": "featured",
		"/": "featured",

		// Work pages
		"/work/creatures.html": "work",
		"/work/people.html": "work",
		"/work/nature.html": "work",
		"/work/black_and_white.html": "work",
		"/work/client.html": "work",

		// Textile pages
		"/textile/fiber_art.html": "textile",
		"/textile/patterns.html": "textile",
		"/projects/fiber_art_autumn.html": "textile",
		"/projects/fiber_art_countryside.html": "textile",
		"/projects/fiber_art_flounder.html": "textile",
		"/projects/fiber_art_spring_moss.html": "textile",
		"/projects/fiber_art_summer_moss.html": "textile",
		"/projects/fiber_art_sunshine.html": "textile",
		"/projects/fiber_art_waterfall.html": "textile",
		"/projects/fiber_art_wave.html": "textile",

		// About pages
		"/about/bio.html": "about",
		"/about/contact.html": "about"
	};

	// Fallback to "work" if no match found
	const currentSection = sectionMap[path] || "work";

	const activeLink = document.querySelector(`[data-section="${currentSection}"]`);
	if (activeLink) {
		activeLink.classList.add("active");
	}
}



loadNavbar();
