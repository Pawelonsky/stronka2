const burger = document.querySelector('.burger')
const nav = document.querySelector('.topbar__nav')
const topbar = document.querySelector('.topbar')

burger.addEventListener('click', () => {
    nav.classList.toggle('shownav')
})

const accordions = document.querySelectorAll('.accordion__item')
const content = document.querySelectorAll('.accordion__item-text')

accordions.forEach((accordion, index) => {
    accordion.addEventListener('click', () => {
      accordion.classList.toggle('open')
        if (accordion.classList.contains('open')) {
            accordion.querySelector('.plus').textContent = '-'
            content[index].classList.add('showtext')
        } else {
            content[index].classList.remove('showtext')
            accordion.querySelector('.plus').textContent = '+'
        } 
    })
})

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader')
    loader.classList.add('hidden')
    loader.addEventListener('transitionend', () => {
        document.body.removeChild()
    })
})

const toTop = document.querySelector('.to-top')

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 700) {
        toTop.classList.add('active')
    } else {
        toTop.classList.remove('active')
        
    }
})

let lastScrollY = window.scrollY

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 700) {
        if(lastScrollY < window.scrollY) {
            topbar.classList.add('hide-topbar')
        } else {
            topbar.classList.remove('hide-topbar')
        }
        lastScrollY = window.scrollY
    }
})

toTop.addEventListener('click', () => {
    window.scrollTo(0,0)
})







