const notif=document.getElementById("notif");
const voirCREATEUR=document.getElementById("voirCREATEUR");
const cashtout=document.getElementById("cashtout")
const carousel=document.getElementById("carousel")
voirCREATEUR.addEventListener("click",()=>{
    carousel.style.display="none"
    document.getElementById("camion").style.display="block"
    voirCREATEUR.addEventListener("click",()=>{
        carousel.style.display="block"
        document.getElementById("camion").style.display="none"
    })
})
notif.addEventListener("click",()=>{
    carousel.style.display="none"
    document.getElementById("notif1").style.display="block"
})
const ok =document.getElementById("ok")
ok.addEventListener("click",()=>{
    carousel.style.display="block"
    document.getElementById("notif1").style.display="none"
    
})
