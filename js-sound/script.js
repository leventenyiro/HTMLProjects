shore("shore_sound.mp3")

function shore(filename) {
    let audioObj = new Audio(filename)
    audioObj.play()
    audioObj.onended = () => {
        shore(filename)
    }
}

