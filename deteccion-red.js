const d=document,
 n=navigator,
 w=window


export default function estadoRed(){

const $div= d.createElement("div")

    const isOnline=()=>{
        if(n.onLine){
            $div.textContent="conexion Reestablecida"
            $div.classList.add("online")
           /$div.classList.remove("offline")
        }else{
            $div.textContent="conexion Perdida"
            $div.classList.remove("online")
            $div.classList.add("offline")
        }

        d.body.insertAdjacentElement("afterbegin",$div)
        setTimeout(() => d.body.removeChild($div), 3000);
    }

w.addEventListener("online",(e)=>isOnline())    
w.addEventListener("offline",(e)=>isOnline())    
}