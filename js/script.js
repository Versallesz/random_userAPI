var contenido = document.querySelector('#contenido');

function traer(){
    fetch('https://randomuser.me/api/')
    .then(res => res.json()) //los datos se traeran en JSON
    .then(data => {
        console.log(data.results['0'])
        contenido.innerHTML = `
        <img src="${data.results[0].picture.large}" class="img-fluid rounded-circle" width="100px">
        <p>Nombre: ${data.results[0].name.first}` + ` ` + `${data.results['0'].name.last}</p>` 
        
    })
}

/*console.log(data.results) -> nos trae el array 
completo con la información
*/