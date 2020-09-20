document.addEventListener('DOMContentLoaded', () => {
    addDiv('content')
    addDiv('menu dark-grey')
})

function addDiv(name) {
    let b = document.body
    let newDiv = document.createElement('div')
    newDiv.setAttribute('class', `${name}`)

    b.prepend(newDiv)
}

function addH2(name) {
    let body = document.querySelector('div')
}
