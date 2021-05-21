export const accordionComponent = () => {
	const featureLinkElems = document.querySelectorAll('.feature__link')
	const featureSubElems = document.querySelectorAll('.feature-sub')

	featureLinkElems.forEach((btn, idx) => {
		btn.addEventListener('click', () => {
			if (!btn.classList.contains('feature__link_active')) {
				featureSubElems.forEach(fSubElem => {
					fSubElem.classList.add('hidden')
				})

				featureLinkElems.forEach(fLinkElem => {
					fLinkElem.classList.remove('feature__link_active')
				})

				featureSubElems[idx].classList.remove('hidden')
				btn.classList.add('feature__link_active')
			} else {
				btn.classList.remove('feature__link_active')
				featureSubElems[idx].classList.add('hidden')
			}
		})
	})
}
