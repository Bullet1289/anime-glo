const modal = document.querySelector(".search-model")

const modalBtn = document.querySelector(".icon_search")

const modalClose = modal.querySelector('.search-close-switch')
console.log(modalClose);

const search = document.querySelector("#search-input")

console.log(search.value);
modalBtn.addEventListener('click', () => {
    modal.style.display = 'block'

    console.log('click'); 
})

modalClose.addEventListener('click', () => {
    modal.style.display = 'none'

    console.log('click'); 
})

search.addEventListener('click', () => {
    

    console.log('click22'); 
})

