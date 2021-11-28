// Variables
const firstTxt = document.querySelector('#firstTxt'); // Aca me taigo el input
const txtChange = document.querySelector('#txt-change'); // Aca me traigo el span o donde va el nombre ingresado
const greeting = document.querySelector('#greeting'); // Este lo traigo oculto para luego cambiarle la clase nada mas
const addBtn = document.querySelector('#addBtn');

eventListeners(); // Llamo a los escuchadores para que me carguen de una mis funciones primarias

function eventListeners() {
    /* Aca adentro va todo lo que quiero que se ejecute al cargar la pagina por la primera vez mas, que todo los que esperan que se ejecute algo como accionar un input o un boton*/
    firstTxt.addEventListener('input', validacionInput);
}

// Inyectando clases desde Js al HTML
addBtn.classList.add('d-none');

// Funciones

function validacionInput(e) {
    
    txtChange.textContent = e.target.value;

    if(firstTxt.value != '') {
        showGreeting();
    } else {  
        hideGreeting();
    }
    
}

function hideGreeting() {
    greeting.classList.remove('showGreeting');
    greeting.classList.add('hideGreeting')
} 
    
function showGreeting() {
    greeting.classList.remove('hideGreeting');
    greeting.classList.add('showGreeting');
}   
