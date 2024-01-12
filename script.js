// this code for hold the toggle class in const
const toggles=document.querySelectorAll('.faq-toggle')

// when we click the toggles box it will be active
toggles.forEach(toggle=>{
    toggle.addEventListener('click',()=>{
        toggle.parentNode.classList.toggle('active')
    })
})