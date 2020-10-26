import list from './menu.json';
import menu from './tamplate/module.handlebars';
import './styles.css';

const refs = {
    body: document.querySelector('body'),
    mainList: document.querySelector('.js-menu'),
    mainInput: document.querySelector('.theme-switch__toggle'),
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

list.forEach(el => {
    refs.mainList.innerHTML += menu(el)
})

refs.body.classList.add(Theme.LIGHT)

refs.mainInput.addEventListener('change', () => {
    
    refs.body.classList.toggle(Theme.LIGHT)
    refs.body.classList.toggle(Theme.DARK)
    localStorage.setItem('key', refs.body.classList)
    
})

if (localStorage.getItem('key') === Theme.DARK) {
    refs.mainInput.checked = true
    refs.body.classList.add(Theme.DARK)
    refs.body.classList.remove(Theme.LIGHT)
}
else {
    refs.mainInput.checked = false
    refs.body.classList.add(Theme.LIGHT)
}




