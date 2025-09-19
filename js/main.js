

const form = document.getElementById('vehiculo-form');
const contenedor = document.getElementById('contenedor-tarjetas');
const addBtn = document.getElementById('agregar-vehiculo');


form.addEventListener('submit', (e) => {


    e.preventDefault();

    

    const valorFoto = document.getElementById('foto-input').value;
    const valorNombre = document.getElementById('nombre-input').value;
    const valorMarca = document.getElementById('marca-input').value;
    const valorModelo = document.getElementById('modelo-input').value;
    const valorKm = document.getElementById('kilometraje-input').value;
    const valorPrecio = document.getElementById('precio-input').value;

    if (valorFoto == "" || valorNombre == "" || valorMarca == "" || valorModelo == "" || valorKm == "" || valorPrecio == "") {
        alert('Por favor es obligatorio llenar todos los campos que están en la interfaz');
    }

});


function createVehiculoCard(valorFoto, valorNombre, valorMarca, valorModelo, valorKm, valorPrecio) {

    const col = document.createElement('div');
    col.classList.add('col-md-6', 'item-vehiculo');

    const card = document.createElement('div');
    card.classList.add('card', 'h-100');

    const imagen = document.createElement('img');
    imagen.classList.add('card-img-top', 'w-100');
    imagen.setAttribute('src', valorFoto);
    imagen.setAttribute('alt', 'Foto vehiculo');

    const cuerpoTarjeta = document.createElement('div');
    cuerpoTarjeta.classList.add('card-body');

    const h3 = document.createElement('h3');
    h3.classList.add('card-title');
    h3.textContent = valorNombre;

    const h4 = document.createElement('h4');
    h4.classList.add('card-subtitle', 'text-muted');
    h4.textContent = valorMarca;

    const segundoH4 = document.createElement('h4');
    segundoH4.classList.add('card-text');
    segundoH4.textContent = valorModelo;

    const tercerH4 = document.createElement('h4');
    tercerH4.classList.add('card-text');
    tercerH4.textContent = valorKm;

    const h2 = document.createElement('h2');
    h2.classList.add('text-success');
    h2.textContent = valorPrecio;

    const contenedorBtns = document.createElement('div');
    contenedorBtns.classList.add('d-flex', 'justify-content-between', 'mt-3');

    const boton1 = document.createElement('button');
    boton1.classList.add('btn', 'btn-success');
    boton1.textContent = 'Comprar'

    const boton2 = document.createElement('button');
    boton2.classList.add('btn', 'btn-danger');
    boton2.textContent = 'Eliminar'



    col.appendChild(card);

    card.appendChild(imagen);
    card.appendChild(cuerpoTarjeta);
    card.appendChild(contenedorBtns);

    cuerpoTarjeta.appendChild(h3);
    cuerpoTarjeta.appendChild(h4);
    cuerpoTarjeta.appendChild(segundoH4);
    cuerpoTarjeta.appendChild(tercerH4);
    cuerpoTarjeta.appendChild(h2);


    contenedorBtns.appendChild(boton1);
    contenedorBtns.appendChild(boton2);

    return col;


};



function addVehiculoCard(event) {
    addBtn.addEventListener('click', () => {
        const valorFoto = document.getElementById('foto-input').value;
        const valorNombre = document.getElementById('nombre-input').value;
        const valorMarca = document.getElementById('marca-input').value;
        const valorModelo = document.getElementById('modelo-input').value;
        const valorKm = document.getElementById('kilometraje-input').value;
        const valorPrecio = document.getElementById('precio-input').value;

        if (valorFoto == "" || valorNombre == "" || valorMarca == "" || valorModelo == "" || valorKm == "" || valorPrecio == "") {
            alert('Por favor es obligatorio llenar todos los campos que están en la interfaz');
        }
        else {
            const nuevaTarjeta = createVehiculoCard(valorFoto, valorNombre, valorMarca, valorModelo, valorKm, valorPrecio);
            contenedor.appendChild(nuevaTarjeta);
            eventsToVehiculo(nuevaTarjeta);

            form.reset();
        }
    });
};

addVehiculoCard();


function eventsToVehiculo(nuevaTarjeta) {
    const deleteBtn = nuevaTarjeta.querySelector('.btn-danger');

    deleteBtn.addEventListener('click', () => {
        nuevaTarjeta.remove();
    });

    const shopBtn = nuevaTarjeta.querySelector('.btn-success');

    shopBtn.addEventListener('click', () => {
        alert('Has comprado nuestro vehículo');
    })

}

