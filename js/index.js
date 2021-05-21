import { accordion } from './components/accordion.component.js'
import { smothScroll } from './components/smothScroll.component.js'
import { tabs } from './components/tabs.component.js'

document.addEventListener('DOMContentLoaded', () => {
	smothScroll()
	accordion()
	tabs()
})
