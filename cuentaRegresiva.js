

export default function cuentaRegresiva(contador,fechaV,mensajeFinal){
    const $contador=document.getElementById(contador),
     $fecha=new Date(fechaV).getTime()

     let tempo;
     tempo=setInterval(() => {
         
        let now=new Date().getTime()
        let dif=$fecha-now,

        days=Math.floor(dif/(1000*60*60*24)),
        hours=("0"+Math.floor(dif %(1000*60*60*24)/(1000*60*60))).slice(-2) ,
        minuts=("0"+Math.floor(dif %(1000*60*60)/(1000*60))).slice(-2),        
        seconds=("0"+Math.floor(dif %(1000*60)/(1000))).slice(-2)
        
        
        $contador.innerHTML=`<h3>Faltan ${days} dias,${hours} horas,${minuts} minutos,${seconds} segundos</h3>`
        
        if(dif < 0){
            clearInterval(tempo)
            $contador.innerHTML=`<h3>${mensajeFinal}<h3>`
         }
         
     }, 1000);


     
}