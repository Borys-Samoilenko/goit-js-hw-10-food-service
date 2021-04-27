import './styles.css';
import menu from './menu.json';
import menuItemsTpl from './templates/menu-template.hbs';

console.log(menuItemsTpl);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const themeCheckbox = document.querySelector('#theme-switch-toggle');
themeCheckbox.addEventListener('change', onColorThemeChange);
const body = document.querySelector('body');

function onColorThemeChange() {
  if (themeCheckbox.checked === true) {
    if (body.classList.contains(Theme.LIGHT)) {
      body.classList.remove(Theme.LIGHT);
    }
    body.classList.add(Theme.DARK);
    themeCheckbox.setAttribute('checked', true);
    localStorage.setItem('theme', body.classList);
  } else {
    if (body.classList.contains(Theme.DARK)) {
      body.classList.remove(Theme.DARK);
    }
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', body.classList);
  }
}

if (localStorage.getItem('theme') === null) {
  localStorage.setItem('theme', Theme.LIGHT);
}
body.classList = localStorage.getItem('theme');
if (localStorage.getItem('theme') === Theme.DARK) {
  themeCheckbox.checked = true;
}
//template add
const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createMenuItemsMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuItemsMarkup(menuItemsInfo) {
  return menuItemsTpl(menuItemsInfo);
}
