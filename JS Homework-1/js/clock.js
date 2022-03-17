let name = prompt("Adınızı Giriniz")
let myName = document.querySelector("#myName")
myName.innerHTML = `${name}`
let turkce = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi","Pazar"];



let clock_and_day = document.querySelector("#myClock")




function clock() {
    const today = new Date()
    let day = today.getDay()
    let h = today.getHours().toString().padStart(2,"0")
    let m = today.getMinutes().toString().padStart(2,"0")
    let s = today.getSeconds().toString().padStart(2,"0")
    clock_and_day.innerText = `${h}:${m}:${s} ${turkce.at(day-1)}`
}

clock()
setInterval(clock, 1000)