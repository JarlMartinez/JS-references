
const p = document.querySelectorAll('.category p')
const li = document.querySelectorAll('.category li')
const input = document.querySelector('select')
const categories = Array.from(document.querySelectorAll('.category'))

li.forEach(li => li.addEventListener('click', show))

function show (ev) {
        // ev.path[1].children[1]).classList.toggle('shown')
    this.children[1].classList.toggle('shown')
    if(this.children[2])
        this.children[2].classList.toggle('shown')
    this.classList.toggle('color')
}

function display() {
    const categoryToDisplay = input.value
    categories.forEach(ea => {
        if(ea.classList.contains('showCate')) {
            ea.classList.remove('showCate')
        }
        if(ea.dataset['cat']  === categoryToDisplay){
            console.log(input.value)
            ea.classList.add('showCate')
        }
    })

}



    