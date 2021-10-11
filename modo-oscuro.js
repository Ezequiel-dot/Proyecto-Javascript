
const ls=window.localStorage

export default function modoOscuro (btn,darkMode){
    const $boton = document.querySelector(btn),
     $selectors=document.querySelectorAll("[data-dark]")

     let luna="🌙",
     sol="☀️"
     
     const modoDia=()=>{
        $selectors.forEach((el)=>el.classList.remove(darkMode))
        $boton.textContent=luna 
        ls.setItem("theme", "dia")
    }
    
    const modoNoche=()=>{
        $selectors.forEach((el)=>el.classList.add(darkMode))
        $boton.textContent=sol
        ls.setItem("theme","noche")
    }
     document.addEventListener("click",(e)=>{
    
        if(e.target.matches(btn)){
            if($boton.textContent === luna){
                modoNoche()
            }else{
                modoDia()
          }
         }
       })
    
        
       document.addEventListener("DOMContentLoaded",(e)=>{
            if(ls.getItem("theme")===null)ls.setItem("theme","dia")
            if(ls.getItem("theme")==="dia")modoDia()
            if(ls.getItem("theme")==="noche")modoNoche()
        })
}


