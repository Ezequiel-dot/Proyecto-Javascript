

export default function scrolButon(btn){

    let $boton=document.querySelector(btn)
    

    window.addEventListener("scroll",(e)=>{
        let ejeY = document.documentElement.scrollTop || window.pageYOffset

        if(ejeY > 399){
            $boton.classList.remove("hidden")
        }else{
            $boton.classList.add("hidden")
        }

        //console.log(document.documentElement.scrollY,window.pageYOffset)

    })

    document.addEventListener("click",(e)=>{

        if(e.target.matches(btn)){
            window.scrollTo({
                behavior:"smooth",
                top:0,
            })
        }

    })


}