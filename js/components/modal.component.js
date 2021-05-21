export const modalWindowComponent = () => {
	const moreElems = document.querySelectorAll('.more')
	const modalElem = document.querySelector('.modal')

	const openModal = () => {
		modalElem.classList.remove('hidden')
		document.body.style.overflow = 'hidden'
	}

	const closeModal = () => {
		modalElem.classList.add('hidden')
		document.body.style.overflow = ''
	}

	moreElems.forEach(item => item.addEventListener('click', openModal))
	modalElem.addEventListener('click', event => {
		const target = event.target

		if (
			target.classList.contains('overlay') ||
			target.classList.contains('modal__close')
		) {
			closeModal()
		}
	})
}
