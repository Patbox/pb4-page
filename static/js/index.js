const navs = document.getElementsByClassName('navbar');

function update() {
	for (let i = 0; i < navs.length; i++) {
		const nav = navs[i];
	
		for (let x = 0; x < nav.children.length - 1; x++) {
			const e = nav.children.item(x);
			if (nav.children.item(x + 1)?.getBoundingClientRect()?.top == e.getBoundingClientRect().top) {
				e.classList.add('seperated');
			} else {
				e.classList.remove('seperated');
			}
		}
	}
}

update();
window.addEventListener('resize', update);

function switchVisiblity(type) {
	const x = document.getElementById("projects_" + type).style;
	console.log(x.clipPath);
	x.clipPath = x.clipPath == "inset(0px)" || x.clipPath == '' ? "inset(0px 0px 100% 0px)" : "inset(0px)"
}


globalThis.switchVisiblity = switchVisiblity;