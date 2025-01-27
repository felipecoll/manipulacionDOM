// const titulo = document.querySelector("h1")

// titulo.textContent = "Soy el nuevo titulo"

// Otra manera

//title.innerText = "Otra forma de colocar el titulo"

// =====================================================

// const title = document.querySelector("h1")  

// title.style.color = 'red'

// const menu = document.querySelector(".menu")

// menu.style.backgroundColor = 'red'    

// menu.className ="main-menu"

// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//     menu.classList.toggle('invisible')
// })

// Seleccionamos el elemento con la clase 'container' del DOM y lo guardamos en la variable 'container'
const container = document.querySelector(`.container`);

// Seleccionamos el primer botón encontrado en el DOM y lo guardamos en la variable 'button'
const button = document.querySelector(`button`);

// **Agregar Event Listener para 'mouseover'** 
// Cuando el mouse pasa sobre el contenedor, el fondo cambia a color rosa.
container.addEventListener(`mouseover`, () => {
    container.style.backgroundColor = "pink"; // Cambiamos el color del fondo a rosa.
});

// **Agregar Event Listener para 'mouseout'** 
// Cuando el mouse sale del contenedor, el fondo vuelve a cambiar a rojo.
container.addEventListener("mouseout", () => {
    container.style.backgroundColor = "red"; // Cambiamos el color del fondo a rojo.
});


// button.addEventListener("click", () => {
//     alert("Presionaste el Boton o= no lo hagas!!");
// });

// **Manejador de evento de 'click' en el botón**
// Esta función muestra una alerta cuando se hace clic en el botón.
const buttonClickCallback = () => {
    alert("Button Clicked!");
};
// **Agregar Event Listener para 'click' en el botón**
// Asignamos el evento 'click' al botón que ejecutará 'buttonClickCallback' al hacer clic.
button.addEventListener("click", buttonClickCallback);

// **Eliminar Event Listener después de un tiempo** 
// Después de 5 segundos, eliminamos el event listener de 'click' del botón.
// Esto significa que después de ese tiempo, hacer clic en el botón no hará nada.
setTimeout(() => {
    button.removeEventListener("click", buttonClickCallback);
}, 5000);
