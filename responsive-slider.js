const d=document


export default function carrusel(){
    const $btnSig=d.querySelector(".slider-btn.next"),
     $btnPrev=d.querySelector(".slider-btn.prev"),
    $slides= d.querySelectorAll(".slider-slide")
  

    
    let i = 0;

    d.addEventListener("click",(e)=>{


        if(e.target===$btnPrev){
            e.preventDefault()

            $slides[i].classList.remove("active")
            i--
        }

        if(i < 0){
            i=$slides.length
        }

        $slides[i].classList.add("active")
//otro botn
        if(e.target===$btnSig){
            e.preventDefault()

            $slides[i].classList.remove("active")
            i++
        }

        if(i >= $slides.length){
            i=0
        }

        $slides[i].classList.add("active")
        
    })
}