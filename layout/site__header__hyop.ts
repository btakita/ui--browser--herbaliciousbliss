export function site__header__hyop(site__header:HTMLElement) {
	let is_active = false
	const navlinks = site__header.querySelector('#navlinks')!
	const hamburger = site__header.querySelector('#hamburger')!
	const layer = site__header.querySelector('#navLayer')!
	const links = [...navlinks.querySelector('ul')!.children]
	hamburger.addEventListener('click', ()=>{
		is_active = !is_active
		navlinks__toggle()
	})
	links.forEach((link)=>{
		link.addEventListener('click', ()=>{
			is_active = !is_active
			navlinks__toggle()
		})
	})
	function navlinks__toggle() {
		if (is_active) {
			navlinks.classList.add('!visible', '!scale-100', '!opacity-100', '!lg:translate-y-0')
			hamburger.classList.add('toggled')
			layer.classList.add('origin-top', 'scale-y-100')
		} else {
			navlinks.classList.remove('!visible', '!scale-100', '!opacity-100', '!lg:translate-y-0')
			hamburger.classList.remove('toggled')
			layer.classList.remove('origin-top', 'scale-y-100')
		}
	}
}
