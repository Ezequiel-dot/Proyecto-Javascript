const d=document,
w=window


export default function narrador(){
    const $select=d.getElementById("speech-select"),
        $text=d.getElementById("speech-text"),
        $btn=d.getElementById("speech-btn"),
        message= new SpeechSynthesisUtterance();

    let voz=[]

    d.addEventListener("DOMContentLoaded",(e)=>{
        speechSynthesis.addEventListener("voiceschanged",(e)=>{
            voz=speechSynthesis.getVoices()
            //console.log(voz)

            voz.forEach((v)=>{
                const $option=d.createElement("option")
                $option.value=v.name
                $option.textContent=`${v.name}-${v.lang}`

                $select.appendChild($option)
            })

        })
    })
    d.addEventListener("change",(e)=>{
        if(e.target===$select){
            message.voice=voz.find((voice)=>
            voice.name===e.target.value)
        }
        console.log(message)
    })
    d.addEventListener("click",(e)=>{
        if(e.target===$btn){
            message.text=$text.value

            speechSynthesis.speak(message)
        }
    })

}