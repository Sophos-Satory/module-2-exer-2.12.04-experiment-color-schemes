'use strict';

// VARIABLES
const formRadio = document.querySelector('.js_form_radio');
const bodyCSS = document.querySelector('.body');
let colorScheme = localStorage.getItem('colorScheme');

//
//
// CAMBIAR EL COLOR DE LA PÁGINA.
//
//

//
// FUNCIONES
//

// Función que cambia el esquema de color al cargar la página.
function selectColorSchemeIni() {
  let radioIdSelect = '';
  if (colorScheme === null) {
    radioIdSelect = 'radio003';
  } else if (colorScheme === 'radio001') {
    radioIdSelect = 'radio001';
  } else if (colorScheme === 'radio002') {
    radioIdSelect = 'radio002';
  } else {
    radioIdSelect = 'radio003';
  }
  const radioIdChange = radioIdSelect;
  changeColorScheme(radioIdChange);
}

// Función que selecciona el esquema color por radioButtons.
function selectColorScheme(event) {
  const radioIdSelect = event.target.id;
  const radioIdChange = radioIdSelect;

  return radioIdChange;
}

// Función que cambia el esquema de color.
function changeColorScheme(radioIdChange) {
  bodyCSS.classList.remove('light');
  bodyCSS.classList.remove('dark');
  bodyCSS.classList.remove('cute');

  if (radioIdChange === 'radio001') {
    bodyCSS.classList.add('light');
  } else if (radioIdChange === 'radio002') {
    bodyCSS.classList.add('dark');
  } else {
    bodyCSS.classList.add('cute');
  }

  const radioIdSave = radioIdChange;
  return radioIdSave;
}

// Función que guarda el esquema de color en localStorage.
function saveColorScheme(radioIdSave) {
  colorScheme = radioIdSave;
  localStorage.setItem('colorScheme', `${colorScheme}`);
}

// Función manejadora:
// Llama a la función que selecciona el esquema de color.
// Llama a la función que cambia el esquema de color según localStorage o el evento de click en un radioButton.
// Llama a la función que guarda el esquema de color en localStorage.
function handleClickColor(event) {
  const radioIdChange = selectColorScheme(event);
  const radioIdSave = changeColorScheme(radioIdChange);
  saveColorScheme(radioIdSave);
}

//
// EVENTOS INTERACTIVOS DE LE USUARIE
//

// Escuchamos al elemento "form" del HTML.
// Llamamos a la función manejadora.
formRadio.addEventListener('click', handleClickColor);

//
// EVENTOS AL CARGAR LA PÁGINA
//

// Llamada a la función que cambia el esquema de color al cargar la página.
selectColorSchemeIni();
