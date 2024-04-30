
window.addEventListener('DOMContentLoaded', () => {

    let formulario = document.querySelector('#formulario');
    //const modal = new bootstrap.Modal('#mostrarImagen');
    //let infoImagen = document.querySelector('#infoImagen');
    console.log('Se cargo el DOM')

    formulario.addEventListener('submit', (e) => {

        e.preventDefault();

        let url = document.querySelector('#ingreseUrl').value
        //atrapar url sin axios




        /* axios.post('http://localhost:3000/upload',{
            url
            
        })
        .then( response => {
            console.log('Salida de respuesta-->', response )

            if(response.status === 200){
                modal.toggle()
                infoImagen.innerHTML = `${response.data}`
            }else{
                modal.toggle()
                infoImagen.innerHTML = `<p>Lo sentimos la imágen no se pudo procesar</p>`
            }

        }) */
     console.log(url)
    })


})

