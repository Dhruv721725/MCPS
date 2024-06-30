// changing nav bar styles on scroll
let nav=document.querySelector('nav')
let faqs=document.querySelectorAll('.faq')

window.addEventListener('scroll',()=>{
    let py=window.scrollY
    nav.classList.toggle("scrolled",py>0)
})

faqs.forEach(faq => {
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open')
        const icon=faq.querySelector('.plus')
        if (icon.getAttribute('src') =='./images/plus.ico'){
            icon.setAttribute('src','./images/minus.ico')
        }
        else{
            icon.setAttribute('src','./images/plus.ico')
        }
    })
});

// nav bar menu
let mbtnoff=document.querySelector('.menuoff')
let mbtnon=document.querySelector('.menuon')
let menu=document.querySelector('.nav_menu')
// let menuitems=document.querySelectorAll('.nav_menu')

mbtnoff.addEventListener('click',()=>{
    menu.style.display='flex';
    mbtnon.style.display='flex'
    mbtnoff.style.display='none'

})
mbtnon.addEventListener('click',()=>{
    menu.style.display='none';
    mbtnon.style.display='none'
    mbtnoff.style.display='flex'
})
