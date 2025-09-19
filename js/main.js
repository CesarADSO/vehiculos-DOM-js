const { createElement } = require("react");

const form = document.getElementById('form-vehiculo');
const contenedor = document.getElementById('contenedor-tarjetas');

form.addEventListener('submit', (e) => {


    e.preventDefault();

    const valorFoto = document.getElementById('foto-input').value;
    const valorNombre = document.getElementById('nombre-input').value;
    const valorMarca = document.getElementById('marca-input').value;
    const valorModelo = document.getElementById('modelo-input').value;
    const valorKm = document.getElementById('kilometraje-input').value;
    const valorPrecio = document.getElementById('precio-input').value;

    if (valorFoto && valorNombre && valorMarca && valorModelo && valorKm && valorPrecio == "") {
        alert('Por favor es obligatorio llenar todos los campos que están en la interfaz');
    }
    else {

    }

});


function createVehiculoCard () {

    const col = createElement('div');
    col.classList.add('col-md-6', 'item-vehiculo');

    const card = createElement('div');
    card.classList.add('card', 'h-100');

    const imagen = createElement('img');
    imagen.classList.add('card-img-top', 'w-100');
    imagen.setAttribute('alt', 'Foto vehiculo');

    const cuerpoTarjeta = createElement('div');
    cuerpoTarjeta.classList.add('card-body');

    const h3 = createElement('h3');
    h3.classList.add('card-title');

    const h4 = createElement('h4');
    h4.classList.add('card-subtitle', 'text-muted');

    const segundoH4 = createElement('h4');
    segundoH4.classList.add('card-text');

    const tercerH4 = createElement('h4');
    tercerH4.classList.add('card-text');

    const h2 = createElement('h2');
    h2.classList.add('text-success');

    const contenedorBtns = createElement('div');
    contenedorBtns.classList.add('d-flex', 'justify-content-between', 'mt-3');

    const boton1 = createElement('button');
    boton1.classList.add('btn', 'btn-success');

    const boton2 = createElement('button');
    boton2.classList.add('btn', 'btn-danger');

    
    contenedor.appendChild(col);

    col.appendChild(card);

    card.appendChild(imagen);

    cuerpoTarjeta.appendChild(h3);
    cuerpoTarjeta.appendChild(h4);
    cuerpoTarjeta.appendChild(segundoH4);
    cuerpoTarjeta.appendChild(tercerH4);
    cuerpoTarjeta.appendChild(h2);


    contenedorBtns.appendChild(boton1);
    contenedorBtns.appendChild(boton2);

};