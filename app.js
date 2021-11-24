// Variables
const firstTxt = document.querySelector('#firstTxt'); // Aca me taigo el input
const txtChange = document.querySelector('#txt-change'); // Aca me traigo el span o donde va el nombre ingresado
const addBtn = document.querySelector('#addBtn');



eventListeners(); // Llamo a los escuchadores para que me carguen de una mis funciones primarias

function eventListeners() {
    /* Aca adentro va todo lo que quiero que se ejecute al cargar la pagina por la primera vez mas, que todo los que esperan que se ejecute algo como accionar un input o un boton*/
    firstTxt.addEventListener('blur', validacionInput);
}

// Funciones 
function validacionInput(e) {
    txtChange.textContent = e.target.value;
}

// Inyectando clases desde Js al HTML
// addBtn.classList.add('d-none');