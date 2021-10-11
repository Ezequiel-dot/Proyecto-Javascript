const d=document,
n=navigator

export default function deteccionWebcam(id){
    const $video = d.getElementById(id)

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices
        .getUserMedia({video:true,audio:false})
        .then((stream)=>{
            $video.srcObject=stream
            $video.play()
        })
        .catch((err)=>{
            $video.insertAdjacentHTML("beforebegin",`<p><mark>Ha sucedido el siguiente error,
            ${err}</mark></p>`)
           
        })
    }
}