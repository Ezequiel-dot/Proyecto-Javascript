const d = document;
export default function responsiveTester(form) {
	const $formTester = d.getElementById(form);
	let pageTester;
	d.addEventListener('submit', (e) => {
		if (e.target === $formTester) {
			// para que en la barra de direcciones no me salga los datos del form
			e.preventDefault();
			pageTester = window.open(
				$formTester.url.value,
				'google',
				`innerWidth=${$formTester.width.value},
				innerHeight=${$formTester.height.value}`
			);
		}
		if (e.target === $formTester.closeResponsivePage) pageTester.close();
	});
}

  