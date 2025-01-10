document.addEventListener('DOMContentLoaded', () => {

    /* tema */

    const btnTema = document.querySelector('#btnTema')
    const body = document.querySelector('#body');
    
    btnTema.addEventListener('click',function(){
        body.classList.toggle('temaSecundario');
    })
    /* menu activo */
    const menuOptions = document.querySelectorAll('.menuItem');
    const callback = (entries, observer)=>{
        entries.forEach(entry =>{
            if (entry.isIntersecting) {
                menuOptions.forEach((option)=>{
                    const soloDireccion = option.href.substring(menuOptions[0].href.indexOf('#') + 1);
                    if (soloDireccion == entry.target.id) {
                        option.classList.add('activo')
                    } else {
                        option.classList.remove('activo')
                    }
                })
            }
        });
    }
    const options = {
        root:null,
        rootMargin:'0px',
        threshold:0.2
    }
    const observer = new IntersectionObserver(callback,options);

    const sections = document.querySelectorAll('section')
    sections.forEach(section => observer.observe(section))

    /* correo */
    const formulario = document.getElementById('formContacto');
    const mensaje = document.getElementById('mensaje');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');

    formulario.addEventListener('submit',(e)=>{
        e.preventDefault();
        const params = {
            user_name: nombre.value,
            user_email: email.value,
            message: mensaje.value
        }
        emailjs.send('service_byid9rp','template_i898a0a', params ).then(function(response){
            console.log('Enviado !!', response.status, response.text);
            nombre.value = '';
            email.value = '';
            mensaje.value = '';
        },function(error){
            console.log('Error', error);
        })
    });

    /*  */
});