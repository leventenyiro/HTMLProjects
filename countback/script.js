function countDown() {
    getInterval(),setInterval(() => getInterval(),1e3)
}

function getInterval() {
    let now = new Date
    let time = new Date(2021,7,3,21,0,0)
    let message = "Lejárt az időd 😢"
    if (now.getTime() < time.getTime()) {
        let difference = new Date(time.getTime() - now.getTime())
        //console.log(difference)
        let hours = 24 * (difference.getDate() - 1) + difference.getHours() - 1
        hours < 10 && (hours=`0${hours}`) // if in javascript
        let minutes = difference.getMinutes()
        minutes < 10 && (minutes=`0${minutes}`)
        let seconds = difference.getSeconds()
        seconds < 10 && (seconds=`0${seconds}`)

        message = `${hours}:${minutes}:${seconds}`
    }
    document.getElementById("countDown").innerHTML = message
}