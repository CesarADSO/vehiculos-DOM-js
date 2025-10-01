# Proyecto Carrito de Vehículos

Este repositorio contiene un proyecto web interactivo que permite **gestionar vehículos** (agregar, listar y eliminar) y añadirlos a un **carrito de compras dinámico** con persistencia en `localStorage`. Está desarrollado en **HTML, CSS y JavaScript puro**, pensado para practicar el manejo del DOM, eventos y almacenamiento local.

---

## Descripción del Proyecto

El objetivo principal es crear una aplicación sencilla pero completa que simule un sistema de compra de vehículos. El usuario puede:

* Registrar nuevos vehículos mediante un formulario.
* Visualizar las tarjetas de los vehículos en pantalla.
* Agregar vehículos al carrito de compras.
* Calcular el total automáticamente.
* Eliminar vehículos tanto del inventario como del carrito.
* Mantener la información incluso al recargar la página gracias al uso de `localStorage`.

---

## Funcionalidades

* **Agregar Vehículos**:
  Se llena un formulario con datos como foto, nombre, marca, modelo, kilometraje y precio. Si la foto no se proporciona, se asigna una imagen por defecto.

* **Renderizado Dinámico**:
  Las tarjetas de vehículos se generan dinámicamente y se guardan en `localStorage` para persistir tras recargar la aplicación.

* **Interactividad con Botones**:

  * Botón verde: agrega el vehículo al carrito.
  * Botón rojo: elimina el vehículo del inventario.

* **Carrito de Compras**:

  * Los productos añadidos aparecen en un panel lateral y en una tabla.
  * Se calcula y actualiza el **total** en tiempo real.
  * Cada producto en el carrito puede eliminarse individualmente.

* **Persistencia de Datos**:
  Tanto el inventario como el carrito se almacenan en `localStorage`, garantizando que la información no se pierda al recargar la página.

---

## Tecnologías Utilizadas

* **HTML5** → Estructura de la interfaz.
* **CSS3 + Bootstrap** → Estilos y maquetación responsiva.
* **JavaScript (Vanilla JS)** → Manipulación del DOM, eventos y `localStorage`.

---

## Estructura del Repositorio

```
carrito-vehiculos
 ├── index.html
 ├── carro.html
 ├── styles.css
 ├── styles-carros.css
 ├── main.js
 ├── carros.js
 └── README.md
```

---

## Conceptos Aplicados

* Uso de **event listeners** (`addEventListener`).
* Creación dinámica de elementos del DOM (`createElement`).
* Gestión de información con **objetos y arreglos**.
* **Persistencia** con `localStorage`.
* Manejo de **formularios** y validaciones.
* Cálculos dinámicos para obtener el total del carrito.

---

## Contribuciones

Las contribuciones son bienvenidas. Para colaborar:

1. Haz un fork del repositorio.
2. Crea tu rama de trabajo (`git checkout -b mi-rama`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agregué nueva funcionalidad'`).
4. Envía un pull request.

---

## Contacto

Si deseas conectar conmigo, puedes hacerlo a través de:

* GitHub: [Tu perfil aquí]
* LinkedIn: [Tu perfil aquí]
* Correo: [Tu correo aquí]

---

Este proyecto fue desarrollado con fines educativos, ideal para reforzar conceptos de manipulación del DOM, almacenamiento local y lógica de JavaScript.
