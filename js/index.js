import { accordionComponent } from './components/accordion.component.js'
import { burgerMenuComponent } from './components/burger.component.js'
import { modalWindowComponent } from './components/modal.component.js'
import { smothScrollComponent } from './components/smothScroll.component.js'
import { tabsComponent } from './components/tabs.component.js'

document.addEventListener('DOMContentLoaded', () => {
	smothScrollComponent()
	accordionComponent()
	tabsComponent()
	modalWindowComponent()
	burgerMenuComponent()
})
