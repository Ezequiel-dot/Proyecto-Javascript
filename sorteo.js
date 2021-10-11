const d=document


export default function sorteo(btn,selector){
    const winner=(selector)=>{
        const $players=d.querySelectorAll(selector)
        const random = Math.floor(Math.random()*$players.length)
        const ganador=$players[random]

        return `El ganador es ${ganador.textContent}`
    }

    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            let result=winner(selector)

            alert(result)
        }
    })
}