const d=document,
n=navigator

export default function geolocalizacion(id){

const $geo=d.getElementById(id),
options={
    timeout:5000,

}


const localisacion=(position)=>{

let pos=position.coords

$geo.innerHTML=`
<p>Tu posición actual es:</p>
<ul>
<li>Latidud:<b>${pos.latitude}</b></li>
<li>Longitud:<b>${pos.longitude}</b></li>
<li>Presición:<b>${pos.accuracy}</b>metros</li>
</ul>
<a href="https://www.google.com/maps/@${pos.latitude},${pos.longitude},
20z" target="_blanck" reel="noopener">Ver ubicación en maps</a>
`

}
const error=(err)=>{

    $geo.innerHTML=`<p><mark>Error ${err.code}:${err.message}</mark></p>`
    console.log(err)
}

n.geolocation.getCurrentPosition(localisacion,error,options)
}