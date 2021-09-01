const nav = document.getElementById('navbar');

function update() {
	for (let x = 0; x < nav.children.length - 1; x++) {
		const e = nav.children.item(x);
		if (nav.children.item(x + 1)?.getBoundingClientRect()?.top == e.getBoundingClientRect().top) {
			e.classList.add('seperated');
		} else {
			e.classList.remove('seperated');
		}
	}
}

update();
window.addEventListener('resize', update);
