import cuentaRegresiva from "./cuentaRegresiva.js";
import userDeviceInfo from "./deteccion-dispositivos.js";
import estadoRed from "./deteccion-red.js";
import deteccionWebcam from "./deteccion-webcam.js";
import diseñoResponsivo from "./diseñoResponsivo.js";
import hamburguesa from "./menu.js";
import modoOscuro from "./modo-oscuro.js";
import{digitalClock,alarm} from "./reloj.js";
import responsiveTester from "./responsive-tester.js";
import scrolButon from "./scrol.js";
import{caja,moveBall} from "./teclado.js";
import geolocalizacion from "./geolocalizacion.js";
import buscador from "./buscador.js";
import sorteo from "./sorteo.js";
import carrusel from "./responsive-slider.js";
import scroolSpy from "./scrool-espia.js";
import smartVideo from "./video-inteligente.js";
import formulario from "./validaciones_formulario.js";
import narrador from "./narrador.js";



document.addEventListener("DOMContentLoaded",(e)=>{
    hamburguesa(".panel-btn",".panel",".menu a")
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj")
    alarm("/alarm-clock.mp3","#activar-alarma","#desactivar-alarma")
    cuentaRegresiva("countDown","04 25 2021 00:00:00","Feliz Cumple Eze")
    scrolButon(".scroll")

    diseñoResponsivo("video1",
    `(min-width:800px)`,
    `<a href="https://www.youtube.com/watch?v=ss05HQ-kG44" target="_blanck"
    reel="noopener">Escuchar La Vela Puerca en Youtube</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/ss05HQ-kG44" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    diseñoResponsivo("video2",
    `(min-width:800px)`,
    `<a href="https://www.youtube.com/watch?v=pXRviuL6vMY" target="_blanck"
    reel="noopener">Escuchar 21 Pilots en Youtube</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/pXRviuL6vMY" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    
    responsiveTester("diseño-responsivo-form")
    userDeviceInfo("user-device")
    deteccionWebcam("webcam")
    geolocalizacion("geolocation")
    buscador(".buscador",".card")
    sorteo("#btn",".player")
    carrusel()//funciona masomenos
    scroolSpy()
    smartVideo()
    formulario()
    
    
})


document.addEventListener("keydown",(e)=>{
    caja(e)
    moveBall(e,".ball",".stage")
})


modoOscuro(".modo-oscuro","dark-mode")
estadoRed()
narrador()

