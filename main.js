const catalog = document.getElementById('catalog')
const health = document.getElementById('health')
const beauty = document.getElementById('beauty')
const entertainment = document.getElementById('entertainment')
const cars = document.getElementById('cars')
const contentHeader = document.getElementById('contentHeader')
const menu = document.querySelector('#menu')
const burger = document.getElementById('burgerMenu')
const sidebar = document.querySelector('#sidebar')
const sidebarOpened = document.querySelector('.sidebar__items')
const sidebarHeader = document.getElementById('sidebarHeader')


const elements = [catalog, health, beauty, entertainment, cars]

let previousElement;
let selectedElement;

elements.map(item => {
    item.addEventListener('click', () => {
        if(item.style.color !== 'rgb(52, 171, 224)'){
            if(!selectedElement){
                selectedElement = item
            }else if (selectedElement !== item) {
                previousElement = selectedElement
                let prevId = previousElement.id
                previousElement.childNodes[1].src = `./images/icons/default/${prevId}.svg`
                previousElement.style.color = ''
                previousElement.childNodes[1].style.borderLeft = 'none'
                selectedElement = item
            }
            item.childNodes[1].src = `./images/icons/active/${String(item.id)}.svg`
            item.childNodes[1].style.borderLeft = '3px solid rgb(52, 171, 224)'
            item.style.color = 'rgb(52, 171, 224)'
            contentHeader.textContent = item.textContent
        }
    })
})

function show(){
    sidebar.classList.toggle('active')
    sidebarOpened.classList.toggle('activeItems')
    elements.map(item => item.classList.toggle('itemActive'))
    sidebarHeader.classList.toggle('activeHeader')
    burger.classList.toggle('activeBurger')
    if(!burger.classList.value){
        burger.src = './images/icons/menu/burger_menu.svg'
    }else{
        burger.src = './images/icons/menu/menu_exit.svg'
    }

}

