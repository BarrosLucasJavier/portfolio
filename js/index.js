document.addEventListener('DOMContentLoaded', () => { 

    /* Proyectos */
    let items = document.querySelectorAll('.seccionProyectos .fondoProyectos .fondo');
    let sig = document.getElementById('sig');
    let prev = document.getElementById('prev');
    let miniaturas = document.querySelectorAll('.miniaturas .item');
    
    let cantidadItems = items.length;
    let itemActivo = 0;

    sig.onclick = function(){
        itemActivo = itemActivo + 1;
        if (itemActivo >= cantidadItems) {
            itemActivo = 0;
        }
        mostrarProyectos();
    }
    prev.onclick = function(){
        itemActivo = itemActivo - 1;
        if (itemActivo < 0) {
            itemActivo = cantidadItems - 1;
        }
        mostrarProyectos();
    }
    let intervaloRefresco = setInterval(()=>{
        sig.click();
    },5000)
    function mostrarProyectos(){
        let itemActivoViejo = document.querySelector('.seccionProyectos .fondoProyectos .fondo.activo');
        let miniaturaActivaVieja = document.querySelector('.miniaturas .item.activo');
        
        itemActivoViejo.classList.remove('activo');
        miniaturaActivaVieja.classList.remove('activo');

        items[itemActivo].classList.add('activo');
        miniaturas[itemActivo].classList.add('activo');   

        let limite = miniaturas[itemActivo].getBoundingClientRect().y;
        if (limite < 600 && limite > 400) {
            miniaturas[itemActivo].scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }

        clearInterval(intervaloRefresco);
        intervaloRefresco = setInterval(()=>{
            sig.click();
        },5000)
    }

    miniaturas.forEach((miniatura, indice)=>{
        miniatura.addEventListener('click',()=>{
            itemActivo = indice;
            mostrarProyectos();
        });
    })

    /* tema */
    
    const btnTema = document.querySelector('#btnTema')
    const btnBarras = document.querySelector('#btnBarras');
    const btnCerrar = document.querySelector('#btnCerrar');
    const body = document.querySelector('#body');
    
    btnTema.addEventListener('click',function(){
        body.classList.toggle('temaSecundario');
    })
    btnBarras.addEventListener('click',function (){
        menu.classList.toggle('mostrar');
        
    })
    /* Menu */
    const menu = document.querySelector('.menu');
    const nav = document.getElementById('menuUl');
    console.log(nav);
    
    btnCerrar.addEventListener('click',function (){
        menu.classList.toggle('mostrar');
        
    })
    nav.addEventListener('click',()=>{
        menu.classList.toggle('mostrar');
    })

});