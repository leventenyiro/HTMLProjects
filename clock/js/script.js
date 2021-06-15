const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
var clockMode;

function switchClockMode() {
    let btn = document.getElementById("btnSwitchClockMode");
    if (btn.value == "old") {
        btn.innerHTML = "Switch to old mode";
        btn.value = "smooth";
        clearInterval(clockMode);
        smooth();
    } else {
        btn.innerHTML = "Switch to smooth mode";
        btn.value = "old";
        clearInterval(clockMode);
        old();
    }
}

// Old version
function old() {
    clockMode = setInterval(() => {
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;
    
        hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
    
        sc.style.transform = `rotateZ(${ss}deg)`;
    });
}


// Smooth version
function smooth() {
    clockMode = setInterval(() => {
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = (day.getMilliseconds() / 1000 + day.getSeconds()) * deg;
    
        hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
    }, 1)
}