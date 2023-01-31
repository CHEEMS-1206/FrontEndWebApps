let minHand = document.getElementById("minuteHand")
let secHand = document.getElementById("secHand")
let hourHand = document.getElementById("hourHand")
let s = 180
let m =180
let h =180

let setHr = document.getElementById("HOUR")
let setMin = document.getElementById("MINUTE")
let setButton = document.getElementById("set")
let setDefault = document.getElementById("defaultTime")

setDefault.addEventListener("click",defaultTime)

function defaultTime(){
let defTime = new Date
    h =180+ defTime.getHours()*30
    m = 180+ defTime.getMinutes()*6
    hourHand.style.cssText = `transform: rotate(${h}deg)`
    minHand.style.cssText = `transform: rotate(${m}deg)`
}
defaultTime()

setInterval(incrementSeconds,1000)
setButton.addEventListener("click",function(){
    if(setMin.value >59){
        alert("Minutes can't exceed 59.")
        m = 180
    }
    else if(setHr.value >24){
        alert("Hours can't exceed 24.")
    }
    else{
        h =180 + (30 *setHr.value)
        setHr.value = "-"
        m = 180 + (6*setMin.value)
        setMin.value = "-"
        console.log(h)
        console.log(m)
        hourHand.style.cssText = `transform: rotate(${h}deg)`
        minHand.style.cssText = `transform: rotate(${m}deg)`
    }
})

function incrementSeconds(){
    if(s==540){
        s=180
        if(m==540){
            m=180
            if(h>=540){
                h=180
            }
            else
            h+=6
            hourHand.style.cssText = `transform: rotate(${h}deg)`
        }
        else
        m+=6
        minHand.style.cssText = `transform: rotate(${m}deg)`
    }
    s+=6;
    secHand.style.cssText = `transform: rotate(${s}deg)`
}