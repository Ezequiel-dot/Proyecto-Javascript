

export function digitalClock(relojClock,btnPlay,btnStop){
let clockTiempo;
    document.addEventListener("click",(e)=>{
      
        if(e.target.matches(btnPlay)){
            clockTiempo = setInterval(()=>{
             let horaVivo = new Date()
             let hora=horaVivo.toLocaleTimeString();
             document.querySelector(relojClock).innerHTML = `<h3>${hora}</h3>`
            }, 1000);

            
            e.target.disabled=true
        }

        if(e.target.matches(btnStop)){
            clearInterval(clockTiempo)
            document.querySelector(relojClock).innerHTML = null
            document.querySelector(btnPlay).disabled=false
        }
    })

}



export function alarm(sonido,btnPlay,btnStop){
   let alarmaVar;
   const $audio=document.createElement("audio")
   $audio.src=(sonido)
   
    document.addEventListener("click",(e)=>{


        if(e.target.matches(btnPlay)){
            alarmaVar = setTimeout(() => {
                $audio.play()
            }, 1000);
            e.target.disabled=true
        }


        if(e.target.matches(btnStop)){
         clearTimeout(alarmaVar) 
         $audio.pause()
         $audio.currentTime=0
         document.querySelector(btnPlay).disabled=false
        }
    
    })

}