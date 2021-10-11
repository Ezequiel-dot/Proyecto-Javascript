const d=document

export function caja(e){
    if(e.key === "a" && e.altKey){
        alert("Lanzaste un alert")
    }
    if(e.key === "c" && e.altKey){
        let confirmacion=confirm("Lanzaste una confirmacion")
        alert(`Apretaste ${confirmacion}`)
    }
    if(e.key === "p" && e.altKey){
        let nombre=prompt("lanzaste un prompt")
        alert(`Escribiste ${nombre}`)
    }
}

let x=0,y=0
export function moveBall(e,ball,stage){
    const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limtBall=$ball.getBoundingClientRect(),
    limtStage=$stage.getBoundingClientRect()


    
    
   // console.log(e.keyCode)
    switch (e.keyCode) {
        //izquierda
        case 37:
            
          if(limtBall.left>limtStage.left){
              x--
          e.preventDefault()
          }
        break;
        //arriba
        case 38:
            
            if(limtBall.top>limtStage.top){
                e.preventDefault()
                y--
            }
        break;
        //derecha
        case 39:
            
            if(limtBall.right<limtStage.right){
                e.preventDefault()
                x++
            }
        break;
        //abajo
        case 40:
            
            if(limtBall.bottom<limtStage.bottom){
                e.preventDefault()
                y++
            }
        break;
    
        default:
            break;
            
    }
    $ball.style.transform =`translate(${x*10}px,${y*10}px)`
    
}