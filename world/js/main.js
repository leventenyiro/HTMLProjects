//const viewportHeader = document.querySelector(".viewport-header")
window.addEventListener("scroll", () => {
    //var innerHeight = window.innerHeight
    //var pageYOffset = window.pageYOffset
    //var opacity = (innerHeight - pageYOffset * 2) / window.innerHeight

    //var scale = (innerHeight - pageYOffset) / window.innerHeight

    //console.log(`${i++}.`)
    //console.log(`innerHeight: ${window.innerHeight}, pageOffset: ${window.pageYOffset}, opacity: ${scale}`)

    //var opacity = 1 - pageYOffset / 300

    //document.documentElement.style.setProperty('--headerOpacity', opacity)

    //document.documentElement.style.setProperty('--headerScale', scale)

    //var viewportHeader = document.getElementsByClassName("viewport-header")[0]
    //console.log(viewportHeader.getAttribute("checkpoint"))
    var scrollFadeOut = document.getElementsByClassName("scrollFadeOut")

    Array.prototype.forEach.call(scrollFadeOut, e => {
        e.style.opacity = 1 - window.pageYOffset / e.getAttribute("checkpoint")
    })
    

})