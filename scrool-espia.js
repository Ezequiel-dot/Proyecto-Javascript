const d=document

export default function scroolSpy(){


    const $secciones = d.querySelectorAll('section[data-scrool-spy]');
	const cb = (entradas) => {
		entradas.forEach((entrada) => {
		
			const id = entrada.target.getAttribute('id');
			if (entrada.isIntersecting) {

				d.querySelector(`a[data-scrool-spy][href="#${id}"]`).classList.add(
					'active'
				);
			} else {
	
				d.querySelector(`a[data-scrool-spy][href="#${id}"]`).classList.remove(
					'active'
				);
			}
		});
	};

    const observador = new IntersectionObserver(cb,{
       // rootMargin:"-250px"
        threshold:[0.35,0.55]
    })

    $secciones.forEach((el) => observador.observe(el))
}