document.addEventListener('DOMContentLoaded', () => {
    addDiv('content')
})

function addDiv(name, title) {
    let b = document.body
    let newDiv = document.createElement('div')
    newDiv.setAttribute('class', `${name}`)

    b.prepend(newDiv)

    newDiv.appendChild()
}

function addH2(name) {
    let body = document.querySelector('div')

    
}
