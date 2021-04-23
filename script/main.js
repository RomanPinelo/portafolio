/* Obtenemos el elemento con el id main__menuButton en la vista de celulares*/ 
const menu = document.getElementById('main__menuButton');

menu.addEventListener('click', () => {
  document.getElementById('main__menuButton--options').classList.toggle('active');
  document.getElementById('bars').classList.toggle('noVisible');
  document.getElementById('equis').classList.toggle('Visible');
});

/* Configuración de la libreria de typed.js */
/* Presentación */
var typed = new Typed('#typed', {
  stringsElement: '#textStrings', // ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 75, // Velocidad en milisegundos para poner una letra,
  startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 75, // Velocidad en milisegundos para borrrar una letra.
  smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: true, // Mostrar cursor palpitanto
  cursorChar: '', // Caracter para el cursor
  contentType: 'html', // 'html' permite trabajar texto con formato (etiquetas HTML) como lo tenemos en
                        //strings o 'null' para texto sin formato, es decir si pongo las etiquetas, saldran 
                        //tal cual esta el texto.
});

/* Primer mensaje en pantalla de PC */
var typed1 = new Typed('#typedFirstMessage', {
  stringsElement: '#textStrings1', 
  typeSpeed: 75,
  startDelay: 300,
  backSpeed: 75,
  smartBackspace: false,
  shuffle: false,
  backDelay: 1500,
  loop: true,
  loopCount: 1,
  showCursor: true,
  cursorChar: '|',
  contentType: 'html',
});

/* 
Resaltar color del botón del menú presionado.
La idea es saber cuál de las opciones hemos visitado.
*/
let home = document.getElementById('home');
let about = document.getElementById('about');
let portfolio = document.getElementById('portfolio');
let contact = document.getElementById('contact');

home.addEventListener('click', () => {
  document.getElementById('home').classList.toggle('active');
  document.getElementById('main__menuButton--options').classList.toggle('active');
  document.getElementById('bars').classList.toggle('noVisible');
  document.getElementById('equis').classList.toggle('Visible');
  comprobar();
});

about.addEventListener('click', () => {
  document.getElementById('about').classList.toggle('active');
  document.getElementById('main__menuButton--options').classList.toggle('active');
  document.getElementById('bars').classList.toggle('noVisible');
  document.getElementById('equis').classList.toggle('Visible');
  comprobar();
});

portfolio.addEventListener('click', () => {
  document.getElementById('portfolio').classList.toggle('active');
  document.getElementById('main__menuButton--options').classList.toggle('active');
  document.getElementById('bars').classList.toggle('noVisible');
  document.getElementById('equis').classList.toggle('Visible');
  comprobar();
});

contact.addEventListener('click', () => {
  document.getElementById('contact').classList.toggle('active');
  document.getElementById('main__menuButton--options').classList.toggle('active');
  document.getElementById('bars').classList.toggle('noVisible');
  document.getElementById('equis').classList.toggle('Visible');
  comprobar();
});

/* 
Esta función es llamada cada vez que presionamos un botón y cambia de color.
La idea es que si ya todos los botones están de diferente color, se reinicien al color original.
*/
function comprobar() {
  let hasActive = home.classList.contains('active');
  console.log(hasActive);
  let hasActive1 = about.classList.contains('active');
  console.log(hasActive1);
  let hasActive2 = portfolio.classList.contains('active');
  console.log(hasActive2);
  let hasActive3 = contact.classList.contains('active');
  console.log(hasActive3);

  if (hasActive && hasActive1 && hasActive2 && hasActive3){
    document.getElementById('home').classList.toggle('active');
    document.getElementById('about').classList.toggle('active');
    document.getElementById('portfolio').classList.toggle('active');
    document.getElementById('contact').classList.toggle('active');
  }
}

/* Botón que oculta y muestra los divs de los trabajos hechos */
/* Obtenemos el elemento con el id portfolioWorksButton en la vista de celulares*/ 
const worksMenu = document.getElementById('portfolioWorksButton');

worksMenu.addEventListener('click', () => {
  document.getElementById('portfolioWorks').classList.toggle('active1');
  document.getElementById('downArrow').classList.toggle('noVisible1');
  document.getElementById('upArrow').classList.toggle('Visible1');
});


/* Con estas lineas obtenemos la longitud que debemos dar al 
stroke-dasharray y stroke-dashoffset de cada letra del texto svg en el CSS*/
const logo = document.querySelectorAll('#saludo path');

for(let i=0; i<logo.length; i++){
  console.log('Letter ' + i + ' is ' + logo[i].getTotalLength());
}

/***********************************************************************************
  DESKTOP SCREEN
***********************************************************************************/
/* Botones que hacen crecer cada div de información. */
let homeDesktop = document.getElementById('homeDivLogo');

homeDesktop.addEventListener('click', () => {
  document.getElementById('description').classList.toggle('active');
  document.getElementById('homeDesktop').classList.toggle('noVisible');
  document.getElementById('equisHomeDesktop').classList.toggle('visible');
  document.getElementById('firstMessageDesktop').classList.toggle('active');
});

let aboutDesktop = document.getElementById('aboutDivLogo');

aboutDesktop.addEventListener('click', () => {
  document.getElementById('aboutMe').classList.toggle('active');
  document.getElementById('aboutDesktop').classList.toggle('noVisible');
  document.getElementById('equisAboutDesktop').classList.toggle('visible');
  document.getElementById('firstMessageDesktop').classList.toggle('active');
});

let portfolioDesktop = document.getElementById('portfolioDivLogo');

portfolioDesktop.addEventListener('click', () => {
  document.getElementById('portfolioDiv').classList.toggle('active');
  document.getElementById('portfolioDesktop').classList.toggle('noVisible');
  document.getElementById('equisPortfolioDesktop').classList.toggle('visible');
  document.getElementById('firstMessageDesktop').classList.toggle('active');
});

let contactDesktop = document.getElementById('contactDivLogo');

contactDesktop.addEventListener('click', () => {
  document.getElementById('contactDiv').classList.toggle('active');
  document.getElementById('contactDesktop').classList.toggle('noVisible');
  document.getElementById('equisContactDesktop').classList.toggle('visible');
  document.getElementById('firstMessageDesktop').classList.toggle('active');
});

/* Tooltip del botón de Principal */
tippy('#homeDivLogo', {
  content: '<strong style="color:#6956af;">Principal</strong>',
  allowHTML: true,
  followCursor: true,
});

/* Tooltip del botón de Acerca de */
tippy('#aboutDivLogo', {
  content: '<strong style="color:#6956af;">Acerca de</strong>',
  allowHTML: true,
  followCursor: true,
});

/* Tooltip del botón de Portafolio */
tippy('#portfolioDivLogo', {
  content: '<strong style="color:#6956af;">Portafolio</strong>',
  allowHTML: true,
  followCursor: true,
});

/* Tooltip del botón de Contacto */
tippy('#contactDivLogo', {
  content: '<strong style="color:#6956af;">Contacto</strong>',
  allowHTML: true,
  followCursor: true,
});