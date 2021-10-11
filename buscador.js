const d=document

export default function buscador(input,selector){
    d.addEventListener("keyup",(e)=>{
        if(e.target.matches){

            if(e.key === "Escape")e.target.value=""

            d.querySelectorAll(selector).forEach(el=>{
                el.textContent.toLowerCase().includes(e.target.value)
                ?el.classList.remove("filter")
                :el.classList.add("filter")
            })

        }
    })
}