let btnThemeLight = document.querySelector('#btnThemeLight');
let btnThemeDark = document.querySelector('#btnThemeDark');

btnThemeLight.addEventListener('click', ()=> cambiarTema('light'));
btnThemeDark.addEventListener('click', ()=>cambiarTema('dark'));

function cambiarTema(color){
    console.log(color)
    //data-bd-theme = 'light/dark'
    document.querySelector('html').setAttribute('data-bs-theme', color);
}