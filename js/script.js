var contenido = document.querySelector('#contenido');

function traer(){
    fetch('texto.txt')
    .then(data => data.text())
    .then(data => {
        contenido.innerHTML = `${data}`
    })
}