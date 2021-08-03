const viewportHeader = document.querySelector(".viewport-header")

var i = 1
document.onscroll = () => {
    var innerHeight = window.innerHeight
    var pageYOffset = window.pageYOffset
    var opacity = (innerHeight - pageYOffset * 2) / window.innerHeight

    var scale = (innerHeight - pageYOffset) / window.innerHeight

    console.log(`${i++}.`)
    console.log(`innerHeight: ${window.innerHeight}, pageOffset: ${window.pageYOffset}, opacity: ${scale}`)
    

    document.documentElement.style.setProperty('--headerOpacity', opacity)
    document.documentElement.style.setProperty('--headerScale', scale)
}