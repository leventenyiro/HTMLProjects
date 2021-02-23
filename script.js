var inputText = document.getElementById('inputText')


document.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        alert(inputText.value)
    }
})