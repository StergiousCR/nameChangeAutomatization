// Variables
const firstTxt = document.querySelector('#firstTxt'); // Aca me taigo el input
const personName = document.querySelector('#person-name'); // Aca me traigo el span o donde va el nombre ingresado
const greeting = document.querySelector('#greeting'); // Este lo traigo oculto para luego cambiarle la clase nada mas
const addBtn = document.querySelector('#addBtn');

// Variables para debounce
const validacionDebounced = debounce(validacionInput, 1000);

eventListeners(); // Llamo a los escuchadores para que me carguen de una mis funciones primarias

function eventListeners() {
    /* Aca adentro va todo lo que quiero que se ejecute al cargar la pagina por la primera vez mas, que todo los que esperan que se ejecute algo como accionar un input o un boton*/
    firstTxt.addEventListener('input', validacionDebounced);
}

// Inyectando clases desde Js al HTML
addBtn.classList.add('d-none');

// Funciones

function validacionInput(e) {
    
    personName.textContent = e.target.value;

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

// funciones genericas
// Funcion DEBOUNCE 
// Se va a crear una funcion que se pueda usr muchas veces por eso hay que pasar de parametro la funcion que se ocupa

function debounce(func, timeout){ // aca recibe el parametro del nombre de la funcion y luego el timer, esto para poder controlar desde que se declara hasta el timer

    let timeoutID; // Aca creamos el ID para reconocer cuantas veces se ha aplicado la funcion y se reinicie y vuelva al inicio

    return function() {
        if(timeoutID) {
            clearTimeout(timeoutID);
        }
        const context = this;
        const args = arguments;
        timeoutID = setTimeout( () => {
            func.apply(context, args)
        }, timeout)
    } 


    // return (...args) => {
    //   clearTimeout(timeoutID);
    //   timeoutID = setTimeout(() => { func.apply(this, args); }, timeout);
    // };

}

