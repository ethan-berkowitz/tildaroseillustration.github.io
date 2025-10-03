async function loadNavbar() {
	let request = await fetch('components/index_navbar.html');
	let text = await request.text();
	document.getElementById('navbar').innerHTML = text;

	// After navbar is inserted, run the active link logic
	highlightActiveSection();
}

function highlightActiveSection() {

	const sectionMap = {
		"/index.html": "featured",
		"/": "featured",
	};

	const path = window.location.pathname;
	const currentSection = sectionMap[path] || "work";

	const activeLink = document.querySelector(`[data-section="${currentSection}"]`);
	if (activeLink) {
		activeLink.classList.add("active");
	}
}

loadNavbar();
