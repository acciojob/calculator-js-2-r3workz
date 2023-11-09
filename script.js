let display = ''
document.addEventListener('DOMContentLoaded', () => {
	const displayBox = document.getElementById('display')

	document.getElementById('form').addEventListener('submit', (event) => {
		event.preventDefault()
		const { id } = event.submitter

		switch (id) {
			case 'C':
				display = ''
				break
			case 'back':
				if (display === 'Error') {
					display = ''
				} else {
					display = display.slice(0, -1)
				}
				break
			case 'equal':
				try {
					display = eval(display).toString()
				} catch (e) {
					display = 'Error'
				}
				break
			case 'op':
				display += '('
				break
			case 'cl':
				display += ')'
				break
			case 'divi':
			case '*':
			case '-':
			case 'plus':
			case '.':
				if (display === 'Error') {
					display = id
					break
				}
				if ('+-*/.'.includes(display.trim().slice(-1))) {
					display = display.slice(0, -1) + id
					break
				} else if (id === 'divi') {
					display += '/'
					break
				} else if (id === 'plus') {
					display += '+'
					break
				}
				display += id
				break
			default:
				display += id
				break
		}

		displayBox.innerText = display
	})
})
