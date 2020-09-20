document.addEventListener('DOMContentLoaded', () => {
    SupprClass('item')
})

function SupprClass(item) {
        var element = document.getElementsByClassName(item)
        compteur = compteur + 1
        if (element.innerHTML = 'cible 1') {
                element.classList.remove("light-grey")
                element.classList.add("pink")
                document.write(`<span class="compteur">${compteur}</span>`)
                console.log(element)
        }
        else if (element.innerHTML = 'cible 2') {
                element.classList.remove('light-grey')
                element.classList.add('red')
                document.write(`<span class="compteur">${compteur}</span`)
                console.log(element)
        }
}