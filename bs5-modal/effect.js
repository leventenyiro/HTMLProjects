function showModal() {
    let myModal = new bootstrap.Modal(document.getElementById('exampleModal'))

    myModal.show()
    
    setTimeout(() => {
        myModal.hide()
    }, 2000)
}