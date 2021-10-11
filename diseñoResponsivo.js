

export default function diseñoResponsivo(id,mq,mobileContent,desktopContent){


    let breakpoint = window.matchMedia(mq)

    const responsive=(e)=>{
        if(e.matches){
            document.getElementById(id).innerHTML=desktopContent
        }else{
            document.getElementById(id).innerHTML=mobileContent
        }
      //  console.log(e.matches)
    }

    breakpoint.addListener(responsive)
    responsive(breakpoint)

}