document.addEventListener('DOMContentLoaded', () => { 

    const btnTema = document.querySelector('#btnTema')
    const btnBarras = document.querySelector('#btnBarras');
    const btnCerrar = document.querySelector('#btnCerrar');
    const body = document.querySelector('#body');
    const menu = document.querySelector('.menu');

    btnTema.addEventListener('click',function(){
        body.classList.toggle('temaSecundario');
    })
    btnBarras.addEventListener('click',function (){
        menu.classList.toggle('mostrar');
        
    })
    btnCerrar.addEventListener('click',function (){
        menu.classList.toggle('mostrar');
        
    })
});