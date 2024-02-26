import { browser_ctx__ensure } from '@rappstack/domain--browser/ctx'
import { be_sig_triple_, memo_, type wide_ctx_T } from 'ctx-core/rmemo'
export function site__header__nav_layer__hyop(nav_layer:HTMLElement) {
	nav_layer__set(browser_ctx__ensure(), nav_layer)
}
export function site__header__navlinks__hyop(navlinks:HTMLElement) {
	navlinks__set(browser_ctx__ensure(), navlinks)
}
export function site__header__navlinks_login__hyop(navlinks_login:HTMLElement) {
	navlinks_login__set(browser_ctx__ensure(), navlinks_login)
}
export function site__header__navlinks_menu__hyop(navlinks_menu:HTMLElement) {
	navlinks_menu__set(browser_ctx__ensure(), navlinks_menu)
}
export function site__header__hamburger__hyop(hamburger:HTMLButtonElement) {
	const ctx = browser_ctx__ensure()
	hamburger__set(ctx, hamburger)
	hamburger.addEventListener('click', ()=>{
		is_active__toggle(ctx)
	})
}
export function site__header__navlinks_link__hyop(navlinks_link:HTMLElement) {
	const ctx = browser_ctx__ensure()
	navlinks_link.addEventListener('click', ()=>{
		is_active__toggle(ctx)
	})
}
export function site__header__navlinks_login__close__hyop(navlinks_login__close:HTMLElement) {
	navlinks_login__close.addEventListener('click', evt=>{
		navlinks_menu__open(browser_ctx__ensure())
	})
}
export function site__header__account__div__hyop(account__div:HTMLDivElement) {
	const ctx = browser_ctx__ensure()
	account__div.addEventListener('click', ()=>{
		is_active__set(ctx, true)
		navlinks_login__open(ctx)
	})
}
const [, navlinks_, navlinks__set] = be_sig_triple_<HTMLElement|undefined>(()=>undefined)
const [, navlinks_menu_, navlinks_menu__set] = be_sig_triple_<HTMLElement|undefined>(
	()=>undefined)
function navlinks_menu__open(ctx:wide_ctx_T) {
	navlinks_login_(ctx)!.classList.add('hidden')
	navlinks_menu_(ctx)!.classList.remove('hidden')
}
const [, navlinks_login_, navlinks_login__set] = be_sig_triple_<HTMLElement|undefined>(()=>undefined)
function navlinks_login__open(ctx:wide_ctx_T) {
	navlinks_menu_(ctx)!.classList.add('hidden')
	navlinks_login_(ctx)!.classList.remove('hidden')
}
const [, hamburger_, hamburger__set] = be_sig_triple_<HTMLElement|undefined>(()=>undefined)
const [, nav_layer_, nav_layer__set] = be_sig_triple_<HTMLElement|undefined>(()=>undefined)
const [, is_active_, is_active__set] = be_sig_triple_(
	()=>false
).add((ctx, is_active$)=>memo_(()=>{
	if (is_active$()) {
		navlinks_(ctx)!.classList.add('!visible', '!scale-100', '!opacity-100', '!lg:translate-y-0')
		hamburger_(ctx)!.classList.add('toggled')
		nav_layer_(ctx)!.classList.add('origin-top', 'scale-y-100')
	} else {
		navlinks_(ctx)!.classList.remove('!visible', '!scale-100', '!opacity-100', '!lg:translate-y-0')
		hamburger_(ctx)!.classList.remove('toggled')
		nav_layer_(ctx)!.classList.remove('origin-top', 'scale-y-100')
	}
}))
function is_active__toggle(ctx:wide_ctx_T) {
	is_active__set(ctx, !is_active_(ctx))
}
