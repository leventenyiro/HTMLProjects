function red() {
    document.getElementById("red").style.backgroundColor = "red";
    document.getElementById("yellow").style.backgroundColor = "gray";
}

function redYellow() {
    document.getElementById("yellow").style.backgroundColor = "yellow";
}

function green() {
    document.getElementById("red").style.backgroundColor = "gray";
    document.getElementById("yellow").style.backgroundColor = "gray";
    document.getElementById("green").style.backgroundColor = "green";
}

function yellow() {
    document.getElementById("yellow").style.backgroundColor = "yellow";
    document.getElementById("green").style.backgroundColor = "gray";
}

function light() {
    red();
    setTimeout(function() {
        redYellow();
        setTimeout(function() {
            green();
            setTimeout(function() {
                yellow();
                setTimeout(function() {
                    light();
                }, 500);
            }, 1000);
        }, 500);
    }, 1000);
}